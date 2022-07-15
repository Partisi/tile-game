// Sketch.js to be called in index.html



// To do
/*
- Reorganize Code
- Reorganize the html + clean up
- Ensure all criteria met for game GOOD
- Add sounds
- Add snowprint behind player GOOD
- Add end dialogue GOOD
- Add end statue placed GOOD
- Tune Enemies
*/

let offsetX, offsetY

offsetX = 160
offsetY = 50
currentMap = {
    title: "Village",
    floor: villageFloor,
    world: villageWorld
}

let progress = {
    keys: [],
    currentStage: 0,
    finalTime: null,
    stagesLoaded: {
        village: false,
        forest: false,
        open: false,
        river: false,
        blizzard: false,
        catacombs: false,
        temple: false,
    },
    bosses: {
        cyclops: false,
        demon: false,

    }
}

let dialougeBoxes = []
let restartGameButton = null
let drawnEnemies = []
let drawnVillagers = []

let startGameBttn = null
let blizzarding = false
let snowing = false

let bossesDead = []
let projectiles = []
let myPlayer

function handlePlayerWinner() {
    if (progress.currentStage === 5) { // if demon just died
        sounds.endgame.stop()

        dialougeBoxes.push(new DialougeBox("Demon", "AHHHHH!"))
        dialougeBoxes.push(new DialougeBox("Demon", "You have bested me! All of this was just for a stupid snowman!"))
        dialougeBoxes.push(new DialougeBox("Demon", "Take it and leave if you must!"))

        progress.currentStage += 1
    }
    if (progress.currentStage === 6 && dialougeBoxes.length === 0) { // After Dialogue prompt
        drawnVillagers = []
        drawnEnemies = []
        populateVillageEnd()

        offsetX = -220
        offsetY = -140
        myPlayer.facing = "down"
        currentMap = {
            title: "Village",
            floor: villageFloor,
            world: villageWorld
        }

        currentMap.world[20][19] = 67
        dialougeBoxes.push(new DialougeBox("Old Man", "Thank you good sir!!"))
        dialougeBoxes.push(new DialougeBox("Old Man", "You are truly our hero and we will make you an honorary member of this village!!"))
        dialougeBoxes.push(new DialougeBox("Kid", "You really are the best sir!"))
        dialougeBoxes.push(new DialougeBox("Kid", "Until next time!"))

        progress.currentStage += 1
    }
    if (progress.currentStage === 7 && dialougeBoxes.length === 0) {

        fill('#fff7e8')
        stroke("black")
        strokeWeight(4)
        let displayWidth = 250
        let displayHeight = 200
        rect(
            (width - displayWidth) / 2, (height - displayHeight) / 2,
            displayWidth, displayHeight,
            10, 10, 10, 10
        )
        strokeWeight(1)
        textAlign(CENTER);
        textSize(18);
        fill("#94cfff")
        text(
            "Congratulations! You Won!",
            width / 2, height / 2 - displayHeight / 2 + 60
        )

        strokeWeight(0)
        textSize(12);
        fill("black")
        text(
            "Would you like to play again?",
            width / 2, height / 2 - displayHeight / 2 + 80
        )
        if (!restartGameButton) {
            restartGameButton = new Button(
                "Restart",
                (width - displayWidth) / 2 + 50, height / 2 - displayHeight / 2 + 100,
                displayWidth - 100, 20,
                () => resetGame()
            )
        }
        imageMode(CENTER)
        image(
            playerAssets.master, width / 2, height / 2 - displayHeight / 2 + 150,
            64, 64,
            0 * 32, 128,
            32, 32
        )
        imageMode(CORNER)
    }

}
function handlePlayerDeath() {
    if (myPlayer.health <= 0) {
        fill('#fff7e8')
        stroke("black")
        strokeWeight(4)
        let displayWidth = 250
        let displayHeight = 200
        rect(
            (width - displayWidth) / 2, (height - displayHeight) / 2,
            displayWidth, displayHeight,
            10, 10, 10, 10
        )
        strokeWeight(1)
        textAlign(CENTER);
        textSize(24);
        fill("red")
        text(
            "You Died",
            width / 2, height / 2 - displayHeight / 2 + 60
        )

        strokeWeight(0)
        textSize(12);
        fill("black")
        text(
            "Would you like to restart?",
            width / 2, height / 2 - displayHeight / 2 + 80
        )
        if (!restartGameButton) {
            restartGameButton = new Button(
                "Restart",
                (width - displayWidth) / 2 + 50, height / 2 - displayHeight / 2 + 100,
                displayWidth - 100, 20,
                () => resetGame()
            )
        }
        imageMode(CENTER)
        image(
            playerAssets.master, width / 2, height / 2 - displayHeight / 2 + 150,
            32, 64,
            0.5 + 6 * 16, 0,
            15, 32
        )
        imageMode(CORNER)

    }
}

