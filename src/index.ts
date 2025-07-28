export async function getAverageColorFromImage(imgFile: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('Canvas context not available');

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let rTotal = 0, gTotal = 0, bTotal = 0;
      let pixelCount = 0;

      for (let i = 0; i < data.length; i += 4) {
        rTotal += data[i];
        gTotal += data[i + 1];
        bTotal += data[i + 2];
        pixelCount++;
      }

      if (pixelCount === 0) return reject('No visible pixels');

      const r = Math.round(rTotal / pixelCount);
      const g = Math.round(gTotal / pixelCount);
      const b = Math.round(bTotal / pixelCount);

      const hex = `#${r.toString(16).padStart(2, '0')}${g
        .toString(16)
        .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

      resolve(hex);
    };

    img.onerror = reject;
    reader.onerror = reject;

    reader.readAsDataURL(imgFile);
  });
}
