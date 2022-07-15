// For the snow effects
let snowflakes = []
let snowflakesAdded = false // if already added, no need to keep adding

let slowEffect = { triggered: false, effect: 0 } // blizzard effect

// Triggers Regular snowfall
function triggerSnowfall() {
    strokeWeight(2)
    stroke("black")
    if (snowflakesAdded === false) {
        slowEffect = { triggered: false, effect: 0 }
        snowflakesAdded = true
        for (let i = 0; i < 600; i++) {
            snowflakes.push(new Snowflake(random(-width*2, width * 2), random(-height, height*2), 1))
        }
    }
    snowflakes.forEach(eachSnowflake => {
        eachSnowflake.display()
    })
}

// Triggers a Blizzard
function triggerBlizzard() {
    strokeWeight(2)
    stroke("black")
    if (slowEffect.triggered === false) {
        if (frameCount % 240 === 0) { slowEffect = { triggered: true, effect: 0.5 } }
    }

    if (snowflakes.length < 1000) {
        if (frameCount % 1 === 0) {
            snowflakes.push(new Snowflake(random(-width, width * 2), random(-height, height + 200), 15))
        }
    }
    snowflakes.forEach(eachSnowflake => {
        eachSnowflake.display()
    })
}

// Each Snowflake obj
class Snowflake {
    constructor(startX, startY, speed) {
        this.x = startX
        this.y = startY
        this.noiseX = random(0, 1000)
        this.noiseY = random(0, 1000)
        this.size = 5
        this.speed = speed
    }
    resetCoords() { // resets to the top if reached bottom
        this.x = random(-width, width * 2)
        this.y = -height
    }
    display() {
        fill("#edfcff")
        strokeWeight(0.8)
        ellipse(this.x, this.y, this.size, this.size)
        if (this.y >= height * 2 + 20 || this.x >= width * 2) { this.resetCoords() }

        // Simple perlin noise to randomize the snowflakes falling
        this.x += map(noise(this.noiseX), 0, 1, this.speed * .5, this.speed * .8)
        this.y += map(noise(this.noiseY), 0, 1, this.speed * .5, this.speed * 2)

        this.noiseX += 0.01
        this.noiseY += 0.01
    }
}

// Generates the snowpiles for the dungeon blizzard
const snowpiles = []
function generateRandomSnowpiles() {
    for (let i = 0; i < 20; i++) {
        snowpiles.push(new Snowpile())
    }
    snowpiles.push(new Snowpile(8, Math.floor(Math.random() * 22) + 5, "key")) // for the key
    snowpiles.forEach(eachSnowpile => eachSnowpile.set()) // sets each snowpile randomly
}

// Each Snowpile obj
class Snowpile {
    constructor(x, y, object) {
        this.x = !!x ? x : Math.floor(Math.random() * 30) + 10
        this.y = !!y ? y : Math.floor(Math.random() * 22) + 5
        this.id = 19

        this.object = !!object ? object : this.assignRandomObject()
    }
    assignRandomObject() { // assigns what is under each snowpile
        return random(['enemy', 'nothing'])
    }
    set() { // sets in world
        if (dungeonBlizzardWorld[this.x][this.y] === 0) {
            dungeonBlizzardWorld[this.x][this.y] = this.id
        }
    }
    uncover() { // after uncovering snowpile, does some action
        if (this.object === "enemy") {
            drawnEnemies.push(new IceBandit(myPlayer.sensors.middleX - offsetX - 25, myPlayer.sensors.middleY - offsetY - 100, "DungeonBlizzard"))
        }
        if (this.object === "key") {
            dungeonBlizzardWorld[this.x - 2][this.y] = 66
        }
    }
}