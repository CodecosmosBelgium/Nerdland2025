//% color=190 weight=100 block="CodeFever"
namespace CodeFever {
    export enum Richting {
        //% block="omhoog"
        Omhoog,
        //% block="omlaag"
        Omlaag
    }
    export enum Draaiing {
        //% block="links"
        Links,
        //% block="rechts"
        Rechts
    }
    function blockMetSpoor(powered: boolean) {
        let list = [REDSTONE_BLOCK, POWERED_RAIL, AIR]
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

    //% block="Diagonaal spoor van $lengte naar $omhoog"
    //% lengte.min=1 lengte.defl=5
    export function diagonaalSpoor(lengte: number, omhoog: Richting) {
        if (lengte < 1) {
            player.say("De lengte moet 1 of meer zijn")
            return
        }
        for (let index = 0; index < lengte; index++) {
            if (omhoog == Richting.Omlaag) {
                builder.move(DOWN, 1)
            }
            blockMetSpoor(true)
            if (omhoog == Richting.Omhoog) {
                builder.move(UP, 1)
            }
        }
    }

    //% block="Draaiend spoor naar $draaiing"
    export function draaiendSpoor(draaiing: Draaiing) {
        if (draaiing == Draaiing.Links) {
            builder.turn(LEFT_TURN)
        } else if (draaiing == Draaiing.Rechts) {
            builder.turn(RIGHT_TURN)
        }
        else {
            player.say("Het spoor heeft geen kant om te draaien meegekregen.")
            return
        }
        blockMetSpoor(false)
    }

    //% block="Spoor met vuurwerk"
    export function vuurwerkSpoor() {
        blockMetSpoor(false)
        let list = [DISPENSER, DETECTOR_RAIL, AIR]
        for (let index3 = 0; index3 <= list.length - 1; index3++) {
            builder.place(list[index3])
            builder.move(UP, 1)
        }
        builder.shift(1, -3, 0)
        blockMetSpoor(false)
    }

    //% block="Horizontaal spoor van $lengte"
    //% lengte.min=1 lengte.defl=5
    export function horizontaalSpoor(lengte: number) {
        if (lengte < 1) {
            player.say("De lengte moet 1 of meer zijn")
            return
        }
        for (let index = 0; index < lengte; index++) {
            blockMetSpoor(true)
        }
    }
}