// MAIN ENEMIES LOADING
////////////////////////////////

// Main building block of every enemy with position and frame changes
class Enemy {
    constructor(xStart, yStart, mapRendered) {
        this.xRelative = xStart
        this.yRelative = yStart

        this.x = offsetX + xStart
        this.y = offsetY + yStart

        this.mapRendered = mapRendered // maps the enemy to appropiate map
        this.sensors = {}
    }

    computeSensors() { // sensors for every enemy for detection
        this.sensors = {
            middleX: int(this.x + 32),
            middleY: int(this.y + 32),
            left: int(this.x - 2),
            right: int(this.x + 64 + 2),
            up: int(this.y + 10),
            down: int(this.y + 56)
        }
    }

    // Repositions the enemy with offsets when player is moving
    repositionCoord() { this.x = offsetX + this.xRelative; this.y = offsetY + this.yRelative }

    // Shuffles through frames and conditions if attacking
    changeFrame() {
        if (frameCount % (60 / this.framesPerSecond) === 0) {
            if (this.action === "attacking" && this.currentFrame === 1 && !!this.audio) { this.audio.attacking.play() }
            if (this.action === "attacking" && this.currentFrame === 2) {
                myPlayer.gotHit(this.damage)
            }
            if (this.currentFrame + 1 === this.frameLimits[this.action]) {
                this.currentFrame = 0
            } else { this.currentFrame += 1 }
        }
    }

    // If the enemy got hit
    gotHit(incomingDamage) {
        if (this.health < incomingDamage) {
            this.health = 0
        } else { this.health -= incomingDamage }
    }
}

// Specific class for small enemies (nonbosses)
class EnemyMinor extends Enemy {
    constructor(xStart, yStart, mapRendered) { super(xStart, yStart, mapRendered) }

    die() { // the following are properties that dictate how 'fast' each action should render
        this.currentFrame = 0
        this.framesPerSecond = 10
        this.action = "dying"
    }
    attack() {
        this.currentFrame = 0
        this.framesPerSecond = 10
        this.action = "attacking"
    }
    idle() {
        this.currentFrame = 0
        this.framesPerSecond = 8
        this.action = "idling"
    }
    run() {
        this.currentFrame = 0
        this.framesPerSecond = 10
        this.action = "running"
    }

    // 'Seeking' out the player and moving towards him
    closeDistance() {
        if (this.x < myPlayer.sensors.middleX - 4 && checkPathFree(this.sensors, "right")) { // MOVING RIGHT
            if (this.directionFacing === "left" && this.x < myPlayer.x) { this.directionFacing = "right"; this.frame = this.rightFrames }
            this.xRelative += this.speed
            handleSnowprint("horizontal", this.x, this.y) // gives the enemy the ability to make snowprints
        } else if (this.x > myPlayer.sensors.middleX - 2 && checkPathFree(this.sensors, "left")) { // MOVING LEFT
            if (this.directionFacing === "right" && this.x > myPlayer.x) { this.directionFacing = "left"; this.frame = this.leftFrames }
            this.xRelative -= this.speed
            handleSnowprint("horizontal", this.x, this.y)
        }

        if (this.y < myPlayer.sensors.middleY - 8 && checkPathFree(this.sensors, "down")) { // MOVING DOWN
            this.yRelative += this.speed
            handleSnowprint("vertical", this.x, this.y)
        } else if (this.y > myPlayer.sensors.middleY && checkPathFree(this.sensors, "up")) { // MOVING UP
            this.yRelative -= this.speed
            handleSnowprint("vertical", this.x, this.y)

        }
    }

