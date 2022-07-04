var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

var rover_width = 100;
var rover_height = 90;

rover_x = 10
rover_y = 10

rover_image = "rover.png";


mars_images = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"]
random_number = Math.floor(Math.random()*4)
background_image = mars_images[random_number];

function add(){
    background_imgTag = new Image()
    background_imgTag.onload = uploadBackground()
    background_imgTag.src = background_image
    console.log("working")

    rover_imgTag = new Image()
    rover_imgTag.onload = uploadrover()
    rover_imgTag.src = rover_image
    console.log("rover")
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    console.log("background")
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    console.log("uploadrover")
}

canvas.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypressed = e.keyCode
    console.log(keypressed);

    if(keypressed == "38")
    {
        up()
        console.log("up")
    }
    if(keypressed == "40")
    {
        down()
        console.log("down")
    }
    if(keypressed == "37")
    {
        left()
        console.log("left")
    }
    if(keypressed == "39")
    {
        right()
        console.log("right")
    }
}

function up()
{
    if(rover_y>=0){
        rover_y = rover_y - 10
        console.log("when up arrow is pressed x =" + rover_x + "y =" + rover_y)
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y<=500){
        rover_y = rover_y + 10
        console.log("when down arrow is pressed x =" + rover_x + "y =" + rover_y)
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x>=0){
        rover_x = rover_x - 10
        console.log("when left arrow is pressed x =" + rover_x + "y =" + rover_y)
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x<=700){
        rover_x = rover_x + 10
        console.log("when right arrow is pressed x =" + rover_x + "y =" + rover_y)
        uploadBackground();
        uploadrover();
    }
}
