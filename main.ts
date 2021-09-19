let Sprites = sprites.create(assets.image`player`, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
let Ai = sprites.create(assets.image`Ai`, SpriteKind.Enemy)
scene.cameraFollowSprite(Sprites)
tiles.placeOnRandomTile(Sprites, assets.tile`block`)
tiles.placeOnRandomTile(Ai, assets.tile`black`)
let g = game.askForNumber("what is your pin code?")
let c = 0
let x = 0
let stop = 0
let a = 0
let b = 0
let d = 0
let e = 0
let f = 0
g = 0
let h = 0
let i = 0
let j = 0
let o = 0
// if c==999:
// Ai.say("I am exhausted")
// stop = 1
forever(function on_forever() {
    
    if (stop == 1) {
        a = c
        x = randint(0, 9999)
        c = 1
    } else if (stop == 2) {
        b = c
        x = randint(0, 9999)
        c = 1
    } else if (stop == 3) {
        d = c
        x = randint(0, 9999)
        c = 1
    } else if (stop == 4) {
        o = (a + b + c + d) / 4
        Ai.say(o)
        return
    }
    
    // elif stop == 4:
    // e=c
    // x =randint(0, 9999)
    // c=1
    // elif stop == 5:
    // f=c
    // x =randint(0, 9999)
    // c=1
    // elif stop == 6:
    // g=c
    // x =randint(0, 9999)
    // c=1
    // elif stop == 7:
    // h=c
    // x =randint(0, 9999)
    // c=1
    // elif stop == 8:
    // i=c
    // x =randint(0, 9999)
    // c=1
    // elif stop == 9:
    // j=c
    // x =randint(0, 9999)
    // c=1
    // elif stop == 10:
    // o = a+b+c+d+e+f+g+h+i+j/10
    // Ai.say(o)
    // return
    if (x != g) {
        x = randint(0, 9999)
        Ai.say(x)
        c = c + 1
    }
    
    if (x == g) {
        stop = stop + 1
    }
    
})