function resetGame() {
    restartGameButton = null
    progress = {
        keys: [],
        currentStage: 1,
        finalTime: null,
        gameTimer: new Date(),
        stagesLoaded: {
            village: false,
            forest: false,
            open: false,
            river: false,
            blizzard: false,
            catacombs: false,
            temple: false,
        },
        bosses: {
            cyclops: false,
            demon: false,
        }
    }

    for (var key in sounds) { // stops all audio
        if (!!sounds[key]) {
            sounds[key].stop()
        }
    }

    drawnEnemies = []
    drawnVillagers = []
    dialougeBoxes = []
    bossesDead = []
    myPlayer.health = myPlayer.maxHealth
    myPlayer.action = "walking"

    // resets map for footprints
    let allMaps = [dungeonRiverFloor, forestFloor, dungeonBlizzardFloor, openFloor, villageFloor]
    allMaps.forEach(eachFloorMap => {
        for (let y = 0; y < eachFloorMap.length; y++) {
            for (let x = 0; x < eachFloorMap[y].length; x++) {
                if (eachFloorMap[y][x] === 50 || eachFloorMap[y][x] === 51) {
                    eachFloorMap[y][x] = 0
                }
            }
        }
    })

    // Resets rocks
    for (let y = 0; y < dungeonCatacombsWorld.length; y++) {
        for (let x = 0; x < dungeonCatacombsWorld[y].length; x++) {
            if (dungeonCatacombsWorld[y][x] === 80) {
                dungeonCatacombsWorld[y][x] = 0
            }
        }
    }

    // Resets snowpiles
    for (let y = 0; y < dungeonBlizzardWorld.length; y++) {
        for (let x = 0; x < dungeonBlizzardWorld[y].length; x++) {
            if (dungeonBlizzardWorld[y][x] === 19) {
                dungeonBlizzardWorld[y][x] = 0
            }
        }
    }

    villageWorld[20][19] = 68 // resets the missing statue
}

// For any images or assets
function preload() {
    getAllImages()
    loadAllSounds()
}

// Setup Stage
function setup() {
    let myCanvas = createCanvas(600, 600)
    myCanvas.parent('#game-container')

    let infoPanelDom = document.getElementById('loading-container')
    infoPanelDom.style.display = "none"

    myPlayer = new Player(width / 2 - 16, height / 2 - 32)
    noiseDetail(24)
    textFont('Georgia');

}

function mouseClicked() {
    if (mouseY >= 490 && dialougeBoxes.length > 0) {
        dialougeBoxes.splice(0, 1)
        cursor("default")
    }
}

