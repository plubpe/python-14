let Sprites = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
let Ai = sprites.create(assets.image`Ai`, SpriteKind.Enemy)
scene.cameraFollowSprite(Sprites)
tiles.placeOnRandomTile(Sprites, assets.tile`block`)
tiles.placeOnRandomTile(Ai, assets.tile`black`)
let g = game.askForNumber("what is your pin code?")
let c = 0
let x = 0
forever(function on_forever() {
    let x: number;
    let c: number;
    if (x != g) {
        x = randint(0, 9999)
    } else if (x == g) {
        Ai.say(c)
    }
    
    c = c + 1
    if (c == 999) {
        Ai.say("I am exhausted")
    }
    
})
