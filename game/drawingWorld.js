// Honeslty, most of this is just x, y and mapping the right tile to location
// ...massive pain in the ass...

// Main World Handler
function drawWorld() {
    for (let y = 0; y < currentMap.floor.length; y++) {
        for (let x = 0; x < currentMap.floor[y].length; x++) {
            drawFloor(currentMap.floor[y][x], x * tileSize, y * tileSize)
        }
    }
    for (let y = 0; y < currentMap.floor.length; y++) {
        for (let x = 0; x < currentMap.floor[y].length; x++) {
            drawTile(currentMap.world[y][x], x * tileSize, y * tileSize)
        }
    }
}

let changingColor = { r: 200, b: 20, g: 100, change: 1, size: 50 }
function drawTile(id, screenX, screenY) {
    if (id <= 0) { return }
    else if (id === 29) { // for special snowman
        image(worldAssets[id], screenX, screenY, 32, 64)
    }
    else if (id >= 40 && id < 70) { // for dungeon-like features
        generateCatacombs(id, screenX, screenY)
        return
    }
    else if (id >= 70 && id < 80) { // for cliffs
        generateCliffs(id, screenX, screenY)
        return
    }
    else if (id < 90 && id >= 80) { // for cyclops
        image(enemyAssets.cyclops.rock, screenX, screenY, tileSize * 1.3, tileSize * 1.3)
    } else if (id < 100 && id >= 90) { // for the icons for new worlds
        noStroke()
        fill(changingColor.r, changingColor.b, changingColor.g, 140)

        changingColor.g += changingColor.change
        changingColor.size = map(changingColor.g, 0, 300, 16, 20)
        if (changingColor.g >= 250 || changingColor.g <= 10) { changingColor.change *= -1 }
        ellipse(screenX + tileSize / 2, screenY + tileSize / 2, changingColor.size, changingColor.size)
    } else {
        image(worldAssets[id], screenX, screenY, worldAssets[id].width * 1.5, worldAssets[id].height * 1.5)
    }
}
////////////////////////////////////////
// Main Overworld (World On top overlay)
/////////////////////////////////////////

