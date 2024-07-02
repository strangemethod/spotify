import { useRef, useEffect } from 'react';

export default function GetColor(props){
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = props.imageUrl;

    image.onload = () => {
      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0);

      // Get the pixel data of the top-left corner (position: 0,0)
      const pixelData = ctx.getImageData(0, 0, 1, 1).data;

      // Extract RGB values from the pixel data
      const [red, green, blue] = pixelData;

      const dark = `rgba(${red}, ${green}, ${blue}, .7)`;
      const light = `rgba(${red}, ${green}, ${blue}, .2)`
      props.setDetailColor(`linear-gradient(${dark}, ${light})`)
    };
  }, [props.imageUrl]);

  return <canvas ref={canvasRef} />;
};

