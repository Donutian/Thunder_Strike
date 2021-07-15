namespace SpriteKind {
    export const Thunder_Squad = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Thunder_Wing.setImage(img`
        ................
        ..........f.....
        ..........f.....
        .........bb.....
        ........bbb.....
        ........bbb.....
        .......55bb.....
        .......55bfbd...
        .......55bfbbd..
        .......55bfbbd..
        .......bbbfbbbd.
        .......bbbfbbbd.
        ........bbfbbbd.
        ........bbfbbbb.
        ........bbfbbbb.
        ........bbfbbbb.
        ........bbffbbb.
        .......bbbb.bbb.
        .......bbbb..bb.
        ......bbbbbb..b.
        .....bbbbbbb....
        ....fbbbbbb.....
        ....ff..ff......
        ................
        `)
})
function controlsAndRules () {
    game.splash("Thunder Wing")
    game.splash("Controls:")
    game.splash("1. Use arrow keys, WASD", "or the control pad to move")
    game.splash("2. Use the A button, space bar,", " or Z key to shoot missiles")
    game.splash("Your Goal: to protect your ", "country from enemies")
    game.splash("As you progress you will ", "gain scrap, use the scrap to upgrade your jet")
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    missile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Thunder_Wing, 150, 0)
})
function G_to_C () {
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(740, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(554, music.beat(BeatFraction.Eighth))
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Thunder_Wing.setImage(img`
        ........................
        ........................
        ........................
        ........................
        .....................ff.
        ....................bbf.
        ...................bbb..
        ......5555bb.....bbbbb..
        ....bb5555bbbbbbbbbbbbf.
        ...bbbbbbbbbbbbbbbbbbbf.
        .ffbbbbffffffffffbbbbb..
        .......bbbbbbbbbf..bb...
        .......dbbbbbbbbbb......
        ........ddbbbbbbbbb.....
        ..........dddbbbbbbb....
        ........................
        `)
})
scene.onOverlapTile(SpriteKind.Thunder_Squad, sprites.builtin.forestTiles2, function (sprite, location) {
    info.changeLifeBy(-1)
    sprite.y += -10
})
function A_to_E () {
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(740, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
}
function jetExhaust () {
    flame = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 4 5 . . . . . . . . 
        . . . . 2 4 5 5 . . . . . . . . 
        . . . . . 2 4 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Thunder_Wing, -1, 0)
    flame.destroy(effects.clouds, 22)
}
function Ab_to_E () {
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(740, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
}
sprites.onOverlap(SpriteKind.Thunder_Squad, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.x += -15
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Thunder_Wing.setImage(img`
        ........................
        ........................
        ........................
        ........................
        .ff.....................
        .fbb....................
        ..bbb...................
        ..bbbbb.....bb5555......
        .fbbbbbbbbbbbb5555bb....
        .fbbbbbbbbbbbbbbbbbbb...
        ..bbbbbffffffffffbbbbff.
        ...bb..fbbbbbbbbb.......
        ......bbbbbbbbbbd.......
        .....bbbbbbbbbdd........
        ....bbbbbbbddd..........
        ........................
        `)
})
function G_to_E () {
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(740, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
}
function gameMusic () {
    music.setTempo(30)
    for (let index = 0; index < 3; index++) {
        B_to_E()
        A_to_E()
        Ab_to_E()
        G_to_E()
    }
    B_to_E()
    A_to_E()
    Ab_to_E()
    G_to_C()
}
function createSprites () {
    Thunder_Wing = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        .ff.....................
        .fbb....................
        ..bbb...................
        ..bbbbb.....bb5555......
        .fbbbbbbbbbbbb5555bb....
        .fbbbbbbbbbbbbbbbbbbb...
        ..bbbbbffffffffffbbbbff.
        ...bb..fbbbbbbbbb.......
        ......bbbbbbbbbd........
        .....bbbbbbbbdd.........
        ....bbbbbbddd...........
        ........................
        `, SpriteKind.Thunder_Squad)
    enemyBomber = sprites.create(img`
        ................................................
        ................................................
        ................................................
        ...............................................b
        ...............................................b
        ..............................................6b
        .............................................b66
        ...ccccccccc66cccccccccccccc................b666
        ...ffffffffff66cc66666cccccccc.............bb666
        ..fffffffffffccc66666ccccccccccccc.........bbb66
        ccfffffffffffccc66666cccccccccccccccc66cccccbb6b
        ccffffffffffcccccc666ccccc666cccccccc666cccccbb.
        cccccccccccccccccccccccccc666c66ccccc666ccc6ccb.
        c666cccccccc666cccccccccccccc666cccccccccc666c..
        c666cccc6666666cccccccc66cccc666cccccccccc6666..
        c66cccccc66666ccccccc6666cccccccccccccccccccc...
        cc6ccccbbbbbbbbbbbbbb6666bbcccccccccccccc.......
        .cccccbbbbbbbbbbbbbbbbb666bbccccccc.............
        ..ccccbbbbbb666bbbbbbbb666bbb...................
        .......bbb6666666bbbbbbb66bbbb..................
        .......bbb6666666bbbbbbb66bbbb..................
        .......bbbb66666bbbbbbbbbbbbbb..................
        .......dcbbb666bbbbbbbbbbbbbbb..................
        .......ddbbbbbbbbbbb6666bbbbbbb.................
        ...........dcbbbbbbb6666bbbbbbbb................
        ...........ddbbbbbbb66666bbbbbbbb...............
        ..............dcbbbbb6666bbbbbbbbb..............
        ..............ddbbbbbbbbbbbbbbbbbbb.............
        .................dcbbbbbbbbbbbbbbb6666..........
        .................ddbbbbb6666bbbbbb6666b.........
        .....................dcb6666bbbbbbb666..........
        .....................dd...66bbbbbbbbb...........
        `, SpriteKind.Enemy)
}
sprites.onDestroyed(SpriteKind.Thunder_Squad, function (sprite) {
	
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Thunder_Wing.setImage(img`
        ................
        ......ff..ff....
        .....bbbbbbf....
        ....bbbbbbb.....
        .b..bbbbbb......
        .bb..bbbb.......
        .bbb.bbbb.......
        .bbbffbb........
        .bbbbfbb........
        .bbbbfbb........
        .bbbbfbb........
        .dbbbfbb........
        .dbbbfbbb.......
        .dbbbfbbb.......
        ..dbbfb55.......
        ..dbbfb55.......
        ...dbfb55.......
        .....bb55.......
        .....bbb........
        .....bbb........
        .....bb.........
        .....f..........
        .....f..........
        ................
        `)
})
info.onLifeZero(function () {
    game.splash("You Died", "Try Again")
    tiles.placeOnTile(Thunder_Wing, tiles.getTileLocation(2, 7))
    info.setLife(3)
})
function B_to_E () {
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(740, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
let flame: Sprite = null
let missile: Sprite = null
let enemyBomber: Sprite = null
let Thunder_Wing: Sprite = null
controlsAndRules()
let playerName = game.askForString("What is Your Name?")
game.splash("Get ready " + playerName)
createSprites()
controller.moveSprite(Thunder_Wing, 100, 100)
scene.cameraFollowSprite(Thunder_Wing)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(Thunder_Wing, tiles.getTileLocation(2, 7))
tiles.setTileAt(tiles.getTileLocation(0, 16), sprites.builtin.forestTiles2)
let thunderWingVelocity = Thunder_Wing.vx
tiles.placeOnTile(enemyBomber, tiles.getTileLocation(29, 7))
info.setLife(3)
forever(function () {
	
})