function changeDoorState(world, status) {
    sounds.doors.play()
    if (world === "temple") {
        if (status === "close") {
            templeWorld[26][15] = 65
            templeWorld[26][16] = 65
            templeWorld[26][17] = 65

            templeWorld[32][15] = 65
            templeWorld[32][16] = 65
            templeWorld[32][17] = 65
        }
        if (status === "open") {
            templeWorld[26][15] = 00
            templeWorld[26][16] = 00
            templeWorld[26][17] = 00

            templeWorld[32][15] = 00
            templeWorld[32][16] = 00
            templeWorld[32][17] = 00
        }
    }
    if (world === "catacombs") {
        if (status === "close") {
            dungeonCatacombsWorld[18][20] = 65
            dungeonCatacombsWorld[19][20] = 65
            dungeonCatacombsWorld[20][20] = 65
            dungeonCatacombsWorld[21][20] = 65
        }
        if (status === "open") {
            dungeonCatacombsWorld[18][20] = 00
            dungeonCatacombsWorld[19][20] = 00
            dungeonCatacombsWorld[20][20] = 00
            dungeonCatacombsWorld[21][20] = 00
        }
    }
}

function startGamePrompt() {
    triggerSnowfall()

    fill('#fff7e8')
    stroke("black")
    strokeWeight(4)
    let displayWidth = 250
    let displayHeight = 200
    rect(
        (width - displayWidth) / 2, (height - displayHeight) / 2,
        displayWidth, displayHeight,
        10, 10, 10, 10
    )
    strokeWeight(1)
    textAlign(CENTER);
    textSize(24);
    fill("#94cfff")
    text(
        "Club P3nguin",
        width / 2, height / 2 - displayHeight / 2 + 60
    )

    strokeWeight(0)
    textSize(12);
    fill("black")
    if (!startGameBttn) {
        startGameBttn = new Button(
            "Play Game",
            (width - displayWidth) / 2 + 50, height / 2 - displayHeight / 2 + 100,
            displayWidth - 100, 20,
            () => resetGame()
        )
    }
    imageMode(CENTER)
    image(
        playerAssets.master, width / 2, height / 2 - displayHeight / 2 + 150,
        64, 64,
        0 * 32, 128,
        32, 32
    )
    imageMode(CORNER)
}

// 60 FPS Draw
function draw() {
    background("white")

    if (progress.currentStage === 0) {
        startGamePrompt()
        startGameBttn.display()
        return
    }

    push()
    translate(offsetX, offsetY)
    drawWorld()
    pop()

    if (progress.currentStage === 1) {
        startGameBttn = null
        offsetX = 160
        offsetY = 50
        snowing = true
        currentMap = {
            title: "Village",
            floor: villageFloor,
            world: villageWorld
        }

        populateVillageStart()
        sounds.backgroundMain.play()
        sounds.backgroundMain.loop()
        dialougeBoxes.push(new DialougeBox("Kid", "MISTER MISTER! Come quick! There is trouble in the plaza!"))
        progress.currentStage += 1
    }
    if (progress.currentStage === 2) {
        if (myPlayer.sensors.middleX - offsetX > 350 && myPlayer.sensors.middleY - offsetY > 380) {
            dialougeBoxes.push(new DialougeBox("Old Man", "There was a hidden figure that stole our sacred snowman!"))
            dialougeBoxes.push(new DialougeBox("Woman", "We need to get the snowman back!"))
            dialougeBoxes.push(new DialougeBox("Old Man", "I saw it! It was a terrible creature that swooped down and stole the snowman!"))
            dialougeBoxes.push(new DialougeBox("Woman", "Please sir! We need your help!"))
            dialougeBoxes.push(new DialougeBox("Old Man", "I saw him go through the forest and towards the temple! Hurry and catch him!"))
            progress.currentStage += 1
        }
    }
    if (progress.currentStage === 3 && (currentMap.title === "Temple" && progress.keys.length < 3)) {
        dialougeBoxes.push(new DialougeBox("Player", "It looks like this door needs 3 keys..."))
        progress.currentStage += 1
    }

    drawnEnemies.forEach(eachEnemy => {
        if (eachEnemy.mapRendered === currentMap.title) {
            eachEnemy.display()
        }
    })
    drawnVillagers.forEach(eachVillager => {
        if (eachVillager.mapRendered === currentMap.title) {
            eachVillager.display()
        }
    })
    myPlayer.display()

    if (detectEnteredBossRoom()) {
        if (
            !bossesDead.includes("cyclops") &&
            currentMap.title === "DungeonCatacombs" &&
            progress.bosses.cyclops === false
        ) {
            progress.bosses.cyclops = true
            drawnEnemies.push(new Cyclops(100, 100, "DungeonCatacombs"))
            changeDoorState("catacombs", "close")
        }
        if (
            !bossesDead.includes("demon") &&
            currentMap.title === "Temple" &&
            progress.bosses.demon === false
        ) {
            progress.bosses.demon = true
            addEnemiesTemple()
            sounds.endgame.play()
            sounds.endgame.loop()
            changeDoorState("temple", "close")
        }
    }

    if (blizzarding) { triggerBlizzard() }
    if (snowing) { triggerSnowfall() }

    for (let i = 0; i < projectiles.length; i++) {
        let eachProjectile = projectiles[i]
        eachProjectile.display()
        if (dist(eachProjectile.v3.x, eachProjectile.v3.y, myPlayer.sensors.middleX, myPlayer.sensors.middleY) <= eachProjectile.size * 0.7) {
            myPlayer.gotHit(eachProjectile.damage)
            projectiles.splice(i, 1)
            i--;
        } else if (eachProjectile.percentComplete >= 1) {
            projectiles.splice(i, 1)
            i--;
        }
    }

    if (dialougeBoxes.length > 0) {
        dialougeBoxes[0].display()
    }

    handlePlayerDeath()
    handlePlayerWinner()

    displayTimer()

    if (!!restartGameButton) { restartGameButton.display() }
}

