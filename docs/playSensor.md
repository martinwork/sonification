# playSensor

Maps and plays directly from a micro:bit sensor by choosing the sensor from  the dropdown menu. The input range is automatically selected to match the minimum and maximum values that can be obtained from the micro:bit sensors.

```sig
sonification.playSensor(INPUTSENSOR.LIGHT, 262, sonification.chooseScale(SCALE.major), 1, 500)
```

## Parameters

**sensor**: the micro:bit sensor.

**Key**: a number specifying the root frequency of the target scale.

**rule**: an array containing the frequency ratios.

**octaves**: a number specifying the number of octaves.

**duration**: a number specifying the amount of time during which each tone will play.

## Example

See an example on the [main page](/README.md).

```package
sonification=github:davidnsousa/sonification
```
