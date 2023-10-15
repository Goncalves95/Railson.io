document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video1");
    video.play();
});

function toggleAudio() {
    var audio = document.getElementById('meuAudio');
    if (audio.paused) {
        audio.play();
        audio.style.display = "block";
    } else {
        audio.pause();
        audio.style.display = "none";
    }
}