// obtain the tile ID at a given screen coordinate
function getWorldTileAtPosition(screenX, screenY) {
    let arrayX = int((screenX - offsetX) / tileSize)
    let arrayY = int((screenY - offsetY) / tileSize)

    let id = currentMap.world[arrayY][arrayX]
    return id
}
function getTileArrayCoords(screenX, screenY) {
    let arrayX = int((screenX - offsetX) / tileSize)
    let arrayY = int((screenY - offsetY) / tileSize)

    return [arrayY, arrayX]
}
function isHittingSolid(screenX, screenY) {
    let id = getWorldTileAtPosition(screenX, screenY)
    if (blockedItems.includes(id) || id === -2) {
        return true
    } else {
        return false
    }
}

function changeNewWorld(id) {
    if (id >= 90 && id <= 99) {

        snowflakes = [];
        snowing = false;
        blizzarding = false;
        snowflakesAdded = false
        changingColor = { r: 200, b: 20, g: 100, change: 0.25, size: 50 }
    }

    // VILLAGE
    if (id === 90) {
        snowing = true
        if (progress.stagesLoaded.village === false) { populateVillageNormal(); progress.stagesLoaded.village = true }
        if (currentMap.title === "Forest") { // Forest -> Village
            offsetX = -420
            offsetY = -300
        }
        currentMap = {
            title: "Village",
            floor: villageFloor,
            world: villageWorld
        }
    }

    // FOREST
    else if (id === 91) {
        snowing = true
        if (progress.stagesLoaded.forest === false) { addEnemiesForest(); progress.stagesLoaded.forest = true }
        if (currentMap.title === "Village") { // Village -> Forest
            offsetX = 250
            offsetY = -300
        }
        if (currentMap.title === "Open") { // Open -> Forest
            offsetX = 120
            offsetY = 250
        }
        currentMap = {
            title: "Forest",
            floor: forestFloor,
            world: forestWorld
        }
    }
    // RENDERS WORLD
    else if (id === 92) {
        snowing = true
        if (progress.stagesLoaded.open === false) { addEnemiesWorld(); progress.stagesLoaded.open = true }
        if (currentMap.title === "Forest") { // Forest -> Open
            offsetX = -310
            offsetY = -435
        }
        if (currentMap.title === "DungeonBlizzard") { // D1 -> Open
            sounds.blizzard.stop()
            offsetX = 250
            offsetY = 150
        }
        if (currentMap.title === "DungeonCatacombs") { // CATACOMBS -> Open
            offsetX = -290
            offsetY = -110
        }
        if (currentMap.title === "DungeonRiver") { // RIVER -> Open
            offsetX = 250
            offsetY = -300
        }
        if (currentMap.title === "Temple") { // temple -> Open
            sounds.caveVibes.stop()
            sounds.backgroundMain.play()
            sounds.backgroundMain.loop()
            offsetX = -240
            offsetY = 120
        }
        currentMap = {
            title: "Open",
            floor: openFloor,
            world: openWorld
        }
    }

    // RENDERS BLIZZARD
    else if (id === 93) {
        blizzarding = true
        sounds.blizzard.play()
        if (progress.stagesLoaded.blizzard === false) { generateRandomSnowpiles(); progress.stagesLoaded.blizzard = true }

        if (currentMap.title === "Open") { // Open -> D1
            offsetX = -410
            offsetY = -920
        }
        currentMap = {
            title: "DungeonBlizzard",
            floor: dungeonBlizzardFloor,
            world: dungeonBlizzardWorld
        }
    }

    // RENDERS CATACOMBS
    else if (id === 94) {
        if (progress.stagesLoaded.catacombs === false) { addEnemiesCatacombs(); progress.stagesLoaded.catacombs = true }
        if (currentMap.title === "Open") { // Open -> D2
            offsetX = 0
            offsetY = -450
        }
        currentMap = {
            title: "DungeonCatacombs",
            floor: dungeonCatacombsFloor,
            world: dungeonCatacombsWorld
        }
    }

    // RENDERS RIVER
    else if (id === 95) {
        if (progress.stagesLoaded.river === false) { dungeonRiverWorld[59][36] = 66; addEnemiesRiver(); progress.stagesLoaded.river = true }
        snowing = true
        if (currentMap.title === "Open") { // Open -> river
            offsetX = -700
            offsetY = 100
        }
        currentMap = {
            title: "DungeonRiver",
            floor: dungeonRiverFloor,
            world: dungeonRiverWorld
        }
    }

    // RENDERS TEMPLE
    else if (id === 96) {
        sounds.backgroundMain.stop()
        sounds.caveVibes.play()
        if (progress.keys.length < 3) { changeDoorState("temple", "close") }
        else { changeDoorState("temple", "open") }
        if (currentMap.title === "Open") { // Open -> temple
            offsetX = -100
            offsetY = -650
        }
        currentMap = {
            title: "Temple",
            floor: templeFloor,
            world: templeWorld
        }
    }
}


class Button {
    constructor(text, x, y, buttonWidth, buttonHeight, functionRun) {
        this.text = text
        this.x = x
        this.y = y
        this.width = buttonWidth
        this.height = buttonHeight

        this.functionRun = functionRun

        this.clicked = false
    }
    cursorOverButton() {
        return ((mouseX >= this.x && mouseX <= this.x + this.width) &&
            (mouseY >= this.y && mouseY <= this.y + this.height))
    }
    display() {
        fill('#85f7ff')
        strokeWeight(0)
        if (this.cursorOverButton()) {
            fill("#8fd4d9")
            cursor("pointer")
            if (mouseIsPressed && this.clicked === false) {
                this.clicked = true
                this.functionRun()
                cursor("default")
            }
            if (!mouseIsPressed && this.clicked) {
                this.clicked = false
            }
        } else cursor("default")
        rect(this.x, this.y, this.width, this.height, 5, 5, 5, 5)
        fill('#197da6')
        textAlign(CENTER)
        textFont('Montserrat')
        textStyle(BOLD)
        textSize(this.height - 8)
        text(this.text, this.x + this.width / 2, this.y + this.height - 6)
        textStyle(NORMAL)
    }
}