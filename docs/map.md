# map

The `map` function returns an integer number from mapping a number on a certain range [low, high] to a specified music scale on a specified number of octaves.

```sig
sonification.map(0, 0, 0, 262, sonification.chooseScale(SCALE.major), 1)
```

## Parameters

**value**: the number to be mapped.

**low**: a number specifying the lowest value in the range.

**high**: a number specifying the highest value in the range.

**key**: a number specifying the root frequency of the target scale.

**rule**: an array containing the frequency ratios.

**octaves**: a number specifying the number of octaves.

## Returns

Returns an integer number.

## Example

This block is useful in combination with the [playNote](/docs/playNote.md) function. See an example on the [main page](/README.md).

```package
sonification=github:davidnsousa/sonification
```
