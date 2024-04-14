import React, { useRef, useEffect, useState } from 'react'

function DrawingCanvas({ onChange, currentColor, currentBrushSize, currentTool }) {
    const canvasRef = useRef(null)
    const [canDraw, setDrawState] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        if(currentTool === 0){ //0 is pencil
            context.strokeStyle = currentColor; 
            context.globalCompositeOperation = 'source-over';   
        }else{ //if eraser
            context.strokeStyle = 'rgba(0,0,0,1)'
            context.globalCompositeOperation = 'destination-out';;
        }
        
        context.lineWidth = currentBrushSize;

        const startDrawing = (event) => {
            context.beginPath();
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
          };
      
        const draw = (event) => {
            if(!canDraw){return;}

            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.stroke();
        };

        canvas.addEventListener('mousedown', (e) => {
            setDrawState(true);
            startDrawing(e);
        }); //
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseenter', startDrawing)
        document.addEventListener('mouseup', () => {
            setDrawState(false);
            canvas.removeEventListener('mousemove', draw);
            onChange(canvas.toDataURL());

            return () => {
                canvas.removeEventListener('mousedown', startDrawing);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('mouseup', () => {
                    setDrawState(false);
                    onChange(canvas.toDataURL());
                });
              };
            }, [onChange, currentColor, currentBrushSize]);
    });
        

    
  return (
    <canvas style={{border:'solid black 1px'}}ref={canvasRef} width={500} height={500}/>
  )
}

export default DrawingCanvas