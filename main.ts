let list: number[] = []
player.onChat("level1", function () {
    builder.teleportTo(pos(0, -1, 0))
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    MINECART,
    1
    )
})
function block_met_spoor (powered: boolean) {
    list = [REDSTONE_BLOCK, POWERED_RAIL, AIR]
    if (!(powered)) {
        list[0] = RED_CONCRETE
        list[1] = RAIL
    }
    for (let index = 0; index <= list.length - 1; index++) {
        builder.place(list[index])
        builder.move(UP, 1)
    }
    builder.shift(1, -3, 0)
}
function diagonaal_spoor_omhoog (omhoog: boolean, lengte: number) {
    if (lengte < 1) {
        player.say("De lengte moet 1 of meer zijn")
        return
    }
    for (let index = 0; index < lengte; index++) {
        if (!(omhoog)) {
            builder.move(DOWN, 1)
        }
        block_met_spoor(true)
        if (omhoog) {
            builder.move(UP, 1)
        }
    }
}
function draai_spoor_links (links: boolean) {
    if (links) {
        builder.turn(LEFT_TURN)
    } else {
        builder.turn(RIGHT_TURN)
    }
    block_met_spoor(false)
}
function vuurwerk_spoor () {
    block_met_spoor(false)
    list = [DISPENSER, DETECTOR_RAIL, AIR]
    for (let index = 0; index <= list.length - 1; index++) {
        builder.place(list[index])
        builder.move(UP, 1)
    }
    builder.shift(1, -3, 0)
    block_met_spoor(false)
}
function horizontaal_spoor (lengte: number) {
    if (lengte < 1) {
        player.say("De lengte moet 1 of meer zijn")
        return
    }
    for (let index = 0; index < lengte; index++) {
        block_met_spoor(true)
    }
}
