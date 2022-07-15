// checks to see if the path is free to walk on (also used in player)
function checkPathFree(sensors, direction) {
    if (direction === "right") {
        return (
            !isHittingSolid(sensors.right, sensors.middleY) &&
            !isHittingSolid(sensors.right, sensors.up + 4) &&
            !isHittingSolid(sensors.right, sensors.down - 4)
        )
    }
    if (direction === "left") {
        return (
            !isHittingSolid(sensors.left, sensors.middleY) &&
            !isHittingSolid(sensors.left, sensors.up + 4) &&
            !isHittingSolid(sensors.left, sensors.down - 4)
        )
    }
    if (direction === "up") {
        return (
            !isHittingSolid(sensors.middleX, sensors.up) &&
            !isHittingSolid(sensors.left + 4, sensors.up) &&
            !isHittingSolid(sensors.right - 4, sensors.up)
        )
    }
    if (direction === "down") {
        return (
            !isHittingSolid(sensors.middleX, sensors.down) &&
            !isHittingSolid(sensors.left + 4, sensors.down) &&
            !isHittingSolid(sensors.right - 4, sensors.down)
        )
    }
}

// Projectiles for Bosses
class Projectile {
    constructor(projectileType, startX, startY, endX, endY, damage, speed, size, sound = null) {

        this.projectileType = projectileType
        this.damage = damage
        this.speed = speed
        this.percentComplete = 0
        this.core = createVector(0, 0)
        this.start = createVector(startX, startY)
        this.end = createVector(endX, endY)

        this.sound = sound

        this.size = size

        this.v3 = null
    }
    display() {
        if (this.percentComplete < 1) {
            this.percentComplete += this.speed
        }
        if (this.percentComplete >= 1 && this.projectileType === "rock") {
            this.sound.play()
            let coordsToHit = getTileArrayCoords(this.end.x, this.end.y)
            if (currentMap.world[coordsToHit[0]][coordsToHit[1]] === 0) {
                currentMap.world[coordsToHit[0]][coordsToHit[1]] = 80
            }
        }
        this.v3 = p5.Vector.lerp(this.start, this.end, this.percentComplete);
        fill('green')

        imageMode(CENTER)
        if (this.projectileType === "fireball") {
            image(enemyAssets.attackAssets.boom, this.v3.x, this.v3.y, this.size, this.size)
        }
        if (this.projectileType === "rock") {
            image(enemyAssets.cyclops.rock, this.v3.x, this.v3.y, this.size, this.size)
        }
        imageMode(CORNER)
    }
}

// Handles Snowprints being drawn behind
function handleSnowprint(directionMoving, screenX, screenY) {
    let arrayX = int((screenX - offsetX) / tileSize)
    let arrayY = int((screenY - offsetY) / tileSize)

    let id = currentMap.floor[arrayY][arrayX]
    if (id === 0) {
        if (directionMoving === "vertical") {
            currentMap.floor[arrayY][arrayX] = 51
        }
        if (directionMoving === "horizontal") {
            currentMap.floor[arrayY][arrayX] = 50
        }
    }
}

// Moves Everything in relation to player moving
function moveAllRelatives(type, change) {
    if (type === "x") {
        offsetX += change
        snowflakes.forEach(eachS => eachS.x += change)
        projectiles.forEach(eachA => {
            eachA.start.x += change
            eachA.end.x += change
        })
    }
    if (type === "y") {
        offsetY += change
        snowflakes.forEach(eachS => eachS.y += change)
        projectiles.forEach(eachA => {
            eachA.start.y += change
            eachA.end.y += change
        })
    }
}

// Displaying Health: Player, enemies, bosses
let currentRegenColor = "#39a860"
function displayHealth(type, x, y, currentHealth, maxHealth, maxSize, regening = false) {
    if (currentHealth <= 0) {
        return
    }
    if (type === "small") {
        noStroke()
        fill('#d1d1d1')
        rect(x, y, maxSize, 6, 3, 3, 3, 3)
        if (regening) {
            if (frameCount % 30 === 0) {
                if (currentRegenColor === "#39a860") {
                    currentRegenColor = '#3370ff'
                } else { currentRegenColor = "#39a860" }
            }
            fill(currentRegenColor)
        } else {
            fill('red')
        }
        rect(x + 2, y + 2, (maxSize - 4) * currentHealth / maxHealth, 2, 3, 3, 3, 3)
    }
    if (type === "boss") {
        noStroke()
        fill('#d1d1d1')
        rect(x, y, maxSize, 12, 3, 3, 3, 3)
        fill('red')
        image(enemyAssets.skull, x, y, 12, 12)
        rect(x + 12, y + 2, (maxSize - 14) * currentHealth / maxHealth, 8, 3, 3, 3, 3)
    }

}

// If player enters a bossroom to lock them in
function detectEnteredBossRoom() {
    if (currentMap.title === "DungeonCatacombs") {
        if (
            myPlayer.sensors.middleX - offsetX < 420 &&
            myPlayer.sensors.middleY - offsetY < 520
        ) {
            return true
        } else { return false }
    }
    if (currentMap.title === "Temple") {
        if (
            myPlayer.sensors.middleY - offsetY < 550
        ) {
            return true
        } else { return false }
    }
}