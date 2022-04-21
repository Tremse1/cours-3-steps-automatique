let Steps = 0
input.onButtonPressed(Button.A, function () {
    Steps = 0
    basic.showNumber(Steps)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Steps / 120 * 60)
})
input.onButtonPressed(Button.B, function () {
    Steps += 1
})
