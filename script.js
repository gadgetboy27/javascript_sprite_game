const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'images/cubeman/body/_full.png';
// const canvasWidth = 600;
// const canvasHeight = 600;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, -200, 20, 1400, 1200, 10, 50, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
};
animate();
