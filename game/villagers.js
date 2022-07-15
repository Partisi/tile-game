// Simple Obj for villagers
class Villager {
    constructor(type, xStart, yStart, mapRendered) {
        this.frame = this.getFrameType(type)
        this.xRelative = xStart
        this.yRelative = yStart
        this.x = offsetX + xStart
        this.y = offsetY + yStart
        this.mapRendered = mapRendered

        this.currentFrame = random([0, 1, 2])
        this.maxFrames = 4

    }

    repositionCoord() { this.x = offsetX + this.xRelative; this.y = offsetY + this.yRelative }

    getFrameType(type) {
        switch (type) {
            case "kid":
                return villagerAssets.kid
            case "oldMan":
                return villagerAssets.oldMan
            case "man":
                return villagerAssets.man
            case "woman":
                return villagerAssets.woman
            default:
                return null
        }
    }
    changeFrame() {
        if (frameCount % 30 === 0) {
            this.currentFrame += 1
            if (this.currentFrame === this.maxFrames) {
                this.currentFrame = 0
            }
        }
    }
    display() {
        this.changeFrame()
        this.repositionCoord()
        image(
            this.frame, this.x, this.y,
            80, 80,
            this.currentFrame * 48, 0,
            48, 48
        )
    }
}