document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');

    // Resize canvas to the exact size of the window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Base settings
    ctx.strokeStyle = '#FFA500';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 90; 

    //next up we will play with the globalcomposite operator
    //if you've worked on photoshop blend modes you can use blend modes inside the contexts
    //you can play with different blend modes

    // ctx.globalCompositeOperation = 'multiply';


    // Dummy variables
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
        if (!isDrawing) return; // Stop the function from running when not drawing
        console.log(e);
        ctx.strokeStyle = `hsl(${hue},100%, 50% )`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        hue++;
        if(hue>=360){
            hue = 0;
        }
        if(ctx.lineWidth >= 100 || ctx.lineWidth <=1) {
                direction = !direction // this code of line is used to flip the direction 
        }
        if(direction){
            ctx.lineWidth++;
        }
        else{
            ctx.lineWidth--;
        }
       
    }



    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
});