function generateCatacombs(id, screenX, screenY) {
    if (id === 40) { // BRICK WALL
        image(
            otherAssets[0], screenX, screenY,
            96, 72,
            80, 120,
            68, 68
        )
    }
    if (id === 41) { // WALL WITH BODIES
        image(
            otherAssets[0], screenX, screenY,
            240, 96,
            60, 204,
            200, 68
        )
    }
    if (id === 42) { // WALL WITH BODIES W/ BACKBOARD
        image(
            otherAssets[0], screenX, screenY,
            240, 192,
            64, 48,
            192, 142
        )
    }
    if (id === 43) { // WALL TOP BLACK
        image(
            otherAssets[0], screenX, screenY,
            72, 72,
            74, 50,
            72, 72
        )
    }
    if (id === 44) { // WALL TOP RIGHT BLACK
        image(
            otherAssets[0], screenX, screenY,
            144, 72,
            74, 50,
            182, 72
        )
    }
    if (id === 45) { // WALL RIGHT BLACK
        image(
            otherAssets[0], screenX, screenY,
            48, 72,
            64, 58,
            48, 54,
        )
    }
    if (id === 46) { // WALL LEFT BLACK
        image(
            otherAssets[0], screenX, screenY,
            48, 72,
            208, 58,
            48, 54
        )
    }
    if (id === 47) { // MAIN PILLAR
        image(
            otherAssets[0], screenX, screenY,
            24, 120,
            400, 38,
            14, 72
        )
    }
    if (id === 48) { // WALL BOTTOM BLACK
        image(
            otherAssets[0], screenX, screenY,
            24, 24,
            100, 60,
            24, 24
        )
    }
    if (id === 49) { // DUNGEON CAGE BOTTOM
        image(
            otherAssets[0], screenX, screenY,
            120, 120,
            484, 196,
            88, 88
        )
    }
    if (id === 50) { // DUNGEON BARS
        image(
            otherAssets[0], screenX, screenY,
            72, 96,
            512, 32,
            64, 88
        )
    }
    if (id === 51) { // COFFIN 1
        image(
            otherAssets[1], screenX, screenY,
            72, 48,
            6, 100,
            36, 36
        )
    }
    if (id === 52) { // COFFIN 2
        image(
            otherAssets[1], screenX, screenY,
            72, 48,
            6, 135,
            36, 30
        )
    }
    if (id === 53) { // COFFIN 3
        image(
            otherAssets[1], screenX, screenY,
            72, 48,
            6, 165,
            36, 31
        )
    }
    if (id === 54) { // BIG ASS POT
        image(
            otherAssets[1], screenX, screenY,
            48, 48,
            142, 122,
            20, 24
        )
    }
    if (id === 55) { // SMALL ASS POT
        image(
            otherAssets[1], screenX, screenY,
            24, 24,
            176, 128,
            16, 18
        )
    }
    if (id === 56) { // BLACK HOLE
        image(
            otherAssets[0], screenX, screenY,
            120, 120,
            620, 265,
            74, 74
        )
    }
    if (id === 57) { // CHAIN DOOR BLOCK
        image(
            otherAssets[1], screenX, screenY,
            24, 24,
            146, 24,
            12, 16
        )
    }
    if (id === 58) { // STAIRS FACING DOWN
        image(
            otherAssets[0], screenX, screenY,
            96, 120,
            880, 20,
            64, 100
        )
    }
    if (id === 59) { // STAIRS FACING RIGHT
        image(
            otherAssets[0], screenX, screenY,
            72, 96,
            800, 50,
            36, 64
        )
    }
    if (id === 60) { // GATES
        image(
            otherAssets[0], screenX, screenY,
            120, 96,
            640, 24,
            78, 70
        )
    }
    if (id === 61) { // PILLAR WALL

        image(
            otherAssets[0], screenX, screenY,
            48, 120,
            592, 32,
            32, 80
        )
    }
    if (id === 62) { // BLUE BRICK WALL
        image(
            otherAssets[0], screenX, screenY,
            72, 72,
            384, 400,
            60, 40
        )
    }
    if (id === 63) { // BLUE CAGE BOTTOM
        image(
            otherAssets[0], screenX, screenY,
            72, 72,
            493, 334,
            38, 38
        )
    }
    if (id === 64) { // STEPS BOTTOM
        image(
            otherAssets[0], screenX, screenY,
            72, 24,
            496, 120,
            60, 24
        )
    }
    if (id === 65) { // DOOR BOTTOM
        image(
            otherAssets[1], screenX, screenY,
            24, 24,
            132, 16,
            7, 5
        )
    }
    if (id === 66) { // KEY
        image(
            otherAssets[2], screenX, screenY,
            24, 24,
            0, 0,
            320, 300
        )
    }
    if (id === 67) { // base w/ snownman
        image(
            otherAssets[3], screenX, screenY,
            48, 96,
        )
    }
    if (id === 68) { // empty base
        image(
            otherAssets[4], screenX, screenY,
            48, 96,
        )
    }

}

// Cliffs
function generateCliffs(id, screenX, screenY) {
    if (id === 70) { // CLIFF TOP CUTOFF
        image(
            borderAssets[0], screenX, screenY,
            borderAssets[0].width * 1.5, borderAssets[0].height * 1.5,
            0, 0,
            48, 16
        )
    }
    if (id === 71) { // CLIFF ONLY TOP
        image(
            borderAssets[1], screenX, screenY,
            borderAssets[1].width * 1.5, borderAssets[1].height * 1.5,
            5, 0,
            32, 9
        )
    }
    if (id === 72) { // CLIFF GREY SMALL
        image(
            borderAssets[2], screenX, screenY,
            tileSize * 2, borderAssets[2].height * 1.5,
            8, 0,
            32, 64
        )
    }
    if (id === 73) { // CLIFF GREY BIG 
        image(
            borderAssets[2], screenX, screenY,
            borderAssets[2].width * 1.5, borderAssets[2].height * 1.5,
            0, 0,
            48, 64
        )
    }
    if (id === 74) { // CLIFF GREY BIG II
        image(
            borderAssets[3], screenX, screenY,
            borderAssets[3].width * 1.5, borderAssets[3].height * 1.5,
            0, 0,
            48, 64
        )
    }
    if (id === 75) { // CLIFF BROWN BIG
        image(
            borderAssets[3], screenX, screenY,
            borderAssets[3].width * 1.5, borderAssets[3].height * 1.5,
            0, 0,
            48, 64
        )
    }
    if (id === 76) { // CLIFF BROWN TOP
        image(
            borderAssets[2], screenX, screenY,
            24, 48,
            8, 0,
            32, 58
        )
    }

}

////////////////////////////////////
// Floor
////////////////////////////////////

