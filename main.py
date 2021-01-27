while True:
    """if input.rotation(Rotation.PITCH)> 0 or input.rotation(Rotation.PITCH < 0 : 
        light.set_all(light.rgb(255,0,0))"""

    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 0 or input.acceleration(Dimension.Y)> 0:
        light.set_all(light.rgb(0,255,0))
        music.ba_ding.play_until_done()
    else:
        light.clear()
        music.stop_all_sounds()
