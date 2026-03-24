let video = document.getElementById("myVideo");

video.addEventListener("mouseover", function() {
    video.play();
});

video.addEventListener("mouseout", function() {
    video.pause();
});