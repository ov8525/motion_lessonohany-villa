while True:
    """if input.rotation(Rotation.PITCH)> 10: 
        light.set_all(light.rgb(255,0,0))"""

    if input.acceleration(Dimension.X) > 1 or input.acceleration(Dimension.Y):
        light.set_all(light.rgb(0,255,0))
        music.ba_ding.play_until_done()
