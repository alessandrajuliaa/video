let video = document.querySelector('#video1');
console.log(video);

function voltar(){
    video.currentTime -= 15;
}
function avancar(){
    video.currentTime += 15;
}
function diminuirVel(){
    video.playbackRate -= 0.1;
}
function aumentarVel(){
    video.playbackRate += 0.1;
}
function play(){
    video.play();
}
function stop(){
    video.pause();
    video.currentTime = 0;
}