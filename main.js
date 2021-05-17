function setup()
{
    canvas = createCanvas(648,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    circle(30, 30, 20);
}