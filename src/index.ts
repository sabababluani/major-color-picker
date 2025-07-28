export async function getDominantColorFromImage(imgFile: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
  
      reader.onload = () => {
        img.src = reader.result as string;
      };
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas context not available');
  
        canvas.width = img.width;
        canvas.height = img.height;
  
        ctx.drawImage(img, 0, 0, img.width, img.height);
  
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
  
        const colorMap: Record<string, number> = {};
        let dominantColor = '';
        let maxCount = 0;
  
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const key = `${r},${g},${b}`;
  
          colorMap[key] = (colorMap[key] || 0) + 1;
  
          if (colorMap[key] > maxCount) {
            maxCount = colorMap[key];
            dominantColor = key;
          }
        }
  
        const [r, g, b] = dominantColor.split(',').map(Number);
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
  