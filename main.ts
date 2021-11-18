input.onButtonPressed(Button.A, function () {
    chod = 1
    basic.pause(500)
    RingbitCar.forward()
})
input.onSound(DetectedSound.Loud, function () {
    chod = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    chod = 0
})
let chod = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
input.setSoundThreshold(SoundThreshold.Loud, 128)
chod = 0
basic.forever(function () {
    if (chod == 1) {
        if (RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm) <= 10) {
            RingbitCar.brake()
        }
        if (RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm) > 10) {
            RingbitCar.forward()
        }
    } else {
        RingbitCar.brake()
    }
})
