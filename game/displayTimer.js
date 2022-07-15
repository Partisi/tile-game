// Displays timer for speedrunners
function displayTimer() {
    strokeWeight(1)
    textAlign(RIGHT);
    textSize(24);
    fill("#94cfff")
    let timeDifferenceSeconds = Math.round((new Date() - progress.gameTimer) / 1000) % 60
    let timeDifferenceMinutes = Math.floor(Math.round((new Date() - progress.gameTimer) / 1000) / 60)
    if (timeDifferenceSeconds.toString().length === 1) { timeDifferenceSeconds = "0" + timeDifferenceSeconds }
    if (timeDifferenceMinutes.toString().length === 1) { timeDifferenceMinutes = "0" + timeDifferenceMinutes }
    if (!progress.finalTime) {
        text("00:" + timeDifferenceMinutes + ":" + timeDifferenceSeconds, width - 15, 20)
    } else {
        text(progress.finalTime, width - 15, 20)
    }
    if (progress.currentStage === 6 && !progress.finalTime) {
        progress.finalTime = "00:" + timeDifferenceMinutes + ":" + timeDifferenceSeconds
    }
}