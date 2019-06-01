var intervalID = window.setInterval(secreto, 1000);

let timer=0;


function secreto(){
    
    timer++;
    if (timer==7) {
       let x= Math.random()*screen.width;
       let y= Math.random()*screen.height;
       x-=100;
       y-=200;

       if(x<=0) x=0;
       if(y<=0) y=0;
        $("#secreto").show();
        $("#secreto").css("top",y+"px" );
        $("#secreto").css("left", x+"px");
        console.log("secreto function");
    }
    if (timer>8) {
        $("#secreto").hide();
        timer=0;
    }
}
