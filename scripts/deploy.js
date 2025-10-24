import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { restoreOriginalManifest } from "./generate-remote-manifest.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INK_DIR = path.join(__dirname, "../src/ink");
const SRC_INK_DIR = path.join(__dirname, "../src/ink"); // Target directory

// Get all folders in /src/ink
const inkFolders = fs
    .readdirSync(INK_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

console.log(`Found ${inkFolders.length} ink folders to deploy:`, inkFolders);

// Store original files to restore later
const originalFiles = new Map();

function backupOriginalFiles() {
    const inkFiles = fs
        .readdirSync(SRC_INK_DIR, { withFileTypes: true })
        .filter((dirent) => dirent.isFile())
        .map((dirent) => dirent.name);

    inkFiles.forEach((file) => {
        const filePath = path.join(SRC_INK_DIR, file);
        originalFiles.set(file, fs.readFileSync(filePath));
    });
}

function restoreOriginalFiles() {
    originalFiles.forEach((content, filename) => {
        const filePath = path.join(SRC_INK_DIR, filename);
        fs.writeFileSync(filePath, content);
    });
}

function copyInkFiles(inkName) {
    const inkPath = path.join(INK_DIR, inkName);
    const files = fs.readdirSync(inkPath, { withFileTypes: true }).filter((dirent) => dirent.isFile());

    console.log(`  Copying ${files.length} files from ${inkName}...`);
    files.forEach((file) => {
        const srcPath = path.join(inkPath, file.name);
        const destPath = path.join(SRC_INK_DIR, file.name);
        fs.copyFileSync(srcPath, destPath);
    });
}

function removeCopiedFiles(inkName) {
    const inkPath = path.join(INK_DIR, inkName);
    const files = fs
        .readdirSync(inkPath, { withFileTypes: true })
        .filter((dirent) => dirent.isFile())
        .map((dirent) => dirent.name);

    console.log(`  Removing copied files...`);
    files.forEach((filename) => {
        const filePath = path.join(SRC_INK_DIR, filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    });
}

function deployInk(inkName) {
    console.log(`\n🚀 Deploying ${inkName}...`);

    try {
        // Copy files
        copyInkFiles(inkName);

        // Build
        console.log(`  Building...`);
        execSync("npm run build", { stdio: "inherit" });

        // Deploy
        console.log(`  Deploying to Firebase...`);
        execSync(`firebase deploy --only hosting:${inkName}`, { stdio: "inherit" });

        // Clean up
        removeCopiedFiles(inkName);

        console.log(`✅ ${inkName} deployed successfully!`);
    } catch (error) {
        console.error(`❌ Error deploying ${inkName}:`, error.message);
        // Clean up on error
        removeCopiedFiles(inkName);
        throw error;
    }
}

// Main execution
async function main() {
    try {
        // Backup original files
        console.log("📦 Backing up original files...");
        backupOriginalFiles();

        // Generate remote manifest so build uses images from GitHub
        console.log("🌐 Generating remote manifest (GitHub raw URLs)...");
        //generateRemoteManifest();

        // Deploy each ink folder
        for (const inkName of inkFolders) {
            await deployInk(inkName);
        }

        // Restore original manifest and original files
        console.log("\n🔄 Restoring original files...");
        restoreOriginalFiles();
        restoreOriginalManifest();

        console.log("\n✨ All deployments completed successfully!");
    } catch (error) {
        console.error("\n❌ Deployment failed:", error.message);
        // Restore original files on error
        restoreOriginalFiles();
        restoreOriginalManifest();
        process.exit(1);
    }
}

main();
