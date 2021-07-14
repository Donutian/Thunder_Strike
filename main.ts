controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (thunderWingVelocity < 0) {
        missile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d d d d d d d . . . . . . . 
            . . d d d d d d d d . . . . . . 
            . . d d d d d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Thunder_Wing, -150, 0)
    } else if (thunderWingVelocity == 100) {
        missile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d d d d d d d . . . . . . . 
            . . d d d d d d d d . . . . . . 
            . . d d d d d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Thunder_Wing, 150, 0)
    } else if (thunderWingVelocity == 0) {
        missile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d d d d d d d . . . . . . . 
            . . d d d d d d d d . . . . . . 
            . . d d d d d d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Thunder_Wing, 150, 0)
    }
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
    flame.destroy(effects.clouds, 50)
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
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
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
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
let flame: Sprite = null
let missile: Sprite = null
let thunderWingVelocity = 0
let Thunder_Wing: Sprite = null
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
    ......bbbbbbbbbbd.......
    .....bbbbbbbbbdd........
    ....bbbbbbbddd..........
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Thunder_Wing, 100, 100)
scene.cameraFollowSprite(Thunder_Wing)
tiles.setTilemap(tilemap`level1`)
thunderWingVelocity = Thunder_Wing.vx
gameMusic()
