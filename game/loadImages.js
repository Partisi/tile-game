// Loads all the images
// Overall just organizes based on asset classification category
let worldAssets = []
let borderAssets = []
let floorAssets = []

let otherAssets = []
let forestBack
let snowprints = {
    vertical: null,
    horizontal: null,
}

// Main Driver
function getAllImages() {
    loadWorldAssets()
    loadPlayerAssets()
    loadFloorAssets()
    loadEnemyAssets()
    loadBorderAssets()
    loadCatacombAssets()
    loadVillagerAssets()
    forestBack = loadImage('./assets/backgroundTrees.png')
    snowprints.horizontal = loadImage('./assets/snowprints/snowprinthorizontal.png')
    snowprints.vertical = loadImage('./assets/snowprints/snowprintvertical.png')
}

// Worlds
function loadWorldAssets() {
    for (let i = 0; i <= 29; i++) {
        worldAssets.push(loadImage(`./assets/singleImage/${i}.png`))
    }
}
function loadCatacombAssets() {
    otherAssets.push(loadImage('./assets/catacombs/mainlevbuild.png'))
    otherAssets.push(loadImage('./assets/catacombs/decorative.png'))
    otherAssets.push(loadImage('./assets/catacombs/key.png'))
    otherAssets.push(loadImage('./assets/catacombs/base.png'))
    otherAssets.push(loadImage('./assets/catacombs/baseempty.png'))
}

function loadFloorAssets() {
    floorAssets.push(loadImage('./assets/floors/floors.png'))
    floorAssets.push(loadImage('./assets/floors/road1.png'))
    floorAssets.push(loadImage('./assets/floors/road2.png'))
    floorAssets.push(loadImage('./assets/floors/water1.png'))
    floorAssets.push(loadImage('./assets/floors/ice1.png'))
}

function loadBorderAssets() {
    for (let i = 0; i <= 3; i++) { // cliffs
        borderAssets.push(loadImage(`./assets/borders/${i}.png`))
    }
}

// Enemy Assets
let enemyAssets = {
    ghoul: { left: null, right: null },
    cyclops: { main: null, rock: null },
    rat: null,
    bandit: { left: null, right: null },
    iceBandit: { left: null, right: null },
    demon: { left: null, right: null },
    attackAssets: {
        boom: null
    },
    skull: null
}
function loadEnemyAssets() {
    enemyAssets.ghoul.left = loadImage('./assets/enemies/ghoulleft.png')
    enemyAssets.ghoul.right = loadImage('./assets/enemies/ghoulright.png')
    enemyAssets.cyclops.main = loadImage('./assets/enemies/cyclops.png')
    enemyAssets.cyclops.rock = loadImage('./assets/enemies/therock.png')
    enemyAssets.rat = loadImage('./assets/enemies/mouse.png')
    enemyAssets.bandit.left = loadImage('./assets/enemies/thiccmanleft.png')
    enemyAssets.bandit.right = loadImage('./assets/enemies/thiccmanright.png')
    enemyAssets.demon.left = loadImage('./assets/enemies/demonbossleft.png')
    enemyAssets.demon.right = loadImage('./assets/enemies/demonbossright.png')
    enemyAssets.attackAssets.boom = loadImage('./assets/enemies/boom.png')
    enemyAssets.iceBandit.left = loadImage('./assets/enemies/icethiccmanleft.png')
    enemyAssets.iceBandit.right = loadImage('./assets/enemies/icethiccmanright.png')
    enemyAssets.skull = loadImage('./assets/enemies/skull.png')
}

// Player Assets
let playerAssets = {
    master: null,
}
function loadPlayerAssets() {
    playerAssets.master = loadImage('./assets/playerAssets/character.png')
}

// Villagers
let villagerAssets = {
    kid: null,
    oldMan: null,
    man: null,
    woman: null,
}
function loadVillagerAssets() {
    villagerAssets.kid = loadImage('./assets/villagers/5 Boy/Boy_idle.png')
    villagerAssets.oldMan = loadImage('./assets/villagers/1 Old_man/Old_man_idle.png')
    villagerAssets.man = loadImage('./assets/villagers/3 Man/Man_idle.png')
    villagerAssets.woman = loadImage('./assets/villagers/4 Woman/Woman_idle.png')
}

