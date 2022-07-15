// Maps how fast the frames go per action
const mapActionToSpeed = [
    { action: "walking", speed: 1.5, framePerSecond: 5 },
    { action: "running", speed: 3, framePerSecond: 10 },
    { action: "attacking", speed: 0, framePerSecond: 10 }
]

// Main Player Object
class Player {
    constructor(startX, startY) {
        this.x = startX
        this.y = startY

        this.maxHealth = 200
        this.health = this.maxHealth
        this.damage = 25

        this.action = "walking"

        this.facing = "down"
        this.currentFrame = 0

        this.sensors = {}

        this.viewSensors = false // for debugging purposes

        this.lastTookDamage = null // for regening (player needs to avoid damage for a period)
    }

    // Main Attacking 
    attack() {
        let distanceToHit = 55
        if (this.facing === "down") { distanceToHit = 80 }
        if (this.facing === "right") { distanceToHit = 80 }

        this.action = "attacking"
        if (frameCount % (60 / mapActionToSpeed.find(o => o.action === this.action).framePerSecond) === 0) {
            this.currentFrame += 1
            if (this.currentFrame === 1) { sounds.swordSwing.play() }
            if (this.currentFrame === 3) { // at this frame, hit nearby enemies

                drawnEnemies.forEach(eachEnemy => {
                    if (dist(eachEnemy.x, eachEnemy.y, this.x, this.y) <= distanceToHit) {
                        eachEnemy.gotHit(this.damage)
                    }
                })
            }
            if (this.currentFrame === 4) {
                this.currentFrame = 0
            }

        }
    }

    // Gets a randomish x and y near the player for bosses to throw stuff towards
    getSomeCoordsNearPlayer(type) {
        let offsetRandom = 50
        if (type === "x") {
            return random(myPlayer.sensors.middleX - offsetRandom, myPlayer.sensors.middleX + offsetRandom)
        }
        if (type === "y") {
            return random(myPlayer.sensors.middleY - offsetRandom, myPlayer.sensors.middleY + offsetRandom)
        }
    }

    // Main Mocvement
    move() {
        let currentMappedAction = mapActionToSpeed.find(o => o.action === this.action)
        let idle = true
        if (keyIsDown(16)) {
            this.action = "running"
        } else { this.action = "walking" }

        // MOVING LEFT
        if (keyIsDown(65)) {
            idle = false
            if (this.viewSensors) {
                ellipse(this.sensors.left, this.sensors.middleY, 5, 5)
                ellipse(this.sensors.left, this.sensors.up + 4, 5, 5)
                ellipse(this.sensors.left, this.sensors.down - 4, 5, 5)
            }
            this.facing = "left"
            if (checkPathFree(this.sensors, "left")) {
                changeNewWorld(getWorldTileAtPosition(this.sensors.left, this.sensors.middleY))
                if (slowEffect.triggered) {
                    moveAllRelatives("x", currentMappedAction.speed * slowEffect.effect)
                } else {
                    moveAllRelatives("x", currentMappedAction.speed)
                }


            }

        }

        // MOVING RIGHT
        if (keyIsDown(68)) {
            idle = false
            if (this.viewSensors) {
                ellipse(this.sensors.right, this.sensors.middleY, 5, 5)
                ellipse(this.sensors.right, this.sensors.up + 4, 5, 5)
                ellipse(this.sensors.right, this.sensors.down - 4, 5, 5)
            }
            this.facing = "right"
            if (checkPathFree(this.sensors, "right")) {
                changeNewWorld(getWorldTileAtPosition(this.sensors.right, this.sensors.middleY))
                if (slowEffect.triggered) {
                    moveAllRelatives("x", -currentMappedAction.speed * slowEffect.effect)
                } else {
                    moveAllRelatives("x", -currentMappedAction.speed)
                }
            }
        }

        // MOVING UP
        if (keyIsDown(87)) {
            idle = false
            if (this.viewSensors) {
                ellipse(this.sensors.middleX, this.sensors.up, 5, 5)
                ellipse(this.sensors.left + 4, this.sensors.up, 5, 5)
                ellipse(this.sensors.right - 4, this.sensors.up, 5, 5)
            }

            this.facing = "up"
            if (checkPathFree(this.sensors, "up")) {
                changeNewWorld(getWorldTileAtPosition(this.sensors.middleX, this.sensors.up))
                if (slowEffect.triggered) {
                    moveAllRelatives("y", currentMappedAction.speed * slowEffect.effect)
                } else {
                    moveAllRelatives("y", currentMappedAction.speed)
                }
            }
        }

        // MOVING DOWN
        if (keyIsDown(83)) {
            idle = false
            if (this.viewSensors) {
                ellipse(this.sensors.middleX, this.sensors.down, 5, 5)
                ellipse(this.sensors.left + 4, this.sensors.down, 5, 5)
                ellipse(this.sensors.right - 4, this.sensors.down, 5, 5)
            }

            this.facing = "down"
            if (checkPathFree(this.sensors, "down")) {
                changeNewWorld(getWorldTileAtPosition(this.sensors.middleX, this.sensors.down))
                if (slowEffect.triggered) {
                    moveAllRelatives("y", -currentMappedAction.speed * slowEffect.effect)
                } else {
                    moveAllRelatives("y", -currentMappedAction.speed)
                }
            }
        }

        // for snowprints
        if (keyIsDown(87) || keyIsDown(83)) {
            handleSnowprint("vertical", this.sensors.middleX, this.sensors.middleY)
        }
        if (keyIsDown(65) || keyIsDown(68)) {
            handleSnowprint("horizontal", this.sensors.middleX, this.sensors.middleY)
        }

        if (!idle) {
            if (frameCount % (60 / currentMappedAction.framePerSecond) === 0) {
                this.currentFrame += 1
                if (this.currentFrame === 4) {
                    this.currentFrame = 0
                }
            }
        } else {
            this.currentFrame = 0
        }
    }

