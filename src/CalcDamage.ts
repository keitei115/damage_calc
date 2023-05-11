//味方の持ち物
export const AllyItemFlag = {
    notAny: "notAny", //持ち物なし
    expertBelt: "expertBelt", //たつじんのおび
    lifeOrb: "lifeOrb", //いのちのたま
    choice: "choice", //こだわりハチマキ・こだわりメガネ
    metronomeTwo: "metronomeTwo", //メトロノーム2回目
    metronomeThree: "metronomeThree", //メトロノーム3回目
    metronomeFour: "metronomeFour", //メトロノーム4回目
    metronomeFive: "metronomeFive", //メトロノーム5回目
    metronomeSix: "metronomeSix", //メトロノーム6回目
    specialItemAttack: "specialItemAttack", //でんきだま・ふといホネ・しんかいのキバ
    bandGlasses: "bandGlasses", //ちからのハチマキ・ものしりメガネ
    plate: "plate", //タイプ強化アイテム
    jewel: "jewel" //ジュエル
} as const;

//相手の持ち物
export const FoeItemFlag = {
    notAny: "notAny", //持ち物なし
    berry: "berry", //弱点半減きのみ
    evioliteVest: "evioliteVest", //しんかのきせき・とつげきチョッキ
    specialItemDefense: "specialItemDefense" //メタルパウダー・しんかいのウロコ
} as const;

//味方の特性
export const AllyAbilityFlag = {
    notAny: "notAny", //特性なし
    statusAttackHalf: "statusAttackHalf", //スロースタート・よわき
    statusAttackOnePointFive: "statusAttackOnePointFive", //しんりょく・もうか・げきりゅう・むしのしらせ・はりきり・もらいび・サンパワー
    guts: "guts", //こんじょう(やけどを無視する)
    statusTwice: "statusTwice", //ちからもち・ヨガパワー
    hustle: "hustle", //はりきり
    attackZeroPointSevenFive: "attackZeroPointSevenFive", //とうそうしん(異性)
    attackOnePointTwo: "attackOnePointTwo", //すてみ・てつのこぶし
    attackOnePointTwoFive: "attackOnePointTwoFive", //とうそうしん(同性)
    attackOnePointThree: "attackOnePointThree", //アナライズ・かたいツメ・スキン・すなのちから・ちからずく
    attackOnePointFive: "attackOnePointFive", //がんじょうあご・テクニシャン・どくぼうそう・ねつぼうそう・メガランチャー
    sniper: "sniper", //スナイパー
    tintedLens: "tintedLens", //いろめがね
    parentalBond: "parentalBond", //おやこあい
    adaptability: "adaptability" //てきおうりょく
} as const;

//相手の特性
export const FoeAbilityFlag = {
    notAny: "notAny", //特性なし
    statusDefenseOnePointFive: "statusDefenseOnePointFive", //くさのけがわ・ふしぎなうろこ
    thickFat: "thickFat", //あついしぼう
    defenseHalf: "defenseHalf", //たいねつ
    defenseOnePointTwoFive: "defenseOnePointTwoFive", //かんそうはだ
    mhalf: "mhalf", //マルチスケイル(特性による半減)
    mfilter: "mfilter" //ハードロック・フィルター
} as const;

//天候
export const WeatherFlag = {
    notAny: "notAny", //通常時
    weatherReinforce: "weatherReinforce", //天候補正(強化)
    weatherWeak: "weatherWeak" //天候補正(弱体化)
} as const;

//てだすけ
export const HelpingHand = {
    notAny: "notAny", //てだすけなし
    one: "one", //てだすけ1つ目
    two: "two" //てだすけ2つ目
} as const;

//フレンドガード
export const FriendGuard = {
    notAny: "notAny", //フレンドガードなし
    one: "one", //フレンドガード1つ目
    two: "two" //フレンドガード2つ目
} as const;

//タイプ相性による倍率
export const Compatibility = {
    notAny: 1,
    effective: 2,
    superEffective: 4,
    superVeryEffective: 8,
    notEffective: 0.5,
    notVeryEffective: 0.25,
    notVeryVeryEffective: 0.125,
    noEffect: 0
} as const;

