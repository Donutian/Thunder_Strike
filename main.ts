controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    jetExhaust()
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
let Thunder_Wing: Sprite = null
Thunder_Wing = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    .ff.....................
    .fbb....................
    ..bbb...................
    ..bbbbb.....bb1555......
    .fbbbbbbbbbbbb1111bb....
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