    // Main display
    display() {
        this.repositionCoord()
        this.computeSensors()

        if (this.action === "dying") {

            if (this.currentFrame + 1 !== this.frameLimits[this.action]) { // if in process of dying
                this.changeFrame()
            } else if (!this.deathCertificate) { this.deathCertificate = new Date() }
        } else { // if regular
            this.changeFrame()
        }

        if (this.health <= 0 && this.action !== "dying") { // death
            this.die()
            this.audio.dying.play()
        }

        if (this.action !== "dying") {
            let distanceToPlayer = dist(myPlayer.x + 16, myPlayer.y + 32, this.x, this.y)
            if (distanceToPlayer <= this.attackingDistance) {
                if (this.action !== "attacking") { this.attack() }
            } else if (distanceToPlayer <= this.seekingDistance) {
                if (this.action !== "running") { this.run(); }
            } else {
                if (this.action !== "idling") { this.idle(); }
            }
        }

        // Health Displays
        displayHealth("small", this.x, this.y - 32, this.health, this.maxHealth, 32)

        // Main Image rendering of assets
        imageMode(CENTER)
        if (this.action === "idling") {
            image(
                this.frame, this.x, this.y,
                64, 64,
                this.directionFacing === "right" ? 0.5 + this.currentFrame * 32 : this.frame.width - 0.5 - 32 - 32 * this.currentFrame, 0 + 0.5,
                32, 32
            )
        }
        if (this.action === "attacking") {
            image(
                this.frame, this.x, this.y,
                64, 64,
                this.directionFacing === "right" ? 0.5 + this.currentFrame * 32 : this.frame.width - 0.5 - 32 - 32 * this.currentFrame, 64 + 0.5,
                32, 32
            )
        }
        if (this.action === "running") {
            this.closeDistance()
            image(
                this.frame, this.x, this.y,
                64, 64,
                this.directionFacing === "right" ? 0.5 + this.currentFrame * 32 : this.frame.width - 0.5 - 32 - 32 * this.currentFrame, 32 + 0.5,
                32, 32
            )
        }
        if (this.action === "dying") {
            image(
                this.frame, this.x, this.y,
                64, 64,
                this.directionFacing === "right" ? 0.5 + this.currentFrame * 32 : this.frame.width - 0.5 - 32 - 32 * this.currentFrame, 128 + 0.5,
                32, 32
            )
        }
        imageMode(CORNER)
    }
}

// The following are just specific attributes for each enemy
class Ghoul extends EnemyMinor {
    constructor(xStart, yStart, mapRendered, seekingDistance = 0) {
        super(xStart, yStart, mapRendered)
        this.frame = enemyAssets.ghoul.right
        this.leftFrames = enemyAssets.ghoul.left
        this.rightFrames = enemyAssets.ghoul.right
        this.directionFacing = "right"
        this.attackingDistance = 55 // when to start swinging
        this.seekingDistance = !!seekingDistance ? seekingDistance : 200 // when to start running
        this.speed = random(1.3, 1.7)
        this.maxHealth = 50
        this.health = this.maxHealth
        this.damage = 20

        this.audio = {
            attacking: sounds.runningMonster,
            dying: sounds.hurtMonster,
        }

        this.frameLimits = {
            dying: 6,
            attacking: 6,
            idling: 4,
            running: 8
        }
    }
}

class Bandit extends EnemyMinor {
    constructor(xStart, yStart, mapRendered, seekingDistance = 0) {
        super(xStart, yStart, mapRendered)
        this.frame = enemyAssets.bandit.right
        this.leftFrames = enemyAssets.bandit.left
        this.rightFrames = enemyAssets.bandit.right
        this.directionFacing = "right"
        this.attackingDistance = 55 // when to start swinging
        this.seekingDistance = !!seekingDistance ? seekingDistance : 200 // when to start running
        this.speed = 1
        this.maxHealth = 100
        this.health = this.maxHealth
        this.damage = 10

        this.audio = {
            attacking: sounds.bigSword,
            dying: sounds.hurtMan,
        }

        this.frameLimits = {
            dying: 6,
            attacking: 5,
            idling: 5,
            running: 8
        }
    }
}

class IceBandit extends EnemyMinor {
    constructor(xStart, yStart, mapRendered, seekingDistance = 0) {
        super(xStart, yStart, mapRendered)
        this.frame = enemyAssets.iceBandit.right
        this.leftFrames = enemyAssets.iceBandit.left
        this.rightFrames = enemyAssets.iceBandit.right
        this.directionFacing = "right"
        this.attackingDistance = 50 // when to start swinging
        this.seekingDistance = !!seekingDistance ? seekingDistance : 200 // when to start running
        this.speed = 1
        this.maxHealth = 50
        this.health = this.maxHealth
        this.damage = 10

        this.audio = {
            attacking: sounds.bigSword,
            dying: sounds.hurtIce,
        }

        this.frameLimits = {
            dying: 6,
            attacking: 5,
            idling: 5,
            running: 8
        }
    }
}

