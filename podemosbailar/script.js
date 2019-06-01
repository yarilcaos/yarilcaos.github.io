let password="";
let error="469831";
function activado(valor){
  if(!password.includes(valor)){
    $("#"+valor).css("background-image","none");
      let src= $("#"+valor+" img").attr("src");
      src=src.replace("1","2")
      $("#"+valor+" img").attr("src",src);
        password+=valor;
        if(password.length>=6){
            if(password==error){
                exito();
            
            }else{
            }

            for (let i = 1; i <= 9; i++) {
                password="";
                $("#"+i).css("background-image",'url("assets/iconos/btn.png")');
                let oldsrc= $("#"+i+" img").attr("src");
                oldsrc=oldsrc.replace("2","1")
                console.log(oldsrc);
                $("#"+i+" img").attr("src",oldsrc);
            }

        }
    }
    sonar(12);
}
function test(){
    
}

function sonar(id){
    console.log("sonar");
    var audio = new Audio('assets/sonidos/12.wav');
    audio.play();
}


function exito(){
    $("#main").slideUp();
    $("#adornos").slideUp();
    $("#exito").slideDown();
    window.location.href="terminal.html";
    //var audio = document.getElementById("audio");
    //audio.play();
}

var tid = setInterval(contadores, 1000);
var startingnumber= Math.floor(Math.random()*99999);
function contadores(){
    $("#contador_1").html("CODE:"+Math.random().toString().slice(2,6)+"-"+Math.random().toString().slice(2,3)+"-"+Math.random().toString().slice(2,6)+"-"+Math.random().toString().slice(2,8));
    $("#contador_2").html(padToTEN(startingnumber));
    startingnumber++;    
    
}

function padToTEN(number) {
    if (number<=9999999999) { number = ("0000000000"+number).slice(-10); }
    return number;
  }