export class CalcPokemon {
    level: number; //攻撃側のレベル
    power: number; //わざの威力
    attack: number; //こうげき・とくこう
    defense: number; //ぼうぎょ・とくぼう
    attackRank: number; //攻撃側の能力ランク
    defenseRank: number; //防御側の能力ランク

    //ダメージにかかわる補正
    typeMatch: boolean; //タイプ一致
    critical: boolean; //急所
    ranged: boolean; //範囲・全体技
    burn: boolean; //やけど
    reflect: boolean; //リフレクター・ひかりのかべ
    friendGuard: string; //フレンドガード
    mtwice: boolean; //穴を掘る→地震、ダイビング→波乗り、小さくなる→踏みつけの2倍

    //ステータスを上下させるシステム
    sandstorm: boolean; //いわタイプ+すなあらし
    flowerGiftAttack: boolean; //フラワーギフト(攻撃側)
    flowerGiftDefense: boolean; //フラワーギフト(防御側)

    //技の威力を上下させるシステム
    auraBreaker: boolean; //オーラブレイク
    aura: boolean; //フェアリーオーラ・ダークオーラ
    powerHalf: boolean; //雨下ソーラービーム
    powerOnePointFive: boolean; //持ち物を持ってるポケモンにはたきおとす
    meFirst: boolean; //さきどり
    charge: boolean; //じゅうでん
    powerTwice: boolean; //かたきうち・からげんき・クロスサンダー・クロスフレイム・しおみず・ベノムショック
    descentField: boolean; //グラスフィールド下でのじしん・じならし・マグニチュード、ミストフィールド下でのドラゴン技
    riseField: boolean; //エレキフィールド・グラスフィールド
    sport: boolean; //みずあそび、どろあそび

    //その他
    doubleBattle: boolean; //ダブルバトルの場合

    allyItem: string; //味方の持ち物
    foeItem: string; //相手の持ち物
    allyAbility: string; //味方の特性
    foeAbility: string; //相手の特性
    weather: string; //天候
    helpingHand: string; //てだすけ
    compatibility: number; //タイプ相性による倍率

    constructor(params: {
        level: number;
        power: number;
        attack: number;
        defense: number;
        attackRank: number;
        defenseRank: number;
        typeMatch: boolean;
        critical: boolean;
        ranged: boolean;
        burn: boolean;
        reflect: boolean;
        friendGuard: string;
        mtwice: boolean;
        sandstorm: boolean;
        flowerGiftAttack: boolean;
        flowerGiftDefense: boolean;
        auraBreaker: boolean;
        aura: boolean;
        powerHalf: boolean;
        powerOnePointFive: boolean;
        meFirst: boolean;
        charge: boolean;
        powerTwice: boolean;
        descentField: boolean;
        riseField: boolean;
        sport: boolean;
        doubleBattle: boolean;
        allyItem: string;
        foeItem: string;
        allyAbility: string;
        foeAbility: string;
        weather: string;
        helpingHand: string;
        compatibility: number;

    }
    ) {
        this.level = params.level;
        this.power = params.power;
        this.attack = params.attack;
        this.defense = params.defense;
        this.attackRank = params.attackRank;
        this.defenseRank = params.defenseRank;
        this.typeMatch = params.typeMatch;
        this.critical = params.critical;
        this.ranged = params.ranged;
        this.burn = params.burn;
        this.reflect = params.reflect;
        this.friendGuard = params.friendGuard;
        this.mtwice = params.mtwice;
        this.sandstorm = params.sandstorm;
        this.flowerGiftAttack = params.flowerGiftAttack;
        this.flowerGiftDefense = params.flowerGiftDefense;
        this.auraBreaker = params.auraBreaker;
        this.aura = params.aura;
        this.powerHalf = params.powerHalf;
        this.powerOnePointFive = params.powerOnePointFive;
        this.meFirst = params.meFirst;
        this.charge = params.charge;
        this.powerTwice = params.powerTwice;
        this.descentField = params.descentField;
        this.riseField = params.riseField;
        this.sport = params.sport;
        this.doubleBattle = params.doubleBattle;
        this.allyItem = params.allyItem;
        this.foeItem = params.foeItem;
        this.allyAbility = params.allyAbility;
        this.foeAbility = params.foeAbility;
        this.weather = params.weather;
        this.helpingHand = params.helpingHand;
        this.compatibility = params.compatibility;
    }

