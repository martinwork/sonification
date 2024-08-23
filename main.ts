let result2 = 0
let result = 0
/**
 * % group="Auxiliary"
 */
/**
 * % block="$scale"
 */
/**
 * % blockId=chooseScale
 */
/**
 * Choose the input scale rule
 * 
 * (an array containing the frequency ratios relative to the root frequency).
 */
/**
 * % group="Play"
 */
/**
 * % duration.defl=1000
 */
/**
 * % block="rest for $duration ms"
 */
/**
 * % blockId=rest
 */
/**
 * Stop all sounds for the specified duration.
 */
/**
 * % group="Play"
 */
/**
 * % duration.defl=500
 */
/**
 * % tone.defl=Note.C
 */
/**
 * % tone.shadow="device_note"
 */
/**
 * % block="play tone $tone for $duration ms"
 */
/**
 * % blockId=music_play_note
 */
/**
 * Play the specified tone frequency with a certain duration.
 */
/**
 * % group="Play"
 */
/**
 * % duration.defl=500
 */
/**
 * % tone.shadow="device_note"
 */
/**
 * % block="play tones from $array for $duration ms each tone"
 */
/**
 * % blockId=music_play_array
 */
/**
 * Play all tone frequencies from the input array sequentially, each with the specified duration.
 */
/**
 * Logic for compass sensor
 */
/**
 * Logic for acceleration strength
 */
/**
 * Logic for acceleration in the Z direction
 */
/**
 * Logic for acceleration in the Y direction
 */
/**
 * Logic for acceleration in the X direction
 */
/**
 * Logic for light sensor
 */
/**
 * Logic for light sensor
 */
/**
 * % group="Play"
 */
/**
 * % octaves.defl="1"
 */
/**
 * % duration.defl=500
 */
/**
 * % rule.defl=Scale.major
 */
/**
 * % rule.shadow="chooseScale"
 */
/**
 * % key.defl=Note.C
 */
/**
 * % key.shadow="device_note"
 */
/**
 * % inlineInputMode=inline
 */
/**
 * % block="play sensor $sensor mapped to $key $rule on $octaves octaves for $duration ms"
 */
/**
 * % blockId=PlaySensor
 */
/**
 * Re-maps a value measured from the chosen micro:bit sensor to a music scale on a number of octaves.
 * 
 * That is, the lowest measurable value would get mapped to the lowest tone on the music
 * 
 * scale specified, the highest measurable value would get mapped to the highest tone
 * 
 * on the same scale and values in-between to tones in-between.
 */
/**
 * % group="Map"
 */
/**
 * % octaves.defl="1"
 */
/**
 * % rule.defl=Scale.major
 */
/**
 * % rule.shadow="chooseScale"
 */
/**
 * % key.defl=Note.C
 */
/**
 * % key.shadow="device_note"
 */
/**
 * % inlineInputMode=inline
 */
/**
 * % block="map $value from low $low high $high to $key $rule on $octaves octaves"
 */
/**
 * % blockId=mappedvalue
 */
/**
 * Re-maps a number from a range to a music scale on a number of octaves.
 * 
 * That is, a value ``from low`` would get mapped to the lowest tone on the music
 * 
 * scale specified, a value ``high`` would get mapped to the highest tone
 * 
 * on the same scale and values in-between to tones in-between.
 */
/**
 * % group="Map"
 */
/**
 * % octaves.defl="1"
 */
/**
 * % rule.defl=Scale.major
 */
/**
 * % rule.shadow="chooseScale"
 */
/**
 * % key.defl=Note.C
 */
/**
 * % key.shadow="device_note"
 */
/**
 * % inlineInputMode=inline
 */
/**
 * % block="map array $list to $key $rule on $octaves octaves"
 */
/**
 * % blockId=maparray
 */
/**
 * Re-maps all numbers in the array to a music scale on a number of octaves.
 * 
 * That is, the smallest number in the array would get mapped to the lowest tone on the music
 * 
 * scale specified, the largest number in the array would get mapped to the highest tone
 * 
 * on the same scale and values in-between to tones in-between.
 */
/**
 * % color="#e79724" icon="\uf001"
 */
/**
 * % block="compass heading"
 */
/**
 * % block="acceleration strength"
 */
/**
 * % block="acceleration (z)"
 */
/**
 * % block="acceleration (y)"
 */
/**
 * % block="acceleration (x)"
 */
/**
 * % block="sound level"
 */
/**
 * % block="light level"
 */
/**
 * % block="Minor"
 */
/**
 * % block="Major"
 */
function findMin (array: number[]) {
    if (array.length == 0) {
        return NaN
    }
    result2 = array[0]
    for (let j = 1; j < array.length; ++j) {
        const entry2 = array[j];
        if (entry2 < result2) {
            result2 = entry2;
        }
    }
return result2
}
function findMax (array: number[]) {
    if (array.length == 0) {
        return NaN
    }
    result = array[0]
    for (let i = 1; i < array.length; ++i) {
        const entry = array[i];
        if (entry > result) {
            result = entry;
        }
    }
return result
}
