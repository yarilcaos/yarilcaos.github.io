var intervalID = window.setInterval(secreto, 1000);

let timer = 0;
function secreto() {

    timer++;
    if (timer == 7) {
        let x = Math.random() * screen.width;
        let y = Math.random() * screen.height;
        x -= 100;
        y -= 200;

        if (x <= 0) x = 0;
        if (y <= 0) y = 0;
        $("#secreto").show();
        $("#secreto").css("top", y + "px");
        $("#secreto").css("left", x + "px");
        console.log("secreto function");
    }
    if (timer > 8) {
        $("#secreto").hide();
        timer = 0;
    }
}


function sonar(id) {
    var audio = new Audio('assets/sonidos/' + id + '.wav');
    audio.play();
}
function botonout(id, src) {
    $("#" + id + " img").attr("src", src);
}
function botonhover(id, src) {
    $("#" + id + " img").attr("src", src);

    switch (id) {
        case "btn1_1":
            sonar("08");
            break;
        case "btn1_2":
            sonar("11");
            break;
        case "btn1_3":
            sonar("10");
            break;
        default:
            sonar("12");
            break;
    }

}
function botondown(id, src) {
    $("#" + id + " img").attr("src", src);


    switch (id) {
        case "l1":
                window.open("http://www.blackhatorg.com", "_blank"); 
            break;
        case "btn1_2":
            sonar("04");
            $("#screen1").slideUp(800);
            $("#screen2").slideDown(800);
            break;
        case "btn5_1":
            sonar("04");
            $("#btn5_2").slideToggle(400);

            break;
        case "btn5_2":
            sonar("04");
            $("#screen_eclipse").slideDown(800);
            $("#screen5").slideUp(800);
            break;
        case "btn5_3":
            sonar("04");
            $("#screen_bitacora").slideDown(800);
            $("#screen5").slideUp(800);
            break;
        case "regre_bitacora":
            sonar("04");
            $("#screen5").slideDown(800);
            $("#screen_bitacora").slideUp(800);
            break;
        case "regre_eclipse":
            sonar("04");
            $("#screen5").slideDown(800);
            $("#screen_eclipse").slideUp(800);
            break;
        case "btn1_1":
            sonar("04");
            $("#screen1").slideUp(800);
            $("#screen5").slideDown(800);
            break;
        case "regre_reporte":
            sonar("04");
            $("#screen5").slideUp(800);
            $("#screen1").slideDown(800);
            break;
        case "regre_1":
            sonar("04");
            $("#screen1").slideDown(800);
            $("#screen2").slideUp(800);
            break;
        case "btn2_1":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_limon").slideDown(800);
            break;



        case "regre_2":
            sonar("04");
            $("#contenido1").slideUp(800);
            $("#contenido2").slideUp(800);
            $("#screen2").slideDown(800);
            $("#screen_limon").slideUp(800);
            break;
        case "regre_3":
            sonar("04");
            $("#screen2").slideDown(800);
            $("#screen_docs").slideUp(800);
            break;
        case "btn2_2":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_impostor").slideDown(800);
            break;


        case "regre_4":
            sonar("04");
            $("#screen2").slideDown(800);
            $("#screen_impostor").slideUp(800);
            $("#contenido3").slideUp(800);
            break;
        case "btn2_4":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_docs").slideDown(800);
            break;


        case "btn2_3":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_bots").slideDown(800);
            break;

        case "btn2_7":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_chimera").slideDown(800);
            break;
        case "btn2_8":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_8").slideDown(800);
            break;
        case "btn2_9":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_9").slideDown(800);
            break;

        case "btn2_10":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_10").slideDown(800);
            break;
        case "btn2_11":
            sonar("10");
            $("#screen2").slideUp(800);
            $("#screen_11").slideDown(800);
            break;
        case "regre_11":
            sonar("10");
            $("#screen_11").slideUp(800);
            $("#screen2").slideDown(800);
            break;

        case "regre_10":
            sonar("04");
            $("#screen_10").slideUp(800);
            $("#screen2").slideDown(800);
            break;
        case "regre_7":
            sonar("04");
            $("#screen2").slideDown(800);
            $("#screen_chimera").slideUp(800);
            break;
        case "regre_8":
            sonar("04");
            $("#screen2").slideDown(800);
            $("#screen_8").slideUp(800);
            break;
        case "regre_9":
            sonar("04");
            $("#screen2").slideDown(800);
            $("#screen_9").slideUp(800);
            break;


        case "regre_5":
            sonar("04");
            $("#screen2").slideDown(800);
            $("#screen_bots").slideUp(800);
            break;
        case "btn10_1":
            $("#contenido10_1").slideDown(800); $("#contenido10_2").slideUp(800); break;
        case "btn10_2":
            $("#contenido10_1").slideUp(800); $("#contenido10_2").slideDown(800);
            // $("#videoCOM").play();
            $('#videoCOM').get(0).play()
            break;
        case "btn3_1": $("#contenido1").slideDown(800); $("#contenido2").slideUp(800); break;
        case "btn3_2": $("#contenido2").slideDown(800); $("#contenido1").slideUp(800); break;
        case "btn4_1": $("#contenido30").slideDown(800); break;


        default:
            sonar("08");
            break;
    }

}
var wavesurfer00;
var wavesurfer01;
var wavesurfer02;
var wavesurfer03;
var wavesurfer04;
var wavesurfer05;
var wavesurfer06;
var wavesurfer07;
function waveCreator00() {
    if (wavesurfer00.isPlaying()) {
        wavesurfer00.empty();
    } else {
        wavesurfer00.on('ready', function () {
            wavesurfer00.play();
        });
        wavesurfer00.load('assets/folder9/00.mp3');
    }
}
function waveCreator01() {
    if (wavesurfer01.isPlaying()) {
        wavesurfer01.empty();
    } else {
        wavesurfer01.on('ready', function () { wavesurfer01.play(); });
        wavesurfer01.load('assets/folder9/01.mp3');
    }
}

