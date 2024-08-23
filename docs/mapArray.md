# mapArray

The `map array` function returns an array of integer numbers from mapping an input array to a specified music scale and number of octaves.

```sig
sonification.mapArray([0, 1], 262, sonification.chooseScale(SCALE.major), 1)
```

## Parameters

**list**: the array to be mapped.

**key**: a number specifying the root frequency of the target scale.

**rule**: an array containing the frequency ratios.

**octaves**: a number specifying the number of octaves.

## Example

This block is useful in combination with the [playArray](/docs/playArray.md) function. See an example on the [main page](/README.md).

```package
sonification=github:davidnsousa/sonification
```
