// Populates the world with mobs (enemies including)

function addEnemiesTemple() { // adds to temple
    drawnEnemies.push(new Demon(400, 250, "Temple"))
}

function addEnemiesForest() { // adds to forest
    drawnEnemies.push(new Bandit(200, 100, "Forest"))
    drawnEnemies.push(new Bandit(180, 180, "Forest"))
}

function addEnemiesWorld() { // adds to world
    drawnEnemies.push(new Bandit(100, 150, "Open"))
    drawnEnemies.push(new Bandit(120, 200, "Open"))
    drawnEnemies.push(new Bandit(150, 210, "Open"))
    drawnEnemies.push(new Bandit(200, 180, "Open"))
}

function addEnemiesCatacombs() { // adds to catacombs
    drawnEnemies.push(new Ghoul(800, 700, "DungeonCatacombs"))

    drawnEnemies.push(new Ghoul(1500, 650, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(1550, 600, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(1520, 550, "DungeonCatacombs"))

    drawnEnemies.push(new Ghoul(2000, 450, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(2050, 350, "DungeonCatacombs"))

    drawnEnemies.push(new Ghoul(1250, 200, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(1350, 250, "DungeonCatacombs"))

    drawnEnemies.push(new Ghoul(820, 200, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(800, 250, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(700, 220, "DungeonCatacombs"))
    drawnEnemies.push(new Ghoul(560, 280, "DungeonCatacombs"))
}

function addEnemiesRiver() { // adds to riverbank
    drawnEnemies.push(new Bandit(750, 250, "DungeonRiver"))
    drawnEnemies.push(new Bandit(720, 300, "DungeonRiver"))
    drawnEnemies.push(new Bandit(500, 800, "DungeonRiver"))
    drawnEnemies.push(new Bandit(450, 750, "DungeonRiver"))

    drawnEnemies.push(new Bandit(750, 1400, "DungeonRiver"))
    drawnEnemies.push(new Bandit(800, 1450, "DungeonRiver"))
    drawnEnemies.push(new Bandit(720, 1470, "DungeonRiver"))
}

function populateVillageStart() { // Adds initial group of villagers
    drawnVillagers.push(new Villager("kid", 140, 200, "Village"))
    drawnVillagers.push(new Villager("oldMan", 400, 350, "Village"))

    drawnVillagers.push(new Villager("man", 300, 420, "Village"))

    drawnVillagers.push(new Villager("woman", 300, 450, "Village"))
    drawnVillagers.push(new Villager("man", 350, 460, "Village"))
    drawnVillagers.push(new Villager("woman", 320, 490, "Village"))
    drawnVillagers.push(new Villager("man", 350, 520, "Village"))

    drawnVillagers.push(new Villager("man", 380, 530, "Village"))
    drawnVillagers.push(new Villager("woman", 360, 550, "Village"))
}

function populateVillageNormal() { // Adds villagers if player revists
    drawnVillagers = []
    drawnVillagers.push(new Villager("woman", 100, 150, "Village"))
    drawnVillagers.push(new Villager("man", 200, 210, "Village"))
    drawnVillagers.push(new Villager("kid", 200, 210, "Village"))
    drawnVillagers.push(new Villager("woman", 100, 550, "Village"))
    drawnVillagers.push(new Villager("man", 500, 340, "Village"))
    drawnVillagers.push(new Villager("oldMan", 520, 340, "Village"))
    drawnVillagers.push(new Villager("kid", 500, 150, "Village"))
    drawnVillagers.push(new Villager("man", 510, 550, "Village"))
}

function populateVillageEnd() { // Adds end group of villagers
    drawnVillagers.push(new Villager("kid", 520, 380, "Village"))
    drawnVillagers.push(new Villager("oldMan", 500, 350, "Village"))

    drawnVillagers.push(new Villager("man", 300, 340, "Village"))
    drawnVillagers.push(new Villager("woman", 350, 360, "Village"))

    drawnVillagers.push(new Villager("woman", 310, 390, "Village"))
    drawnVillagers.push(new Villager("woman", 310, 410, "Village"))

    drawnVillagers.push(new Villager("man", 300, 420, "Village"))

    drawnVillagers.push(new Villager("woman", 300, 450, "Village"))
    drawnVillagers.push(new Villager("man", 350, 460, "Village"))
    drawnVillagers.push(new Villager("woman", 320, 490, "Village"))
    drawnVillagers.push(new Villager("man", 350, 520, "Village"))

    drawnVillagers.push(new Villager("man", 380, 530, "Village"))
    drawnVillagers.push(new Villager("woman", 360, 550, "Village"))
}