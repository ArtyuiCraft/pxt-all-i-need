function create_sprite (name: string, x: number, y: number, background: boolean) {
    spritelist.push(name)
    x_y_handler(name, x, y, background)
}
function x_y_handler (name_sprite: string, x: number, y: number, background: boolean) {
    register_A = spritelist.indexOf(name_sprite)
    register_B = spritelist[register_A]
    if (register_B == name_sprite) {
        if (background == true) {
            register_A = last_x.indexOf(name_sprite) + 1
        } else {
            led.plotBrightness(x, y, 255)
            last_x.push("" + name_sprite + x)
            last_y.push("" + name_sprite + y)
        }
    } else {
        basic.showLeds(`
            . . . . .
            # # # . #
            # . # . #
            # # # . #
            . . . . .
            `)
    }
}
let register_B = ""
let register_A = 0
let last_x: string[] = []
let last_y: string[] = []
let spritelist: string[] = []
spritelist = []
create_sprite("test", 5, 1, true)
last_y = []
last_x = []
basic.forever(function () {
	
})
