const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();

//draw a circle
//ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
ctx.arc(95, 50, 40, 0, 2 * Math.PI);

//fill the circle with yellow
ctx.fillStyle = "yellow";
ctx.fill();

//stroke the circle with lightblue
ctx.lineWidth = 2;
ctx.strokeStyle = "lightblue";
ctx.stroke();
ctx.closePath();

//draw eyes
//ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
ctx.beginPath();
ctx.arc(80, 40, 5, 0, 2 * Math.PI);
//fill the circle with black
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
//draw the other eye
ctx.beginPath();
ctx.arc(110, 40, 5, 0, 2 * Math.PI);
//fill the circle with black
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
//draw the mouth
ctx.beginPath();
ctx.arc(95, 50, 20, 0, Math.PI);
//stroke the mouth with black
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();    