/////////////
// BOSSES //
/////////////
class Boss extends Enemy {
    constructor(xStart, yStart, mapRendered) { super(xStart, yStart, mapRendered) }

    die() { // really the only difference was a few frames changing and a larger close distance
        this.currentFrame = 0
        this.framesPerSecond = 10
        this.action = "dying"
    }
    attack() {
        this.currentFrame = 0
        this.framesPerSecond = 10
        this.action = "attacking"
    }
    idle() {
        this.currentFrame = 0
        this.framesPerSecond = 4
        this.action = "idling"
    }
    run() {
        this.currentFrame = 0
        this.framesPerSecond = 6
        this.action = "running"
    }
    closeDistance() {
        if (this.x < myPlayer.x + 16) { // changes x
            if (this.directionFacing === "left" && this.x < myPlayer.x + 20) { this.directionFacing = "right"; this.frame = this.rightFrame }
            this.xRelative += this.speed
        } else if (this.x > myPlayer.x + 16) {
            if (this.directionFacing === "right" && this.x > myPlayer.x + 20) { this.directionFacing = "left"; this.frame = this.leftFrame }
            this.xRelative -= this.speed
        }
        if (this.y < myPlayer.y + 16) { // changes y
            this.yRelative += this.speed
        } else if (this.y > myPlayer.y + 16) {
            this.yRelative -= this.speed
        }
    }
}
class Cyclops extends Boss {
    constructor(xStart, yStart, mapRendered) {
        super(xStart, yStart, mapRendered)
        this.frame = enemyAssets.cyclops.main
        this.leftFrame = enemyAssets.cyclops.main
        this.rightFrame = enemyAssets.cyclops.main
        this.directionFacing = "right"
        this.attackingDistance = 60 // when to start swinging
        this.seekingDistance = 500 // when to start running
        this.speed = 0.5
        this.maxHealth = 500
        this.health = this.maxHealth
        this.damage = 25

        this.rockDamage = 50

        this.currentAttack = null

        this.rockingCoords = []

        this.audio = {
            attacking: sounds.stomping,
        }

        this.frameLimits = {
            dying: 9,
            attacking: 7,
            idling: 15,
            running: 12,
            rocking: 13,
        }
    }

    rocking() { // Special Attack: sends rock
        if (frameCount % (60 / 10) === 0) {
            if (this.currentFrame + 1 === this.frameLimits[this.action]) {
                this.action = "idling"
                sounds.cyclopsRoar2.play()
                projectiles.push(
                    new Projectile(
                        "rock",
                        this.x + 36, this.y + 16,
                        myPlayer.sensors.middleX, myPlayer.sensors.middleY,
                        100, 0.04,
                        36,
                        sounds.rocking
                    )
                )
            } else { this.currentFrame += 1 }
        }
    }

    display() {
        this.repositionCoord()

        if (this.action === "dying") {
            if (this.currentFrame + 1 !== this.frameLimits[this.action]) { // if in process of dying
                this.changeFrame()
            } else if (!this.deathCertificate) { this.deathCertificate = new Date() }
        } else if (this.action === "rocking") {
            this.rocking()
        } else { // if regular
            this.changeFrame()
            if (this.action !== "idling" && frameCount % 60 === 0) {
                if (random(0, 1) >= 0.7) { this.action = "rocking"; this.currentFrame = 0 }
            }

        }

        if (this.health <= 0 && this.action !== "dying") {
            dungeonCatacombsWorld[10][10] = 66
            bossesDead.push("Cyclops")
            changeDoorState("catacombs", "open")
            this.die()
        }

        if (this.action !== "dying" && this.action !== "rocking") {
            let distanceToPlayer = dist(myPlayer.x + 16, myPlayer.y + 32, this.x, this.y)
            if (distanceToPlayer <= this.attackingDistance) {
                if (this.action !== "attacking") { this.attack() }
            } else if (distanceToPlayer <= this.seekingDistance) {
                if (this.action !== "running") { this.run(); }
            } else {
                if (this.action !== "idling") { this.idle(); }
            }
        }

        displayHealth("boss", this.x - 48, this.y - 32, this.health, this.maxHealth, 100)

        imageMode(CENTER)

        let imageCropSize = 160
        let imageCropOffset = 64
        let imageDirectionOffset = this.directionFacing === "right" ? 0 : 10 * 64

        if (this.action === "idling") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                0.5 + this.currentFrame * imageCropOffset, 0 + 0.5 + imageDirectionOffset,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "attacking") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                0.5 + this.currentFrame * imageCropOffset, imageCropOffset * 2 + 0.5 + imageDirectionOffset,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "running") {
            this.closeDistance()
            if (frameCount % 240 === 0) { sounds.cyclopsRoar.play() }
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                0.5 + this.currentFrame * imageCropOffset, imageCropOffset + 0.5 + imageDirectionOffset,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "dying") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                0.5 + this.currentFrame * imageCropOffset, imageCropOffset * 6 + 0.5 + imageDirectionOffset,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "rocking") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                0.5 + this.currentFrame * imageCropOffset, imageCropOffset * 3 + 0.5 + imageDirectionOffset,
                imageCropOffset, imageCropOffset
            )
        }
        imageMode(CORNER)
    }
}

