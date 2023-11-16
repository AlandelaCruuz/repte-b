input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    music.changeTempoBy(100)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.changeTempoBy(10)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("B A D C5 F A F A ", 120), music.PlaybackMode.UntilDone)
})
