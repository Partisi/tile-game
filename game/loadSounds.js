// Loads in All Game Sounds
let sounds = {
    blizzard: null,
    swordSwing: null,
    bigSword: null,
    hurtMan: null,
    hurtMonster: null,
    runningMonster: null,
    runningMan: null,
    hurtIce: null,

    rocking: null,
    stomping: null,
    cyclopsRoar: null,
    cyclopsRoar2: null,

    doors: null,

    backgroundMain: null,
    endgame: null,

    caveVibes: null,

    demonFire: null,
    demonRandom: null,
    demonRoar: null,
    demonAttacking: null,

    key: null,
}

function loadAllSounds() {
    sounds.blizzard = loadSound('./audio/blizzard.wav')
    sounds.swordSwing = loadSound('./audio/swordswing.wav')
    sounds.bigSword = loadSound('./audio/bigsword.wav')
    sounds.hurtMan = loadSound('./audio/hurtman.wav')
    sounds.hurtMonster = loadSound('./audio/monsterpain.wav')
    sounds.runningMonster = loadSound('./audio/monstergasp.wav')
    sounds.runningMan = loadSound('./audio/runningman.m4a')
    sounds.hurtIce = loadSound('./audio/icedeath.wav')
    sounds.rocking = loadSound('./audio/rocking.wav')
    sounds.stomping = loadSound('./audio/stomping.wav')
    sounds.doors = loadSound('./audio/doors.wav')
    sounds.cyclopsRoar = loadSound('./audio/cyclopsroar.wav')
    sounds.cyclopsRoar2 = loadSound('./audio/cyclopsroar2.wav')
    sounds.backgroundMain = loadSound('./audio/backgroundvibes.mp3')
    sounds.endgame = loadSound('./audio/endgame.mp3')
    sounds.caveVibes = loadSound('./audio/spookyvibes.wav')
    sounds.demonFire= loadSound('./audio/demonfire.wav')
    sounds.demonRandom = loadSound('./audio/darkness.wav')
    sounds.demonRoar = loadSound('./audio/roar.wav')
    sounds.key = loadSound('./audio/key.wav')
    sounds.demonAttacking = loadSound('./audio/demonattacking.mp3')
}