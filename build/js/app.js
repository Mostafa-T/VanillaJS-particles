var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var h = window.innerHeight;
var w = window.innerWidth;
canvas.height = h;
canvas.width = w;

var maxSnow = 500;
var snow = [];

for(var i=0;i<maxSnow;i++)
    {
         snow.push({
             x:Math.random()*w,
             y:Math.random()*h,
             r:Math.random()*4+2,
             d:Math.random()+1
         })
        
    }

function drawSnow()
{
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(var i=0;i<maxSnow ; i++)
        {
            var s = snow[i];
            ctx.moveTo(s.x , s.y);
            ctx.arc(s.x,s.y,s.r,0,Math.PI*2,true)
        }
    ctx.fill();
    moveSnow();
}

var angle =0;

function moveSnow()
{
    angle += 0.01;
    for(var i=0;i<maxSnow;i++)
        {
            var s = snow[i];
            
            s.y += Math.pow(s.d,2)+1;
            s.x +=Math.sin(angle)*2;
            
    if(s.y>h)
        {
   snow[i]  ={x:Math.random()*w,y:0,r:s.r,d:s.d}       
        }
            
        }
}

setInterval(drawSnow , 25);