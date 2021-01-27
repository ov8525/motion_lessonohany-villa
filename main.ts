while (true) {
    /** if input.rotation(Rotation.PITCH)> 10: 
        light.set_all(light.rgb(255,0,0))
 */
    if (input.acceleration(Dimension.X) > 1 || input.acceleration(Dimension.Y)) {
        light.setAll(light.rgb(0, 255, 0))
        music.baDing.playUntilDone()
    }
    
}
