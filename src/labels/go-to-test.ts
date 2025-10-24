// src/labels/go_to_test.ts
import { newLabel } from "@drincs/pixi-vn";
export const go_to_kyivska_rus_test = newLabel("go-to-kyivska-rus-test", [
    async () => {
        console.log("🔁 go_to_test label called");
        window.location.href = "https://historyquest-f3eea.web.app/kyivska-rus/test";
    },
]);

export const go_to_kyivska_rus_map = newLabel("go-to-kyivska-rus-map", [
    async () => {
        console.log("🔁 go_to_test label called");
        window.location.href = "https://historyquest-f3eea.web.app/kyivska-rus/map";
    },
]);

export const go_to_main = newLabel("go-to-main", [
    async () => {
        console.log("🔁 go_to_main label called");
        window.location.href = "https://historyquest-f3eea.web.app/";
    },
]);
