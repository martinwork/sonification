> Open this page at [https://davidnsousa.github.io/sonification/](https://davidnsousa.github.io/sonification/)

## Sonification for Makecode

This micro:bit Makecode extension was developed in the context of the [SoundScapes project](https://soundscapes.nuclio.org/), a creative and inclusive approach using sonification to empower teachers and students in the digital era.

## What is sonification?

Have you ever wondered what it would sound like if you could hear the stars shining, the atmospheric pressure variations or someones' thoughts and feelings? What could you learn from that? Would it sound nice? It turns out that all of this is possible.  Some phenomena are actually emitting sound waves that we can amplify, others emit  electromagnetic waves that can be scaled to audio frequencies and others cannot be described as "waves". But all of them are described by physical parameters which can be translated to sound. The process is called sonification.

## Usage

### Map and play a single value on a music scale

The `map` function returns a integer number from mapping a number on a certain  range [low, high] to a specified music scale and number of octaves.

For instance the following example maps the `light level` value on the range [`0`,`255`] to `Middle C` `Major` on `1` octave and plays it for `500` ms:

```block
sonification.playNote(sonification.map(input.lightLevel(), 0, 255, 262, sonification.chooseScale(SCALE.major), 1), 500)
```

Other sensors (including external sensors connnected through pins to the micro:bit) and different input range can be used as well. This is useful for real-time sonification, when you sonify the data at the same time you collect it.

### Map and play an array on a music scale

The `map array` function returns an array of integer numbers from mapping an input array to a specified music scale and number of octaves.

For instance the following example maps the array `list` containing the values `23`, `67`and `49` value on the range specified the maximum and minimum value in `list` (in this case 23 and 67 respectively) to `Middle D` `Minor` on `2` octaves and plays them sequentially for `500` ms each:

```block
let list = [23, 67, 49]
sonification.playArray(sonification.mapArray(list, 262, sonification.chooseScale(SCALE.major), 1), 500)
```

Any array of numbers can be used as input. This is useful for *a posteriori* sonification and you want to sonify the data after collecting it.

### Map and play on a custom scale

You can easily create your own music scales with arrays and serve them as input to the `map` and `map array` functions to map and play any number value on you custom scale. The input array must contain the frequency ratios relative to the root frequency.

For instance, the following maps the `light level` value on the range [`0`,`255`] to `Middle C` `harmonic` on `1` octave and plays it for `500` ms:

```block
let harmonic = [1,2,3,4,5,6,7,8,9,10]
sonification.playNote(sonification.map(input.lightLevel(), 0, 255, 262, harmonic, 1), 500)
```

where `harmonic` is an array of  numbers containing the frequency ratios of the harmonic scale.

### Map and Play directly from a micro:bit sensor

To map and Play directly from a micro:bit sensor you can use the following block with a dropdown menu for choosing the sensor. The input range is automatically selected to match the minimum and maximum values that can be obtain from the micro:bit sensors.

```block
sonification.playSensor(INPUTSENSOR.LIGHT, 262, sonification.chooseScale(SCALE.major), 1, 500)
```

This example is equivalent to the first real-time sonification example of this tutorial. Using this block can be useful to test and focus more on creating and experimenting with music scales before diving deeper in more complex programming.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/davidnsousa/sonification** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/davidnsousa/sonification** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## License

MIT