    gotHit(incomingDamage) {
        this.lastTookDamage = frameCount
        if (this.health < incomingDamage) {
            this.health = 0
        } else { this.health -= incomingDamage }

        if (this.health === 0) { this.action = "dying" }
    }

    computeSensors() {
        this.sensors = {
            middleX: int(this.x + 16),
            middleY: int(this.y + 32),
            left: int(this.x - 2),
            right: int(this.x + 32 + 2),
            up: int(this.y + 10),
            down: int(this.y + 56)
        }
    }

    // When picking up one of the three keys
    pickUpKey() {
        sounds.key.play()
        let keyCoords = getTileArrayCoords(this.sensors.middleX, this.sensors.middleY)
        currentMap.world[keyCoords[0]][keyCoords[1]] = 0
        progress.keys.push("KEY")
    }

    // Breaks the snowpiles for the blizzard dungeon
    breakingSnowpile() {
        if (
            (
                getWorldTileAtPosition(this.sensors.middleX - 6, this.sensors.middleY + 8) === 19
            )
            && this.action === "attacking") {
            let tileCoords = getTileArrayCoords(this.sensors.middleX - 6, this.sensors.middleY + 8)
            for (let i = 0; i < snowpiles.length; i++) {
                if (snowpiles[i].x === tileCoords[0] && snowpiles[i].y === tileCoords[1]) {
                    snowpiles[i].uncover()
                    currentMap.world[tileCoords[0]][tileCoords[1]] = 0
                    snowpiles.splice(i, 1)
                    i--
                }
            }
        }
    }

    // Main Display
    display() {
        this.computeSensors()

        handlePlayerDeath() // restarts game popup

        if (this.action !== "dying" && dialougeBoxes.length === 0) {
            if (keyIsDown(32)) { this.attack() }
            else this.move()
        }

        if (getWorldTileAtPosition(this.sensors.middleX, this.sensors.middleY) === 66) {
            this.pickUpKey()
        }

        this.breakingSnowpile()

        // Health Display & Regenning
        if (this.lastTookDamage + 240 <= frameCount && this.health < this.maxHealth) {
            if (frameCount % 30 === 0) { this.health += 15 }
            if (this.health > this.maxHealth) { this.health = this.maxHealth }
            displayHealth("small", this.x, this.y, this.health, this.maxHealth, 50, true)
        } else {
            displayHealth("small", this.x, this.y, this.health, this.maxHealth, 50)
        }

        // Main Images to render
        if (this.action === "attacking") {
            if (this.facing === "left") {
                image(
                    playerAssets.master, this.x - 19, this.y,
                    64, 64,
                    0 + this.currentFrame * 32, 224,
                    32, 32
                )
            } else if (this.facing === "right") {
                image(
                    playerAssets.master, this.x - 15, this.y,
                    64, 64,
                    0 + this.currentFrame * 32, 192,
                    32, 32
                )
            } else if (this.facing === "up") {
                image(
                    playerAssets.master, this.x - 15, this.y,
                    64, 64,
                    0 + this.currentFrame * 32, 160,
                    32, 32
                )
            } else if (this.facing === "down") {
                image(
                    playerAssets.master, this.x - 15, this.y,
                    64, 64,
                    0 + this.currentFrame * 32, 128,
                    32, 32
                )
            }
        } else if (this.action === "dying") {
            image(
                playerAssets.master, this.x, this.y,
                32, 64,
                0.5 + 6 * 16, 0,
                15, 32
            )
        } else { // Just Moving
            if (this.facing === "left") {
                image(
                    playerAssets.master, this.x, this.y,
                    32, 64,
                    0.5 + this.currentFrame * 16, 96,
                    16, 32
                )
            } else if (this.facing === "right") {
                image(
                    playerAssets.master, this.x, this.y,
                    32, 64,
                    0.5 + this.currentFrame * 16, 32,
                    16, 32
                )
            } else if (this.facing === "up") {
                image(
                    playerAssets.master, this.x, this.y,
                    32, 64,
                    -0.5 + this.currentFrame * 16, 64,
                    16, 32
                )
            } else if (this.facing === "down") {
                image(
                    playerAssets.master, this.x, this.y,
                    32, 64,
                    0.5 + this.currentFrame * 16, 0,
                    16, 32
                )
            }
        }
    }
}