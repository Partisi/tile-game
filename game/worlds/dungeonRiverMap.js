const dungeonRiverFloor = [
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 21, 21, 21, 21, 21],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 21, 21, 21, 20, 20, 20, 20, 20, 20],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 24, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 24, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 24, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 28, 20, 20, 20, 20, 20, 20, 20, 23, 23, 23],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 24, 20, 20, 20, 20, 20, 27, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 24, 20, 20, 20, 20, 27, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 28, 20, 20, 20, 22, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 28, 23, 23, 27, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
]


const dungeonRiverWorld = [
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, 00, 00, 00, 00, 00, 00, 05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 92],
    [21, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 92],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 92],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 92],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 92],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 92],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 05],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, 05, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, 05, 21, 05],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, 00, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, 00, 05, 00, 00, 00, 00, 05, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, -2, -2],
    [21, -2, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, -2, -2],
    [21, -2, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 21, -2, -2, 21, 00, 00, 21, -2],
    [-2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 24, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, 00, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 05, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 21, -2, -2, 05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 00, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, 05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, 05, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 05, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 23, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2],
    [21, -2, -2, 05, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 21, -2, -2, 21, -2],
    [-2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, 00, 21, -2, -2, 21, -2, 00, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 00, 05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05, 21, -2, -2, 21, -2],
    [-2, -2, -2, 05, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2],
    [-2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, 00, 00, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 05, 00, 00, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, 00, -2, -2, -2, 00, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 00, 00, 00, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    [21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2, -2, 21, -2],
    [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
]