    //ステータス(こうげき・ぼうぎょ)の計算
    private calcStatus(): [number, number] {
        let baseAttack = this.attack;
        let baseDefense = this.defense;

        //ランク補正
        if (this.attackRank >= 0) baseAttack = Math.floor(baseAttack * (2 + this.attackRank) / 2);
        else baseAttack = Math.floor(baseAttack * 2 / (2 - this.attackRank));

        if (this.defenseRank >= 0) baseDefense = Math.floor(baseDefense * (2 + this.defenseRank) / 2);
        else baseDefense = Math.floor(baseDefense * 2 / (2 - this.defenseRank));

        //はりきり
        if (this.allyAbility === AllyAbilityFlag.hustle) baseAttack = Math.floor(baseAttack * 6144 / 4096);

        //攻撃ステータスの補正
        let statusAttackCorrectionValue = 4096;

        if (this.allyAbility === AllyAbilityFlag.statusAttackHalf) statusAttackCorrectionValue = this.CorrectionValueCalculation(2048, statusAttackCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.statusAttackOnePointFive) statusAttackCorrectionValue = this.CorrectionValueCalculation(6144, statusAttackCorrectionValue);
        if (this.flowerGiftAttack) statusAttackCorrectionValue = this.CorrectionValueCalculation(6144, statusAttackCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.guts) statusAttackCorrectionValue = this.CorrectionValueCalculation(6144, statusAttackCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.statusTwice) statusAttackCorrectionValue = this.CorrectionValueCalculation(8192, statusAttackCorrectionValue);
        if (this.foeAbility === FoeAbilityFlag.thickFat) statusAttackCorrectionValue = this.CorrectionValueCalculation(2048, statusAttackCorrectionValue);
        if (this.allyItem === AllyItemFlag.choice) statusAttackCorrectionValue = this.CorrectionValueCalculation(6144, statusAttackCorrectionValue);
        if (this.allyItem === AllyItemFlag.specialItemAttack) statusAttackCorrectionValue = this.CorrectionValueCalculation(8192, statusAttackCorrectionValue);

        baseAttack = this.OverHalf(baseAttack * statusAttackCorrectionValue / 4096.0);

        //すなあらし+いわタイプによる特防上昇
        if (this.sandstorm) baseDefense = Math.floor(baseDefense * 6144 / 4096);

        //防御ステータスの補正
        let statusDefenseCorrectionValue = 4096;

        if (this.foeAbility === FoeAbilityFlag.statusDefenseOnePointFive) statusDefenseCorrectionValue = this.CorrectionValueCalculation(6144, statusDefenseCorrectionValue);
        if (this.flowerGiftDefense) statusDefenseCorrectionValue = this.CorrectionValueCalculation(6144, statusDefenseCorrectionValue);
        if (this.foeItem === FoeItemFlag.evioliteVest) statusDefenseCorrectionValue = this.CorrectionValueCalculation(6144, statusDefenseCorrectionValue);
        if (this.foeItem === FoeItemFlag.specialItemDefense) statusDefenseCorrectionValue = this.CorrectionValueCalculation(8192, statusDefenseCorrectionValue);

        baseDefense = this.OverHalf(baseDefense * statusDefenseCorrectionValue / 4096.0);

        //1未満のとき1にする
        if (baseAttack < 1) baseAttack = 1;
        if (baseDefense < 1) baseDefense = 1;

        return ([baseAttack, baseDefense]);
    }