// Final Boss
class Demon extends Boss {
    constructor(xStart, yStart, mapRendered) {
        super(xStart, yStart, mapRendered)
        this.frame = enemyAssets.demon.right
        this.leftFrame = enemyAssets.demon.left
        this.rightFrame = enemyAssets.demon.right
        this.directionFacing = "right"
        this.attackingDistance = 100 // when to start swinging
        this.seekingDistance = 500 // when to start running
        this.speed = 0.5
        this.maxHealth = 600
        this.health = this.maxHealth
        this.damage = 25

        this.audio = {
            attacking: sounds.demonAttacking,
        }

        this.currentAttack = null

        this.smokeCoords = {
            x: null,
            y: null
        }

        this.frameLimits = { // dictate how many frames per sequence of action
            dying: 2,
            attacking: 4,
            idling: 4,
            running: 6,
            blazing: 4,
            beaming: 4,
            volleying: 4,
        }
    }

    blazing() { // Special attack: Spawns 4 Ghouls
        if (frameCount % (60 / this.framesPerSecond) === 0) {
            if (this.currentFrame === 0) {
                sounds.demonRoar.play()
                this.smokeCoords.x = this.xRelative
                this.smokeCoords.y = this.yRelative
            }

            if (this.currentFrame === 1) {
                for (let i = 0; i < 1; i++) {
                    drawnEnemies.unshift(new Ghoul(this.smokeCoords.x - 120, this.smokeCoords.y - 120, "Temple", 500))
                    drawnEnemies.unshift(new Ghoul(this.smokeCoords.x - 120, this.smokeCoords.y + 40, "Temple", 500))
                    drawnEnemies.unshift(new Ghoul(this.smokeCoords.x + 40, this.smokeCoords.y - 120, "Temple", 500))
                    drawnEnemies.unshift(new Ghoul(this.smokeCoords.x + 40, this.smokeCoords.y + 40, "Temple", 500))
                }

            }
            if (this.currentFrame + 1 === this.frameLimits[this.action]) {
                // at the end of the blaze
                this.action = "idling"
            } else { this.currentFrame += 1 }
        }
    }

    beaming() {// Special attack: Shoots Sniper Shot
        if (frameCount % (60 / this.framesPerSecond) === 0) {
            if (this.currentFrame === 1) {
                sounds.demonFire.play()
                projectiles.push(
                    new Projectile(
                        "fireball",
                        this.x + 36, this.y + 16,
                        myPlayer.getSomeCoordsNearPlayer("x") + (myPlayer.sensors.middleX - this.x), myPlayer.getSomeCoordsNearPlayer("y") + (myPlayer.sensors.middleY - this.y),
                        70, 0.015,
                        75
                    )
                )
            }
            if (this.currentFrame + 1 === this.frameLimits[this.action]) {
                this.action = "idling"
            } else { this.currentFrame += 1 }
        }
    }

