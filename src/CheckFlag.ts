import {CalcPokemon,AllyItemFlag,FoeItemFlag,AllyAbilityFlag,FoeAbilityFlag,WeatherFlag,HelpingHand,Compatibility, FriendGuard} from './CalcDamage';

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
type Type = typeof Type[keyof typeof Type];

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
} as const;
type AllyItem = typeof AllyItem[keyof typeof AllyItem];

//相手の持ち物
export const FoeItem = {
    notAny: "-",
    berry: "弱点半減きのみ",
    eviolite: "しんかのきせき",
    assaultVest: "とつげきチョッキ",
    metalPowder: "メタルパウダー",
    deepSeaScale: "しんかいのウロコ"
} as const;
type FoeItem = typeof FoeItem[keyof typeof FoeItem];

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
type AllyAbility = typeof AllyAbility[keyof typeof AllyAbility];

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
type FoeAbility = typeof FoeAbility[keyof typeof FoeAbility];

//天候
export const Weather = {
    notAny: "-",
    sun: "はれ",
    rain: "あめ",
    sandstorm: "すなあらし",
    hail: "あられ"
} as const;
type Weather = typeof Weather[keyof typeof Weather];

//フィールド
export const Field = {
    notAny: "-",
    electric: "エレキ",
    grassy: "グラス",
    misty: "ミスト"
} as const;
type Field = typeof Field[keyof typeof Field];

export const Species = {
    physical: "ぶつり",
    special: "とくしゅ"
} as const;
type Species = typeof Species[keyof typeof Species];

export class CheckFlags {
    //味方側の情報
    allyName : string; //味方側の名前
    allyLevel: number; //味方側のレベル
    allyTypeFirst: Type; //味方側のタイプ1
    allyTypeSecond: Type; //味方側のタイプ2
    allyAttack: number; //味方側のこうげき・とくこう
    allyAttackRank: number; //攻撃側の能力ランク

    allyAbility: AllyAbility; //味方側の特性
    allyItem: AllyItem; //味方側の持ち物

    burn: boolean; //やけど
    critical: boolean; //急所
    helpingHandFirst: boolean; //てだすけ1
    helpingHandSecond: boolean; //てだすけ2
    flowerGiftAlly: boolean; //フラワーギフト(味方側)
    meFirst: boolean; //さきどり
    charge: boolean; //じゅうでん

    ionDeluge: boolean; //プラズマシャワー
    electrify: boolean; //そうでん
    AllyTrickOrTreat: boolean; //ハロウィン
    AllyForestCurse: boolean; //もりののろい

    //技の情報
    movePower: number; //わざの威力
    moveSpecies: Species; //わざの分類(物理・特殊)
    moveType: Type; //わざのタイプ
    moveRange: boolean; //範囲技

    //相手側の情報
    foeName: string; //相手側の名前
    foeTypeFirst: Type; //相手側のタイプ1
    foeTypeSecond: Type; //相手側のタイプ2
    foeDefense: number; //相手側のぼうぎょ・とくぼう
    foeDefenseRank: number; //相手側の能力ランク

    foeAbility: FoeAbility; //相手側の特性
    foeItem: FoeItem; //相手側の持ち物

    reflect: boolean; //リフレクター
    lightScreen: boolean; //ひかりのかべ
    friendGuardFirst: boolean; //フレンドガード1
    friendGuardSecond: boolean; //フレンドガード2
    flowerGiftFoe: boolean; //フラワーギフト(味方側)

    foresight: boolean; //みやぶる
    miracleEye: boolean; //ミラクルアイ
    waterSport: boolean; //みずあそび
    mudSport: boolean; //どろあそび

    FoeTrickOrTreat: boolean; //ハロウィン
    FoeForestCurse: boolean; //もりののろい

    //環境情報
    doubleBattle: boolean; //ダブルバトルの場合
    weather: Weather; //天候
    field: Field; //フィールド
    gravity: boolean; //じゅうりょく
    fairyAura: boolean; //フェアリーオーラ
    darkAura: boolean; //ダークオーラ
    auraBreak: boolean; //オーラブレイク
    wonderRoom: boolean; //ワンダールーム

    //tmp
    weatherTmp: string;