    //わざの威力の計算
    private calcPower(): number {
        let basePower = this.power;

        let powerCorrectionValue = 4096;

        if (this.allyAbility === AllyAbilityFlag.attackZeroPointSevenFive) powerCorrectionValue = this.CorrectionValueCalculation(3072, powerCorrectionValue);
        if (this.auraBreaker) powerCorrectionValue = this.CorrectionValueCalculation(3072, powerCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.attackOnePointTwo) powerCorrectionValue = this.CorrectionValueCalculation(4915, powerCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.attackOnePointTwoFive) powerCorrectionValue = this.CorrectionValueCalculation(5120, powerCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.attackOnePointThree) powerCorrectionValue = this.CorrectionValueCalculation(5325, powerCorrectionValue);
        if (this.aura) powerCorrectionValue = this.CorrectionValueCalculation(5448, powerCorrectionValue);
        if (this.allyAbility === AllyAbilityFlag.attackOnePointFive) powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
        if (this.foeAbility === FoeAbilityFlag.defenseHalf) powerCorrectionValue = this.CorrectionValueCalculation(2048, powerCorrectionValue);
        if (this.foeAbility === FoeAbilityFlag.defenseOnePointTwoFive) powerCorrectionValue = this.CorrectionValueCalculation(5120, powerCorrectionValue);
        if (this.allyItem === AllyItemFlag.bandGlasses) powerCorrectionValue = this.CorrectionValueCalculation(4505, powerCorrectionValue);
        if (this.allyItem === AllyItemFlag.plate) powerCorrectionValue = this.CorrectionValueCalculation(4915, powerCorrectionValue);
        if (this.allyItem === AllyItemFlag.jewel) powerCorrectionValue = this.CorrectionValueCalculation(5325, powerCorrectionValue);
        if (this.powerHalf) powerCorrectionValue = this.CorrectionValueCalculation(2048, powerCorrectionValue);
        if (this.powerOnePointFive) powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
        if (this.helpingHand === HelpingHand.one) powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
        else if (this.helpingHand === HelpingHand.two) {
            powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
            powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
        }
        if (this.meFirst) powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
        if (this.charge) powerCorrectionValue = this.CorrectionValueCalculation(8192, powerCorrectionValue);
        if (this.powerTwice) powerCorrectionValue = this.CorrectionValueCalculation(8192, powerCorrectionValue);
        if (this.descentField) powerCorrectionValue = this.CorrectionValueCalculation(2048, powerCorrectionValue);
        if (this.riseField) powerCorrectionValue = this.CorrectionValueCalculation(6144, powerCorrectionValue);
        if (this.sport) powerCorrectionValue = this.CorrectionValueCalculation(1352, powerCorrectionValue);

        basePower = this.OverHalf(basePower * powerCorrectionValue / 4096.0);

        if (basePower < 1) basePower = 1;

        return basePower;
    }

    //ダメージの補正値の計算
    private calcDamageCorrectionValue(): number {
        let damageCorrectionValuer = 4096;
        if (this.reflect && this.doubleBattle) damageCorrectionValuer = this.CorrectionValueCalculation(2732, damageCorrectionValuer);
        else if (this.reflect && !this.doubleBattle) damageCorrectionValuer = this.CorrectionValueCalculation(2048, damageCorrectionValuer);
        if (this.allyAbility === AllyAbilityFlag.sniper && this.critical) damageCorrectionValuer = this.CorrectionValueCalculation(6144, damageCorrectionValuer);
        if (this.allyAbility === AllyAbilityFlag.tintedLens) damageCorrectionValuer = this.CorrectionValueCalculation(8192, damageCorrectionValuer);
        if (this.foeAbility === FoeAbilityFlag.mhalf) damageCorrectionValuer = this.CorrectionValueCalculation(2048, damageCorrectionValuer);
        if (this.friendGuard === FriendGuard.one) damageCorrectionValuer = this.CorrectionValueCalculation(3072, damageCorrectionValuer);
        else if (this.friendGuard === FriendGuard.two) {
            damageCorrectionValuer = this.CorrectionValueCalculation(3072, damageCorrectionValuer);
            damageCorrectionValuer = this.CorrectionValueCalculation(3072, damageCorrectionValuer);
        }
        if (this.foeAbility === FoeAbilityFlag.mfilter) damageCorrectionValuer = this.CorrectionValueCalculation(3072, damageCorrectionValuer);
        if (this.allyItem === AllyItemFlag.metronomeTwo) damageCorrectionValuer = this.CorrectionValueCalculation(4915, damageCorrectionValuer);
        else if (this.allyItem === AllyItemFlag.metronomeThree) damageCorrectionValuer = this.CorrectionValueCalculation(5734, damageCorrectionValuer);
        else if (this.allyItem === AllyItemFlag.metronomeFour) damageCorrectionValuer = this.CorrectionValueCalculation(6553, damageCorrectionValuer);
        else if (this.allyItem === AllyItemFlag.metronomeFive) damageCorrectionValuer = this.CorrectionValueCalculation(7372, damageCorrectionValuer);
        else if (this.allyItem === AllyItemFlag.metronomeSix) damageCorrectionValuer = this.CorrectionValueCalculation(8192, damageCorrectionValuer);
        if (this.allyItem === AllyItemFlag.expertBelt) damageCorrectionValuer = this.CorrectionValueCalculation(4915, damageCorrectionValuer);
        if (this.allyItem === AllyItemFlag.lifeOrb) damageCorrectionValuer = this.CorrectionValueCalculation(5324, damageCorrectionValuer);
        if (this.foeItem === FoeItemFlag.berry) damageCorrectionValuer = this.CorrectionValueCalculation(2048, damageCorrectionValuer);
        if (this.mtwice) damageCorrectionValuer = this.CorrectionValueCalculation(8192, damageCorrectionValuer);
        return damageCorrectionValuer;
    }

