export const Type = {
    normal: "ノーマル",
    fire: "ほのお",
    water: "みず",
    electric: "でんき",
    grass: "くさ",
    ice: "こおり",
    fighting: "かくとう",
    poison: "どく",
    ground: "じめん",
    fly: "ひこう",
    psychic: "エスパー",
    bug: "むし",
    rock: "いわ",
    ghost: "ゴースト",
    dragon: "ドラゴン",
    dark: "あく",
    steel: "はがね",
    fairy: "フェアリー",
} as const;

//味方の持ち物
export const AllyItem = {
    notAny: "-",
    expertBelt: "たつじんのおび",
    lifeOrb: "いのちのたま",
    choiceBand: "こだわりハチマキ",
    choiceSpecs: "こだわりメガネ",
    metronomeTwo: "メトロノーム(2回目)",
    metronomeThree: "メトロノーム(3回目)",
    metronomeFour: "メトロノーム(4回目)",
    metronomeFive: "メトロノーム(5回目)",
    metronomeSix: "メトロノーム(6回目)",
    lightBall: "でんきだま",
    thickClub: "ふといホネ",
    deepSeaTooth: "しんかいのキバ",
    muscleBand: "ちからのハチマキ",
    wiseGlasses: "ものしりメガネ",
    plate: "タイプ強化アイテム",
    jewel: "ジュエル"
}

//相手の持ち物
export const FoeItem = {
    notAny: "-",
    berry: "弱点半減きのみ",
    eviolite: "しんかのきせき",
    assaultVest: "とつげきチョッキ",
    metalPowder: "メタルパウダー",
    deepSeaScale: "しんかいのウロコ"
} as const;

//味方の特性
export const AllyAbility = {
    notAny: "-",
    slowStart: "スロースタート",
    defeatist: "よわき",
    overgrow: "しんりょく",
    blaze: "もうか",
    torrent: "げきりゅう",
    swarm: "むしのしらせ",
    hustle: "はりきり",
    flashFire: "もらいび",
    solarPower: "サンパワー",
    guts: "こんじょう",
    HugePower: "ちからもち",
    PurePower: "ヨガパワー",
    reckless: "すてみ",
    ironFist: "てつのこぶし",
    rivalryToSame: "とうそうしん(同性)",
    rivalryToOpposite: "とうそうしん(異性)",
    analytic: "アナライズ",
    toughClaws: "かたいツメ",
    sandForce: "すなのちから",
    sheerForce: "ちからずく",
    refrigerate: "フリーズスキン",
    aerilate: "スカイスキン",
    pixilate: "フェアリースキン",
    strongJaw: "がんじょうあご",
    technician: "テクニシャン",
    toxicBoost: "どくぼうそう",
    flareBoost: "ねつぼうそう",
    megaLauncher: "メガランチャー",
    sniper: "スナイパー",
    tintedLens: "いろめがね",
    parentalBond: "おやこあい"
} as const;

//相手の特性
export const FoeAbility = {
    notAny: "-",
    grassPelt: "くさのけがわ",
    marvelScale: "ふしぎなうろこ",
    thickFat: "あついしぼう",
    heatproof: "たいねつ",
    drySkin: "かんそうはだ",
    multiscale: "マルチスケイル",
    solidRock: "ハードロック",
    filter: "フィルター"
} as const;

//天候
export const Weather = {
    notAny: "-",
    sun: "はれ",
    rain: "あめ",
    sandstorm: "すなあらし",
    hail: "あられ"
} as const;

export class CheckFlags {

}