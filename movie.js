document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('movie-video');
    const playPauseBtn = document.getElementById('play-pause');
    const rewindBtn = document.getElementById('rewind');
    const forwardBtn = document.getElementById('forward');
    const progressBar = document.getElementById('progress-bar');
    const volumeBtn = document.getElementById('volume');
    const volumeBar = document.getElementById('volume-bar');
    const fullscreenBtn = document.getElementById('fullscreen');

    let isPlaying = false;
    let isMuted = false;

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            video.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            video.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    rewindBtn.addEventListener('click', () => {
        video.currentTime -= 10; // Rewind by 10 seconds
    });

    forwardBtn.addEventListener('click', () => {
        video.currentTime += 10; // Forward by 10 seconds
    });

    video.addEventListener('timeupdate', () => {
        const value = (video.currentTime / video.duration) * 100;
        progressBar.value = value;
    });

    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * video.duration;
        video.currentTime = time;
    });

    volumeBtn.addEventListener('click', () => {
        if (isMuted) {
            video.muted = false;
            volumeBtn.textContent = 'Mute';
            volumeBar.value = video.volume * 100;
        } else {
            video.muted = true;
            volumeBtn.textContent = 'Unmute';
            volumeBar.value = 0;
        }
        isMuted = !isMuted;
    });

    volumeBar.addEventListener('input', () => {
        video.volume = volumeBar.value / 100;
        if (video.volume === 0) {
            video.muted = true;
            volumeBtn.textContent = 'Unmute';
        } else {
            video.muted = false;
            volumeBtn.textContent = 'Mute';
        }
    });

    fullscreenBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { // Safari
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE11
            video.msRequestFullscreen();
        }
    });
});