function drawFloor(id, screenX, screenY) {
    if (id === -1) { return }
    else if (id === 0) { // snow
        image(
            floorAssets[0], screenX, screenY,
            24, 24,
            49, 0,
            15, 15
        )
    } else if (id > 0 && id <= 9) {
        generateSnowPath(id, screenX, screenY)
    } else if (id >= 20 && id < 30) {
        generateIceLake(id, screenX, screenY)
    } else if (id >= 40 && id < 50) {
        generateCatacombFloor(id, screenX, screenY)
    } else if (id >= 50 && id < 60) {
        generateSnowprints(id, screenX, screenY)
    }
    else {
        generateLake(id, screenX, screenY)
    }
}

// Snow Path
function generateSnowPath(id, screenX, screenY) {
    if (id === 1) { // path left
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            0, 20,
            16, 16
        )
    }
    if (id === 2) { // path right
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            16, 20,
            16, 16
        )
    }
    if (id === 3) { // path top left
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            0, 16,
            16, 16
        )
    }
    if (id === 4) { // path top right
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            16, 16,
            16, 16
        )
    }
    if (id === 5) { // path top
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            10, 16,
            16, 16
        )
    }
    if (id === 6) { // path bottom
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            10, 32,
            16, 16
        )
    }
    if (id === 7) { // path nothing
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            10, 24,
            16, 16
        )
    }
    if (id === 8) { // path bottom right
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            16, 32,
            16, 16
        )
    }
    if (id === 9) { // path bottom left
        image(
            floorAssets[2], screenX, screenY,
            24, 24,
            0, 32,
            16, 16
        )
    }
}

// Lake Path
function generateLake(id, screenX, screenY) {
    if (id === 10) { // LAKE NOTHING
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            15, 25,
            8, 8
        )
    }
    if (id === 11) { // lake top
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            10, 16,
            14, 16
        )
    }
    if (id === 12) { // lake right
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            16, 24,
            15, 16
        )
    }
    if (id === 13) { // lake bottom
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            8, 32,
            12, 15
        )
    }
    if (id === 14) { // lake  left
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            0, 24,
            15, 16
        )
    }
    if (id === 15) { // lake top left
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            0, 16,
            16, 16
        )
    }
    if (id === 16) { // lake top right
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            16, 17,
            15, 16
        )
    }
    if (id === 17) { // lake bottom right
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            16, 32,
            15, 15
        )
    }
    if (id === 18) { // lake bottom left
        image(
            floorAssets[3], screenX, screenY,
            24, 24,
            0, 32,
            15, 15
        )
    }
}

// Ice Lake Path
function generateIceLake(id, screenX, screenY) {
    if (id === 20) { // LAKE NOTHING
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            8, 24,
            15, 16
        )
    }
    if (id === 21) { // lake top
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            10, 16,
            13, 16
        )
    }
    if (id === 22) { // lake right
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            16, 24,
            15, 16
        )
    }
    if (id === 23) { // lake bottom
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            8, 31,
            12, 15
        )
    }
    if (id === 24) { // lake  left
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            0, 24,
            15, 16
        )
    }
    if (id === 25) { // lake top left
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            0, 16,
            16, 16
        )
    }
    if (id === 26) { // lake top right
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            16, 17,
            15, 16
        )
    }
    if (id === 27) { // lake bottom right
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            16, 31,
            15, 15
        )
    }
    if (id === 28) { // lake bottom left
        image(
            floorAssets[4], screenX, screenY,
            24, 24,
            0, 31,
            15, 15
        )
    }
}

// Dungeon
function generateCatacombFloor(id, screenX, screenY) {
    // 736, 210,
    if (id === 40) { // CATACOMB FLOOR TILE DARK
        image(
            otherAssets[0], screenX, screenY,
            24, 24,
            737, 209,
            30.75, 32
        )
    }
    if (id === 41) { // CATACOMB FLOOR TILE BLUE
        image(
            otherAssets[0], screenX, screenY,
            24, 24,
            833, 209,
            30.8, 32
        )
    }
    if (id === 42) { // CATACOMB FLOOR DIRTY
        image(
            otherAssets[0], screenX, screenY,
            24, 24,
            790, 369,
            20, 20
        )
    }
    if (id === 43) { // CATACOMB FLOOR DIRTY
        image(
            otherAssets[0], screenX, screenY,
            24, 24,
            764, 422,
            30, 30
        )
    }

}

function generateSnowprints(id, screenX, screenY) {
    if (id === 50) { // SNOWPRINT HORIZONTAL
        image(
            snowprints.horizontal, screenX, screenY,
            24, 24,
            0, 0,
            16, 16
        )
    }
    if (id === 51) { // SNOWPRINT VERTICAL
        image(
            snowprints.vertical, screenX, screenY,
            24, 24,
            0, 0,
            16, 16
        )
    }
}