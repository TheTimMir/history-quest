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

export const boyar1 = new CharacterBaseModel("boyar1", {
    name: "Боярин 1",
});

export const boyar2 = new CharacterBaseModel("boyar2", {
    name: "Боярин 2",
});

export const merchant = new CharacterBaseModel("merchant", {
    name: "Купець",
});

export const envoy = new CharacterBaseModel("envoy", {
    name: "Посол",
});

export const roman = new CharacterBaseModel("roman", {
    name: "Роман Мстиславич",
});

export const retainer = new CharacterBaseModel("retainer", {
    name: "Дружинник (почет)",
});

export const bishop = new CharacterBaseModel("bishop", {
    name: "Єпископ",
});

export const crowd = new CharacterBaseModel("crowd", {
    name: "Натовп",
});

export const marketwoman = new CharacterBaseModel("marketwoman", {
    name: "Купчиха",
});

export const danilo = new CharacterBaseModel("danilo", {
    name: "Данило Романович",
});

export const lev = new CharacterBaseModel("lev", {
    name: "Лев Данилович",
});

export const papal_messenger = new CharacterBaseModel("papal_messenger", {
    name: "Посланець Папи",
});

export const boyar = new CharacterBaseModel("boyar", {
    name: "Боярин",
});

export const legate_opizo = new CharacterBaseModel("legate_opizo", {
    name: "Легат Опізо",
});

export const german_merchant = new CharacterBaseModel("german_merchant", {
    name: "Німецький Купець",
});

export const master_builder = new CharacterBaseModel("master_builder", {
    name: "Будівничий",
});

export const dmytro_dedko = new CharacterBaseModel("dmytro_dedko", {
    name: "Дмитро Дедько",
});

export const casimir = new CharacterBaseModel("casimir", {
    name: "Казимир III Великий",
});

export const advisor = new CharacterBaseModel("advisor", {
    name: "Радник",
});

export const lubart = new CharacterBaseModel("lubart", {
    name: "Любарт-Гедимінович",
});

export const voivode = new CharacterBaseModel("voivode", {
    name: "Воєвода",
});

export const townswoman = new CharacterBaseModel("townswoman", {
    name: "Міщанка",
});

export const artisan = new CharacterBaseModel("artisan", {
    name: "Ремісник",
});

export const envoy_casimir = new CharacterBaseModel("envoy_casimir", {
    name: "Посол Казимира",
});

export const envoy_grand_duke = new CharacterBaseModel("envoy_grand_duke", {
    name: "Посол Великого князя",
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
    boyar1,
    boyar2,
    merchant,
    envoy,
    roman,
    retainer,
    bishop,
    crowd,
    marketwoman,
    danilo,
    lev,
    papal_messenger,
    boyar,
    legate_opizo,
    german_merchant,
    master_builder,
    dmytro_dedko,
    casimir,
    advisor,
    lubart,
    voivode,
    townswoman,
    artisan,
    envoy_casimir,
    envoy_grand_duke,
]);
