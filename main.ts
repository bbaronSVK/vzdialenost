function zastav () {
    chod = 0
    RingbitCar.brake()
}
input.onButtonPressed(Button.A, function () {
    chod = 1
    basic.pause(500)
    RingbitCar.forward()
})
input.onSound(DetectedSound.Loud, function () {
    zastav()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    zastav()
})
let chod = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
input.setSoundThreshold(SoundThreshold.Loud, 128)
chod = 0
basic.forever(function () {
    if (chod == 1) {
        if (RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm) <= 10) {
            RingbitCar.back()
            basic.pause(500)
            RingbitCar.turnleft()
            basic.pause(100)
        }
        if (RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm) > 10) {
            RingbitCar.forward()
        }
        if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
            RingbitCar.freestyle(100, 0)
            basic.pause(100)
        }
        if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
            RingbitCar.freestyle(0, 100)
            basic.pause(100)
        }
        RingbitCar.freestyle(80, 80)
    }
})
