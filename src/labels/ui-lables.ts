import { newLabel } from "@drincs/pixi-vn";

export const show_leaderboard = newLabel("show_leaderboard", [
    () => {
        return new Promise<void>((resolve) => {
            // Dispatch event to show leaderboard
            window.dispatchEvent(
                new CustomEvent("show-leaderboard-overlay", {
                    detail: {
                        onClose: () => {
                            console.log("🏆 Таблиця лідерів закрита");
                            resolve();
                        },
                    },
                })
            );
        });
    },
]);
