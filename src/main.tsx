import { Assets, canvas, Container, Game } from "@drincs/pixi-vn";
import { setupInkHmrListener } from "@drincs/pixi-vn-ink/vite-listener";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CANVAS_UI_LAYER_NAME } from "./constans";
import "./index.css";

const body = document.body;
if (!body) {
    throw new Error("body element not found");
}

Game.init(body, {
    width: 1080,
    height: 1920,
    backgroundColor: "#eedec7",
}).then(() => {
    // Pixi.JS UI Layer
    canvas.addLayer(CANVAS_UI_LAYER_NAME, new Container());

    // React setup with ReactDOM
    const root = document.getElementById("root");
    if (!root) {
        throw new Error("root element not found");
    }

    const htmlLayout = canvas.addHtmlLayer("ui", root);
    if (!htmlLayout) {
        throw new Error("htmlLayout not found");
    }
    const reactRoot = createRoot(htmlLayout);
    const queryClient = new QueryClient();

    reactRoot.render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
});

Game.onEnd(async ({ navigate }) => {
    Game.clear();
    navigate("/");
});

Game.onError((type, error, { notify, t }) => {
    notify(t("allert_error_occurred"), { variant: "error" });
    console.error(`Error occurred: ${type}`, error);
});

Game.onLoadingLabel((_stepId, { id }) => Assets.backgroundLoadBundle(id));

setupInkHmrListener();
