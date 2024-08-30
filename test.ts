// Test the 'playNote' function with default parameters. Expected: play a middle C tone for 500 ms
sonification.playNote(262, 500)
// Test the 'rest' function with default $duration.  Expected: all sounds are stopped for 1000 ms
sonification.rest(1000)
// Test the 'playNote' function with chosen $tone and $duration. Expected: play a middle D tone for 1000 ms
sonification.playNote(294, 1000)
// Test the 'rest' function with $duration set to 500 ms.  Expected: all sounds are stopped for 500 ms
sonification.rest(500)
// Test the 'map' function with default $key, $rule and $octaves, the light level as the $value input, and $low and $high inputs set to 0 and 255 respectively. The map function is tested in combination with the 'playNote' function to test its output with default $key, $rule and $octaves. When $value, $low and $high are default (0) no sound is played. The mapping requires $value, $low and $high input different of zero. Expected: play a tone whith a frequency resulting from mapping the light level to the chosen music scale (default).
sonification.playNote(sonification.map(input.lightLevel(), 0, 255, 262, sonification.chooseScale(sonification.Scale.Major), 1), 500)
// Test the 'map' function with chosen $key, $rule and $octaves, the light level as the $value input, and $low and $high inputs set to 0 and 255 respectively. The map function is tested in combination with the 'playNote' function to test its output with chosen parameters. Expected: play a 1000 ms tone whith a frequency resulting from mapping the light level to the chosen music scale D minor on 2 octaves.
sonification.playNote(sonification.map(input.lightLevel(), 0, 255, 294, sonification.chooseScale(sonification.Scale.Minor), 2), 1000)
// Test the 'map' function with default $key and $octaves, the light level as the $value input, the $low and $high inputs set to 0 and 255 respectively, and the $rule set to an array listing the frequency ratios of the harmonic scale. The map function is tested in combination with the 'playNote' function to test its output with a custom $rule array as input. Expected: play a tone whith a frequency resulting from mapping the light level to the harmonic music scale.
sonification.playNote(sonification.map(input.lightLevel(), 0, 255, 262, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
], 1), 500)
// Test the 'playArray' function with default parameters. Expected: play a 0Hz and a 1Hz frequency tone sequentially, each for 500 ms (not audibale).
sonification.playArray([0, 1], 500)
// Test the 'playArray' function with a chosen input array  $array containing numbers 262 and 524 and chosen $duration 1000. Expected: play Middle C and High C tones sequentially, each for 1000 ms.
sonification.playArray([262, 524], 1000)
// Test the 'mapArray' function with default parameters. The 'mapArray' function is tested in combination with the 'PlayArray' function to test its output with default parameters. Expected: play the lowest and the higher notes in the Middle C major scale sequentially (Middle C and High D), each tone for 500 ms.
sonification.playArray(sonification.mapArray([0, 1], 262, sonification.chooseScale(sonification.Scale.Major), 1), 500)
// Test the 'mapArray' function with a chosen input $array, $key, $rule, $octaves. The 'mapArray' function is tested in combination with the 'PlayArray' function to test its output with chosen input. Expected: play the chosen input array on the D minor scale on two octaves, each tone for 500 ms.
sonification.playArray(sonification.mapArray([
    34,
    6,
    56,
    6,
    78,
    56,
    45,
    23,
    13,
    6,
    12,
    3,
    86,
    3,
    15
], 294, sonification.chooseScale(sonification.Scale.Minor), 2), 500)
// Test the 'mapArray' function with a chosen input $array and $rule. The 'mapArray' function is tested in combination with the 'PlayArray' function to test its output with chosen input $array and $rule. Expected: play the input $array mapped to the Middle C harmonic scale on 1 octave, each tone for 500 ms.
sonification.playArray(sonification.mapArray([
    34,
    34,
    12,
    57,
    26,
    47,
    82,
    64,
    65,
    23
], 262, [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
], 1), 500)
// Test the 'playSensor' function with default parameters. This is equivalent to the 'map' function combined with the 'playNote' function having the light level as $value and 0 and 255 has $low and $high input values. Expected: play a tone whith a frequency resulting from mapping the light level to the chosen music scale (default).
sonification.playSensor(sonification.InputSensor.Light, 262, sonification.chooseScale(sonification.Scale.Major), 1, 500)
// Test the 'playSensor' function with chosen $sensor set to acceleration strength. Expected: play a tone whith a frequency resulting from mapping the sound level to the chosen music scale (default).
sonification.playSensor(sonification.InputSensor.AccelerationStrength, 262, sonification.chooseScale(sonification.Scale.Major), 1, 500)
// Test the 'playSensor' function with chosen $sensor set to acceleration on x. Expected: play a tone whith a frequency resulting from mapping the acceleration on x to the chosen music scale (default).
sonification.playSensor(sonification.InputSensor.AccelerationX, 262, sonification.chooseScale(sonification.Scale.Major), 1, 500)
// Test the 'playSensor' function with chosen $sensor set to acceleration on y. Expected: play a tone whith a frequency resulting from mapping the acceleration on y to the chosen music scale (default).
sonification.playSensor(sonification.InputSensor.AccelerationY, 262, sonification.chooseScale(sonification.Scale.Major), 1, 500)
// Test the 'playSensor' function with chosen $sensor set to acceleration on z. Expected: play a tone whith a frequency resulting from mapping the acceleration on z to the chosen music scale (default).
sonification.playSensor(sonification.InputSensor.AccelerationZ, 262, sonification.chooseScale(sonification.Scale.Major), 1, 500)
// Test the 'playSensor' function with chosen $sensor set to acceleration strength. Expected: play a tone whith a frequency resulting from mapping the acceleration strength to the chosen music scale (default).
sonification.playSensor(sonification.InputSensor.AccelerationStrength, 262, sonification.chooseScale(sonification.Scale.Major), 1, 500)
// Test the 'playSensor' function with chosen parameters. Expected: play a tone whith a frequency resulting from mapping the sound level to the harmonic scale on Middle D with 2 octaves, for 100 ms each sound.
sonification.playSensor(sonification.InputSensor.AccelerationStrength, 294, [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
], 2, 100)
