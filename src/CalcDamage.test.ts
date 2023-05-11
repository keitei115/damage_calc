import {CalcPokemon,AllyItemFlag,FoeItemFlag,AllyAbilityFlag,FoeAbilityFlag,WeatherFlag,HelpingHand,Compatibility, FriendGuard} from './CalcDamage';

test("desu" , () => {
    const calcPokemon = new CalcPokemon({
        level: 75,
        power: 65,
        attack: 123,
        defense: 163,
        attackRank: 0,
        defenseRank: 0,
        typeMatch: true,
        critical: true,
        ranged: false,
        burn: false,
        reflect: false,
        mtwice: false,
        sandstorm: false,
        flowerGiftAttack: false,
        flowerGiftDefense: false,
        auraBreaker: false,
        aura: false,
        powerHalf: false,
        powerOnePointFive: false,
        meFirst: false,
        charge: false,
        powerTwice: false,
        descentField: false,
        riseField: false,
        sport: false,
        doubleBattle: false,
        allyItem: AllyItemFlag.bandGlasses,
        foeItem: FoeItemFlag.notAny,
        allyAbility: AllyAbilityFlag.notAny,
        foeAbility: FoeAbilityFlag.notAny,
        weather: WeatherFlag.notAny,
        helpingHand: HelpingHand.notAny,
        friendGuard: FriendGuard.notAny,
        compatibility: Compatibility.superEffective,
    });
    let a,b;
    let p;
    let cd;
    let c:number[];
    //[a,b] = calcPokemon.calcStatus();
    //p = calcPokemon.calcPower();
    //cd = calcPokemon.calcDamageCorrectionValue();
    c = calcPokemon.calcDamage();
    expect(c[0]).toBe(268);
})