Sprites = sprites.create(assets.image("""player"""), SpriteKind.player)
tiles.set_tilemap(tilemap("""level1"""))
Ai = sprites.create(assets.image("""Ai"""), SpriteKind.enemy)
scene.camera_follow_sprite(Sprites)
tiles.place_on_random_tile(Sprites,assets.tile("""block"""))
tiles.place_on_random_tile(Ai,assets.tile("""black"""))
g = game.ask_for_number("what is your pin code?")
c = 0
x = 0
stop = 0
a = 0
b = 0
d = 0
e = 0
f = 0
g = 0
h = 0
i = 0
j = 0
o = 0

    
def on_forever():
    global g,c,x,stop,a,b,d,e,f,g,h,i,j,o
    if stop == 1:
        a=c
        x =randint(0, 9999)
        c=1
    elif stop == 2:
        b=c
        x =randint(0, 9999)
        c=1
    elif stop == 3:
        d=c
        x =randint(0, 9999)
        c=1
    elif stop == 4:
        o = (a+b+c+d)/4
        Ai.say(o)
        return
    #elif stop == 4:
        #e=c
        #x =randint(0, 9999)
        #c=1
    #elif stop == 5:
        #f=c
        #x =randint(0, 9999)
        #c=1
    #elif stop == 6:
        #g=c
        #x =randint(0, 9999)
        #c=1
    #elif stop == 7:
        #h=c
        #x =randint(0, 9999)
        #c=1
    #elif stop == 8:
        #i=c
        #x =randint(0, 9999)
        #c=1
    #elif stop == 9:
        #j=c
        #x =randint(0, 9999)
        #c=1
    #elif stop == 10:
        #o = a+b+c+d+e+f+g+h+i+j/10
        #Ai.say(o)
        #return
    if x != g :
        x =randint(0, 9999)
        Ai.say(x)
        c=c+1
    if x==g :
        stop = stop+1
    #if c==999:
        #Ai.say("I am exhausted")
        #stop = 1
forever(on_forever)
