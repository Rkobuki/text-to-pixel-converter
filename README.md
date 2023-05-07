# textToPixel

Convert your text into pixel art!

## Description

textToPixel is a simple and innovative JavaScript library that converts any text into pixel art. It uses the HTML5 canvas element and its getImageData method to retrieve the pixel data of the text's rendered image. The resulting data can be used to create pixel art-style graphics, animations, and more!

## Features

- Fast and efficient conversion of text to pixel art
- Fully customizable font size and style
- Easy integration with existing projects
- Supports all modern browsers

## Installation

To use textToPixel in your project, simply install it via npm:

```
npm install @pixart/text-to-pixel-converter
```

## Usage

Using textToPixel is as easy as calling the `textToPixel` function with your desired text and font size:

```javascript
import { textToPixel } from '@pixart/text-to-pixel-converter';

const pixels = textToPixel('Hello, world!', 16);
```

The `pixels` variable will contain a two-dimensional array of 1s and 0s, representing the black and white pixels of the rendered text.


## License

textToPixel is licensed under [the MIT License](https://en.wikipedia.org/wiki/MIT_License). See LICENSE for more information.

## Contributing

If you find a bug or have a feature request, please create an issue or submit a pull request. We welcome all contributions!