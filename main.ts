controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
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
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Thunder_Wing.image.flipX()
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
    flame.destroy(effects.clouds, 100)
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
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
