while (true) {
    /** if input.rotation(Rotation.PITCH)> 0 or input.rotation(Rotation.PITCH < 0 : 
        light.set_all(light.rgb(255,0,0))
 */
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 0 || input.acceleration(Dimension.Y) > 0) {
        light.setAll(light.rgb(0, 255, 0))
        music.baDing.playUntilDone()
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
