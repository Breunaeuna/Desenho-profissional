var mouseEvent = "empty";
var lastPositionX, lastPositionY;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthLine = 1;
    canvas.addEventListener("mousedown", myMouseDown); //evento = "mousedown" e função = myMouseDown
    function myMouseDown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        PositionMouseX = e.clientX - canvas.offsetLeft;
        PositionMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
        }

        lastPositionX = PositionMouseX; 
        lastPositionY = PositionMouseY;
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUp";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseLeave";
    }

    function myTouchMove(e) 
    {

        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();

        lastPositionOfTouchX = currentPositionOfTouchX;
        lastPositionOfTouchY = currentPositionOfTouchY;
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;
            ctx.moveTo(lastPositionOfX, lastPositionOfY);
            ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
            ctx.stroke();    
        }

        lastPositionOfX = currentPositionOfMouseX;
        lastPositionOfY = currentPositionOfMouseY;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}