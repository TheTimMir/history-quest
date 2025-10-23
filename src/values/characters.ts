import { CharacterBaseModel, RegisteredCharacters } from "@drincs/pixi-vn";

// === ОЛЕГ ===
export const oleg = new CharacterBaseModel("oleg", {
    name: "Олег (Віщий)",
    color: "#2f6f4f",
});

// === ІГОР ===
export const ihor = new CharacterBaseModel("ihor", {
    name: "Ігор (княжич)",
    color: "#3a6ea5",
});

// === АСКОЛЬД ===
export const askold = new CharacterBaseModel("askold", {
    name: "Аскольд",
    color: "#8c4a3a",
});

// === ДІР ===
export const dir = new CharacterBaseModel("dir", {
    name: "Дір",
    color: "#8c6a3a",
});

// === ДРУЖИННИК ===
export const druzhynnyk = new CharacterBaseModel("druzhynnyk", {
    name: "Дружинник",
    color: "#6b6b6b",
});

// === ЛІТОПИСЕЦЬ ===
export const narrator = new CharacterBaseModel("narrator", {
    name: "Літописець",
    color: "#7a6f62",
});

export const volodymyr = new CharacterBaseModel("volodymyr", {
    name: "Князь Володимир",
});

export const rabbi = new CharacterBaseModel("rabbi", {
    name: "Рабин",
});

export const imam = new CharacterBaseModel("imam", {
    name: "Імам",
});

export const monk = new CharacterBaseModel("monk", {
    name: "Монах",
});

export const kyivite = new CharacterBaseModel("kyivite", {
    name: "Киянин",
});

export const warrior = new CharacterBaseModel("warrior", {
    name: "Воїн",
});

export const priest = new CharacterBaseModel("priest", {
    name: "Священник",
});

export const child = new CharacterBaseModel("child", {
    name: "Дитина",
});

export const scribe = new CharacterBaseModel("scribe", {
    name: "Книжник",
});

export const prince_kyiv = new CharacterBaseModel("prince_kyiv", {
    name: "Київський князь",
});

export const prince_chernihiv = new CharacterBaseModel("prince_chernihiv", {
    name: "Чернігівський князь",
});

export const prince_smolensk = new CharacterBaseModel("prince_smolensk", {
    name: "Смоленський князь",
});

export const prince_other = new CharacterBaseModel("prince_other", {
    name: "Удільний князь",
});

export const herald = new CharacterBaseModel("herald", {
    name: "Глашатай",
});

export const chronicler = new CharacterBaseModel("chronicler", {
    name: "Літописець (хроніст)",
});

export const servant = new CharacterBaseModel("servant", {
    name: "Слуга",
});

export const map_bearer = new CharacterBaseModel("map_bearer", {
    name: "Носій мапи",
});

// === Реєстрація всіх ===
RegisteredCharacters.add([
    oleg,
    ihor,
    askold,
    dir,
    druzhynnyk,
    narrator,
    volodymyr,
    rabbi,
    imam,
    monk,
    kyivite,
    warrior,
    priest,
    child,
    scribe,
    prince_kyiv,
    prince_chernihiv,
    prince_smolensk,
    prince_other,
    herald,
    chronicler,
    servant,
    map_bearer,
]);
