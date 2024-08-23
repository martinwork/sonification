# playArray

Play a list of tones contained in an array sequentially, each for the specified duration.

```sig
sonification.playArray([0, 1], 500)
```

## Parameters

**array**: an array containing the tones.

**duration**: a number specifying the amount of time during which each tone will play.

## Example

This block is useful in combination with the sonification [mapArray](/docs/mapArray.md) function. See an example on the [main page](/README.md).

```package
sonification=github:davidnsousa/sonification
```
