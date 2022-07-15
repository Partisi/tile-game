// Handler for displaying dialogue boxes
class DialougeBox {
    constructor(whoSays, saysWhat) {
        this.who = whoSays
        this.what = saysWhat
    }
    display() {
        fill('#cffffd')
        if (mouseY >= 490) {
            cursor("pointer")
            fill('#b3e3e1')
        } else { cursor('default') }
        strokeWeight(2)
        stroke('black')
        rect(10, height - 110, width - 20, 100, 10, 10, 10, 10)
        fill('black')
        strokeWeight(0)

        textAlign(LEFT)
        textSize(24);
        textFont('Georgia');
        text(this.who + ":", 20, height - 80)

        textSize(14);
        textFont('Georgia');
        text(this.what, 40, height - 60)
    }
}