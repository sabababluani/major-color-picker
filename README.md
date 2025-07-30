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



# How It Works

    The image is loaded into memory using a FileReader.

    It is rendered onto a temporary canvas element.

    The pixel data is extracted and analyzed to determine the most frequently occurring RGB value.

    The dominant RGB color is converted to a HEX string.

# License

MIT


If you have any ideas or adjustment feel free to contribute
