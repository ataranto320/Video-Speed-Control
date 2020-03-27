const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
    // console.log(playbackRate);
    // console.log(height);
    // console.log(percent);
    // console.log(y);
    // console.log(e);

    // or 

    // function handleMove(e) {
    //     const y = e.pageY - this.offsetTop;
    // const percent = y / this.offsetHeight;
    // const min = 0.4;
    // const max = 4;
    // const height = Math.round(percent * 100) + "%";
    // const playbackRate = percent * (max - min) + min;
    // bar.style.height = height;
    // bar.textContent = playbackRate.toFixed(2) + "x";
    // video.playbackRate = playbackRate;
    // }

    // speed.addEventListener("mousemove", handleMove);
});