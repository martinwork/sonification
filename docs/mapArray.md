# mapArray

Returns an array of integer numbers from mapping an input array to a specified music scale and number of octaves.

```sig
sonification.mapArray([], Note.C, sonification.chooseScale(sonification.Scale.Major))
```

## Parameters

**list**: the array to be mapped.

**key**: a number specifying the root frequency of the target scale.

**rule**: an array containing the frequency ratios.

**octaves**: a number specifying the number of octaves.

## Returns

Returns a list of integers.

## Example

This block is useful in combination with the [playArray](/docs/playArray.md) function. See an example on the [main page](/README.md).

```package
sonification=github:davidnsousa/sonification
```