    volleying() { // Special attack: Shoots multiple fireballs
        if (frameCount % (60 / this.framesPerSecond) === 0) {
            if (this.currentFrame === 1) {
                sounds.demonFire.play()
                projectiles.push(
                    new Projectile(
                        "fireball",
                        this.x + 36, this.y + 16,
                        myPlayer.getSomeCoordsNearPlayer("x") + (myPlayer.sensors.middleX - this.x), myPlayer.getSomeCoordsNearPlayer("y") + (myPlayer.sensors.middleY - this.y),
                        40, 0.01,
                        100
                    )
                )
            }
            if (this.currentFrame === 2) {
                projectiles.push(
                    new Projectile(
                        "fireball",
                        this.x + 36, this.y + 16,
                        myPlayer.getSomeCoordsNearPlayer("x") + (myPlayer.sensors.middleX - this.x), myPlayer.getSomeCoordsNearPlayer("y") + (myPlayer.sensors.middleY - this.y),
                        50, 0.01,
                        100
                    )
                )
            }
            if (this.currentFrame === 3) {
                projectiles.push(
                    new Projectile(
                        "fireball",
                        this.x + 36, this.y + 16,
                        myPlayer.getSomeCoordsNearPlayer("x") + (myPlayer.sensors.middleX - this.x), myPlayer.getSomeCoordsNearPlayer("y") + (myPlayer.sensors.middleY - this.y),
                        50, 0.01,
                        100
                    )
                )
            }
            if (this.currentFrame + 1 === this.frameLimits[this.action]) {
                this.action = "idling"
            } else { this.currentFrame += 1 }
        }
    }

    // Main Demon Display
    display() {
        this.repositionCoord()
        if (this.action === "dying") {
            if (this.currentFrame + 1 !== this.frameLimits[this.action]) { // if in process of dying
                this.changeFrame()
            } else if (!this.deathCertificate) { this.deathCertificate = new Date() }
        } else if (this.action === "volleying") {
            this.volleying()
        } else if (this.action === "blazing") {
            this.blazing()
        } else if (this.action === "beaming") {
            this.beaming()
        } else { // if regular
            this.changeFrame()

            if (this.action !== "idling" && this.action !== "attacking" && frameCount % 180 === 0) {
                let chanceForSpecial = random(0, 1)
                if (chanceForSpecial >= 0.2) { // does some special attack with differing probabilites
                    let specialAttackChoice = random(0, 1)
                    if (specialAttackChoice >= 0.90) {
                        this.action = "blazing"
                    } else if (specialAttackChoice >= 0.50) {
                        this.action = "volleying"
                    } else {
                        this.action = "beaming"
                    }
                    this.currentFrame = 0
                }
            }

        }

        // Final Death
        if (this.health <= 0 && this.action !== "dying") {
            bossesDead.push("Demon") // for closing doors
            progress.currentStage = 5 // moves story onword
            this.die()
        }

        if (frameCount % 900 === 0 && this.action !== "dying") {
            sounds.demonRandom.play()
        }

        if (this.action !== "dying" && this.action !== "blazing" && this.action !== "beaming" && this.action !== "volleying") {
            let distanceToPlayer = dist(myPlayer.x + 16, myPlayer.y + 32, this.x, this.y)
            if (distanceToPlayer <= this.attackingDistance) {
                if (this.action !== "attacking") { this.attack() }
            } else if (distanceToPlayer <= this.seekingDistance) {
                if (this.action !== "running") { this.run(); }
            } else {
                if (this.action !== "idling") { this.idle(); }
            }
        }

        displayHealth("boss", this.x - 42, this.y - 72, this.health, this.maxHealth, 100)

        imageMode(CENTER)

        let imageCropSize = 144
        let imageCropOffset = 144

        let eachImageFrameDistance = this.currentFrame * imageCropOffset
        if (this.action === "idling") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                this.directionFacing === "right" ? 520 + eachImageFrameDistance : 340 + eachImageFrameDistance, 44,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "running") {
            this.closeDistance()
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                this.directionFacing === "right" ? 230 + eachImageFrameDistance : 340 + eachImageFrameDistance, 230,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "attacking") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                this.directionFacing === "right" ? 520 + eachImageFrameDistance : 340 + eachImageFrameDistance, 600,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "dying") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                this.directionFacing === "right" ? 520 + eachImageFrameDistance : 340 + eachImageFrameDistance, 416,
                imageCropOffset, imageCropOffset
            )
        }
        if (this.action === "blazing" || this.action === "beaming" || this.action === "volleying") {
            image(
                this.frame, this.x, this.y,
                imageCropSize, imageCropSize,
                this.directionFacing === "right" ? 520 + eachImageFrameDistance : 340 + eachImageFrameDistance, 416,
                imageCropOffset, imageCropOffset
            )
        }
        imageMode(CORNER)
    }
}