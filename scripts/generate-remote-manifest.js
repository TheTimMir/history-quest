import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_BASE = "https://raw.githubusercontent.com/TheTimMir/history-quest/refs/heads/main/"; // change if needed
const ASSETS_DIR = path.join(__dirname, "../src/assets");
const MANIFEST_PATH = path.join(ASSETS_DIR, "manifest.ts");
const BACKUP_PATH = MANIFEST_PATH + ".bak";

function camelize(parts) {
    return parts
        .join("_")
        .replace(/(?:[_\-/ ])([a-zA-Z0-9])/g, (_, ch) => ch.toUpperCase())
        .replace(/[^A-Za-z0-9_]/g, "")
        .replace(/^([a-z])/, (m) => m.toLowerCase());
}

function walkDir(dir, baseRel = "") {
    const out = [];
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const rel = baseRel ? `${baseRel}/${entry.name}` : entry.name;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...walkDir(full, rel));
        else if (entry.isFile()) out.push(rel);
    }
    return out;
}

export function generateRemoteManifest() {
    // backup original
    if (fs.existsSync(MANIFEST_PATH) && !fs.existsSync(BACKUP_PATH)) {
        fs.copyFileSync(MANIFEST_PATH, BACKUP_PATH);
    }

    const backgroundsDir = path.join(ASSETS_DIR, "backgrounds");
    const charactersDir = path.join(ASSETS_DIR, "characters");

    const bgFiles = walkDir(backgroundsDir); // relative paths under backgrounds
    const charFiles = walkDir(charactersDir); // relative under characters (may include subfolders)

    const bgAssets = bgFiles.map((rel) => {
        const alias = camelize([path.basename(rel, path.extname(rel))]);
        const url = RAW_BASE + "src/assets/backgrounds/" + rel.replace(/\\/g, "/");
        return `                { alias: "${alias}", src: "${url}" }`;
    });

    const charAssets = charFiles.map((rel) => {
        // alias: parentfolder + filename or filename alone
        const parts = rel.split("/").map((p) => path.basename(p, path.extname(p)));
        const alias = camelize(parts);
        const url = RAW_BASE + "src/assets/characters/" + rel.replace(/\\/g, "/");
        return `                { alias: "${alias}", src: "${url}" }`;
    });

    const content = `import { AssetsManifest } from "@drincs/pixi-vn";

const manifest: AssetsManifest = {
    bundles: [
        {
            name: "ihor",
            assets: [
${charAssets.join(",\n")}
            ],
        },
        {
            name: "bg",
            assets: [
${bgAssets.join(",\n")}
            ],
        },
    ],
};
export default manifest;
`;

    fs.writeFileSync(MANIFEST_PATH, content, "utf8");
    console.log("Generated remote manifest at src/assets/manifest.ts (backup saved to manifest.ts.bak)");
}

export function restoreOriginalManifest() {
    if (fs.existsSync(BACKUP_PATH)) {
        fs.copyFileSync(BACKUP_PATH, MANIFEST_PATH);
        fs.unlinkSync(BACKUP_PATH);
        console.log("Restored original manifest.ts from backup.");
    }
}