function waveCreator02() {
    if (wavesurfer02.isPlaying()) {
        wavesurfer02.empty();
    } else {
        wavesurfer02.on('ready', function () { wavesurfer02.play(); });
        wavesurfer02.load('assets/folder9/02.mp3');
    }
}
function waveCreator03() {
    if (wavesurfer03.isPlaying()) {
        wavesurfer03.empty();
    } else {
        wavesurfer03.on('ready', function () { wavesurfer03.play(); });
        wavesurfer03.load('assets/folder9/03.mp3');
    }
}
function waveCreator04() {
    if (wavesurfer04.isPlaying()) {
        wavesurfer04.empty();
    } else {
        wavesurfer04.on('ready', function () { wavesurfer04.play(); });
        wavesurfer04.load('assets/folder9/04.mp3');
    }
}
function waveCreator05() {
    if (wavesurfer05.isPlaying()) {
        wavesurfer05.empty();
    } else {
        wavesurfer05.on('ready', function () { wavesurfer05.play(); });
        wavesurfer05.load('assets/folder9/05.mp3');
    }
}
function waveCreator06() {
    if (wavesurfer06.isPlaying()) {
        wavesurfer06.empty();
    } else {
        wavesurfer06.on('ready', function () { wavesurfer06.play(); });
        wavesurfer06.load('assets/folder9/06.mp3');
    }
}


function showthis(id) {
    $("#" + id).show();
    console.log(id);
}

function hidethis(id) {
    $("#" + id).hide();
    console.log(id);
}

$(document).ready(function () {
    wavesurfer00 = WaveSurfer.create({
        container: '#wavesurfer00',
        barWidth: 2,
        barHeight: 3
    });
    wavesurfer01 = WaveSurfer.create({ container: '#wavesurfer01', barWidth: 2, barHeight: 3 });
    wavesurfer02 = WaveSurfer.create({ container: '#wavesurfer02', barWidth: 2, barHeight: 3 });
    wavesurfer03 = WaveSurfer.create({ container: '#wavesurfer03', barWidth: 2, barHeight: 3 });
    wavesurfer04 = WaveSurfer.create({ container: '#wavesurfer04', barWidth: 2, barHeight: 3 });
    wavesurfer05 = WaveSurfer.create({ container: '#wavesurfer05', barWidth: 2, barHeight: 3 });
    wavesurfer06 = WaveSurfer.create({ container: '#wavesurfer06', barWidth: 2, barHeight: 3 });

});