    public calcDamage(): number[] {
        let calculatedAttack, calculatedDefense: number;
        [calculatedAttack, calculatedDefense] = this.calcStatus();
        let calculatedPower: number = this.calcPower();
        let calculatedDamageCorrectionValue = this.calcDamageCorrectionValue();
        const RandomCorrection: number[] = [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        let baseLevel, status, baseDamage, damage: number;
        let randomDamage: number[] = new Array(16);
        baseLevel = Math.floor(this.level * 2 / 5 + 2);
        status = Math.floor(baseLevel * calculatedPower * calculatedAttack / calculatedDefense);
        baseDamage = Math.floor(status / 50 + 2);
        damage = baseDamage;
        if (this.ranged && this.doubleBattle) damage = this.OverHalf(damage * 3072 / 4096);
        if (this.allyAbility === AllyAbilityFlag.parentalBond) damage = this.OverHalf(damage * 2048 / 4096);
        if (this.weather === WeatherFlag.weatherWeak) damage = this.OverHalf(damage * 2048 / 4096);
        else if (this.weather === WeatherFlag.weatherReinforce) damage = this.OverHalf(damage * 6144 / 4096);
        if (this.critical) damage = this.OverHalf(damage * 6144 / 4096);
        randomDamage = RandomCorrection.map(e => Math.floor(e * damage / 100));
        if (this.typeMatch && this.allyAbility === AllyAbilityFlag.adaptability) randomDamage = randomDamage.map(e => this.OverHalf(e * 8192 / 4096));
        else if (this.typeMatch && this.allyAbility !== AllyAbilityFlag.adaptability) randomDamage = randomDamage.map(e => this.OverHalf(e * 6144 / 4096));
        randomDamage = randomDamage.map(e => (Math.floor(e * this.compatibility)));

        if (this.burn) randomDamage = randomDamage.map(e => this.OverHalf(e * 2048 / 4096));
        randomDamage = randomDamage.map(e => this.OverHalf(e * calculatedDamageCorrectionValue / 4096));
        if (this.compatibility !== Compatibility.noEffect) randomDamage = randomDamage.map(e => e > 0 ? e : 1);

        return randomDamage;
    }

    // n/4096をかけた後、四捨五入
    private CorrectionValueCalculation(correction: number, baseValue: number): number {
        const x: number = baseValue * correction / 4096.0;
        const y: number = Math.round(x);
        return y;
    }

    //五捨五超入
    private OverHalf(x: number): number {
        if (x % 1 > 0.5) {
            return Math.floor(x) + 1;
        } else {
            return Math.floor(x);
        }
    }

    public ForTest() {
        return true;
    }
}