    constructor(params: {
        allyName : string;
        allyLevel: number;
        allyTypeFirst: Type;
        allyTypeSecond: Type;
        allyAttack: number;
        allyAttackRank: number;
        allyAbility: AllyAbility;
        allyItem: AllyItem;
        burn: boolean;
        critical: boolean;
        helpingHandFirst: boolean;
        helpingHandSecond: boolean;
        flowerGiftAlly: boolean;
        meFirst: boolean;
        charge: boolean;
        ionDeluge: boolean;
        electrify: boolean;
        AllyTrickOrTreat: boolean;
        AllyForestCurse: boolean;
        movePower: number;
        moveSpecies: Species;
        moveType: Type;
        moveRange: boolean;
        foeName: string;
        foeTypeFirst: Type;
        foeTypeSecond: Type;
        foeDefense: number;
        foeDefenseRank: number;
        foeAbility: FoeAbility;
        foeItem: FoeItem;
        reflect: boolean;
        lightScreen: boolean;
        friendGuardFirst: boolean;
        friendGuardSecond: boolean;
        flowerGiftFoe: boolean;
        foresight: boolean;
        miracleEye: boolean;
        waterSport: boolean;
        mudSport: boolean;
        FoeTrickOrTreat: boolean;
        FoeForestCurse: boolean;
        doubleBattle: boolean;
        weather: Weather;
        field: Field;
        gravity: boolean;
        fairyAura: boolean;
        darkAura: boolean;
        auraBreak: boolean;
        wonderRoom: boolean;
    }
    ) {
        this.allyName = params.allyName;
        this.allyLevel = params.allyLevel;
        this.allyTypeFirst = params.allyTypeFirst;
        this.allyTypeSecond = params.allyTypeSecond;
        this.allyAttack = params.allyAttack;
        this.allyAttackRank = params.allyAttackRank;
        this.allyAbility = params.allyAbility;
        this.allyItem = params.allyItem;
        this.burn = params.burn;
        this.critical = params.critical;
        this.helpingHandFirst = params.helpingHandFirst;
        this.helpingHandSecond = params.helpingHandSecond;
        this.flowerGiftAlly = params.flowerGiftAlly;
        this.meFirst = params.meFirst;
        this.charge = params.charge;
        this.ionDeluge = params.ionDeluge;
        this.electrify = params.electrify;
        this.AllyTrickOrTreat = params.AllyTrickOrTreat;
        this.AllyForestCurse = params.AllyForestCurse;
        this.movePower = params.movePower;
        this.moveSpecies = params.moveSpecies;
        this.moveType = params.moveType;
        this.moveRange = params.moveRange;
        this.foeName = params.foeName;
        this.foeTypeFirst = params.foeTypeFirst;
        this.foeTypeSecond = params.foeTypeSecond;
        this.foeDefense = params.foeDefense;
        this.foeDefenseRank = params.foeDefenseRank;
        this.foeAbility = params.foeAbility;
        this.foeItem = params.foeItem;
        this.reflect = params.reflect;
        this.lightScreen = params.lightScreen;
        this.friendGuardFirst = params.friendGuardFirst;
        this.friendGuardSecond = params.friendGuardSecond;
        this.flowerGiftFoe = params.flowerGiftFoe;
        this.foresight = params.foresight;
        this.miracleEye = params.miracleEye;
        this.waterSport = params.waterSport;
        this.mudSport = params.mudSport;
        this.FoeTrickOrTreat = params.FoeTrickOrTreat;
        this.FoeForestCurse = params.FoeForestCurse;
        this.doubleBattle = params.doubleBattle;
        this.gravity = params.gravity;
        this.fairyAura = params.fairyAura;
        this.darkAura = params.darkAura;
        this.auraBreak = params.auraBreak;
        this.wonderRoom = params.wonderRoom;
    }

    private calcDamageGenerate(): number[] {
        //天候補正があるかどうか
        if (this.moveType === Type.fire && this.weather === Weather.sun){this.weatherTmp = WeatherFlag.weatherReinforce;}
        else if (this.moveType === Type.fire && this.weather === Weather.rain){this.weatherTmp = WeatherFlag.weatherWeak;}
        else if (this.moveType === Type.water && this.weather === Weather.rain){this.weatherTmp = WeatherFlag.weatherReinforce;}
        else if (this.moveType === Type.water && this.weather === Weather.sun){this.weatherTmp = WeatherFlag.weatherWeak;}

        //味方の特性

        //味方の持ち物

        //相手の特性

        //相手の持ち物

        //てだすけ

        //フレンドガード

        //タイプ倍率

        const calcPokemon = new CalcPokemon({
            level: this.allyLevel,
            power: this.movePower,
            attack: this.allyAttack,
            defense: this.foeDefense,
            attackRank: this.allyAttackRank,
            defenseRank: this.foeDefenseRank,
            typeMatch: this.allyTypeFirst === this.moveType || this.allyTypeSecond === this.moveType || (this.AllyForestCurse && this.moveType === Type.ghost) || (this.AllyTrickOrTreat && this.moveType === Type.grass),
            critical: this.critical,
            ranged: this.moveRange,
            burn: this.burn,
            reflect: (this.moveSpecies === Species.physical && this.reflect) || (this.moveSpecies === Species.special && this.lightScreen),
            mtwice: false,
            sandstorm: this.allyTypeFirst === Type.rock || this.allyTypeSecond === Type.rock,
            flowerGiftAttack: this.flowerGiftAlly,
            flowerGiftDefense: this.flowerGiftFoe,
            auraBreaker: this.auraBreak,
            aura: (this.moveType === Type.fairy && this.fairyAura) || (this.moveType === Type.fairy && this.fairyAura),
            powerHalf: false,
            powerOnePointFive: false,
            meFirst: this.meFirst,
            charge: this.charge,
            powerTwice: false,
            descentField: false,
            riseField: (this.moveType === Type.electric && this.field === Field.electric) || (this.moveType === Type.grass && this.field === Field.grassy),
            sport: (this.moveType === Type.fire && this.waterSport) || (this.moveType === Type.electric && this.mudSport),
            doubleBattle: this.doubleBattle,
            allyItem: AllyItemFlag.bandGlasses,
            foeItem: FoeItemFlag.notAny,
            allyAbility: AllyAbilityFlag.notAny,
            foeAbility: FoeAbilityFlag.notAny,
            weather: this.weatherTmp,
            helpingHand: HelpingHand.notAny,
            friendGuard: FriendGuard.notAny,
            compatibility: Compatibility.superEffective,
        });
        return [12,31];
    }
}