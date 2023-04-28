import {CalcPokemon,AllyItem,FoeItem,AllyAbility,FoeAbility,Weather,HelpingHand,Compatibility} from './CalcDamage';

test("desu" , () => {
    const calcPokemon = new CalcPokemon({
        level: 75,
        power: 65,
        attack: 123,
        defense: 163,
        attackRank: 0,
        defenseRank: 0,
        typeMatch: true,
        adaptability: false,
        critical: false,
        ranged: false,
        burn: false,
        reflect: false,
        friendGuard: false,
        mtwice: false,
        sandstorm: false,
        flowerGiftAttack: false,
        flowerGiftDefence: false,
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
        allyItem: AllyItem.notAny,
        foeItem: FoeItem.notAny,
        allyAbility: AllyAbility.notAny,
        foeAbility: FoeAbility.notAny,
        weather: Weather.notAny,
        helpingHand: HelpingHand.notAny,
        compatibility: Compatibility.superEffective,
    });
    let a,b;
    let p;
    let cd;
    let c:number[];
    [a,b] = calcPokemon.calcStatus();
    p = calcPokemon.calcPower();
    cd = calcPokemon.calcDamageCorrectionValue();
    c = calcPokemon.calcDamage();
    expect(c[15]).toBe(196);
})