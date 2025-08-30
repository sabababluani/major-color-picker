# major-color-picker

`major-color-picker` is a simple and lightweight JavaScript/TypeScript utility that extracts the most dominant color from an image. It uses the HTML Canvas API to analyze image pixel data and returns the most frequent color in HEX format.

## Installation

You can install the package using npm:

```bash
npm install major-color-picker
```

# Usage

```js
import { getDominantColorFromImage } from 'major-color-picker';

<input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const color = await getDominantColorFromImage(file);
      console.log('Dominant color:', color);
    }
  }}
/>
```

# API

    getDominantColorFromImage(imgFile: File): Promise<string>

Parameters:

    imgFile (File): An image file object (from an input field or file picker).

Returns:

    Promise<string>: A Promise that resolves to the most dominant color in HEX format (e.g., #ff5733).

# How It Works

    The image is loaded into memory using a FileReader.

    It is rendered onto a temporary canvas element.

    The pixel data is extracted and analyzed to determine the most frequently occurring RGB value.

    The dominant RGB color is converted to a HEX string.

If you have any ideas or adjustment feel free to contribute
