Sprites = sprites.create(assets.image("""player"""), SpriteKind.player)
tiles.set_tilemap(tilemap("""level1"""))
Ai = sprites.create(assets.image("""Ai"""), SpriteKind.enemy)
scene.camera_follow_sprite(Sprites)
tiles.place_on_random_tile(Sprites,assets.tile("""block"""))
tiles.place_on_random_tile(Ai,assets.tile("""black"""))
g = game.ask_for_number("what is your pin code?")
c = 0
x = 0
    
def on_forever():
    if x != g :
        x =randint(0, 9999)
    elif x==g :
        Ai.say(c)
    
    c=c+1
    if c==999:
        Ai.say("I am exhausted")
forever(on_forever)
