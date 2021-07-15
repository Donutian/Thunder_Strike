def on_up_pressed():
    Thunder_Wing.set_image(img("""
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
    """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_up_repeated():
    jetExhaust()
controller.up.on_event(ControllerButtonEvent.REPEATED, on_up_repeated)

def A_to_E():
    music.play_tone(440, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(988, music.beat(BeatFraction.EIGHTH))
    music.play_tone(740, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))

def on_a_pressed():
    global missile
    missile = sprites.create_projectile_from_sprite(img("""
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
        """),
        Thunder_Wing,
        150,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def G_to_E():
    music.play_tone(392, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(988, music.beat(BeatFraction.EIGHTH))
    music.play_tone(740, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))

def on_right_repeated():
    jetExhaust()
controller.right.on_event(ControllerButtonEvent.REPEATED, on_right_repeated)

def on_left_pressed():
    Thunder_Wing.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def jetExhaust():
    global flame
    flame = sprites.create_projectile_from_sprite(img("""
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
        """),
        Thunder_Wing,
        -1,
        0)
    flame.destroy(effects.clouds, 22)
def Ab_to_E():
    music.play_tone(415, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(988, music.beat(BeatFraction.EIGHTH))
    music.play_tone(740, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))

def on_right_pressed():
    Thunder_Wing.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def gameMusic():
    music.set_tempo(30)
    for index in range(3):
        B_to_E()
        A_to_E()
        Ab_to_E()
        G_to_E()
    B_to_E()
    A_to_E()
    Ab_to_E()
    G_to_C()
def createSprites():
    global Thunder_Wing, enemyBomber
    Thunder_Wing = sprites.create(img("""
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
        """),
        SpriteKind.player)
    enemyBomber = sprites.create(img("""
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
        """),
        SpriteKind.player)

def on_down_repeated():
    jetExhaust()
controller.down.on_event(ControllerButtonEvent.REPEATED, on_down_repeated)

def G_to_C():
    music.play_tone(392, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(988, music.beat(BeatFraction.EIGHTH))
    music.play_tone(740, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(440, music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.play_tone(554, music.beat(BeatFraction.EIGHTH))

def on_down_pressed():
    Thunder_Wing.set_image(img("""
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
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def B_to_E():
    music.play_tone(494, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(988, music.beat(BeatFraction.EIGHTH))
    music.play_tone(740, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(698, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(494, music.beat(BeatFraction.EIGHTH))
    music.play_tone(587, music.beat(BeatFraction.EIGHTH))
    music.play_tone(659, music.beat(BeatFraction.EIGHTH))

def on_on_destroyed(sprite):
    game.over(False)
sprites.on_destroyed(SpriteKind.player, on_on_destroyed)

def on_overlap_tile(sprite, location):
    Thunder_Wing.destroy(effects.fire, 500)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles2,
    on_overlap_tile)

def on_left_repeated():
    jetExhaust()
controller.left.on_event(ControllerButtonEvent.REPEATED, on_left_repeated)

flame: Sprite = None
missile: Sprite = None
enemyBomber: Sprite = None
Thunder_Wing: Sprite = None
createSprites()
controller.move_sprite(Thunder_Wing, 100, 100)
scene.camera_follow_sprite(Thunder_Wing)
tiles.set_tilemap(tilemap("""
    level1
"""))
tiles.place_on_tile(Thunder_Wing, tiles.get_tile_location(2, 7))
tiles.set_tile_at(tiles.get_tile_location(0, 16),
    sprites.builtin.forest_tiles2)
thunderWingVelocity = Thunder_Wing.vx
tiles.place_on_tile(enemyBomber, tiles.get_tile_location(29, 7))