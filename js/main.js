//唉...............
let background = new Audio("../background_music.mp3");
background.loop = true;
background.play();
setTimeout(() => {
    window.location.assign('../construct/');
}, 1000);