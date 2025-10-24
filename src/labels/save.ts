import { newLabel } from "@drincs/pixi-vn";
import { addRefreshSave } from "../utils/save-utility";
export const save = newLabel("save", [
    async (_1, _) => {
        await addRefreshSave();
        setTimeout(() => {}, 1000);
        return {};
    },
]);
