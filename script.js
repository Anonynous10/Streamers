function playVideo(videoId) {
    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");

    // Update the source of the video based on the clicked movie
    if (videoId === 'video1') {
        videoSource.src = 'video1.mp4';
    } else if (videoId === 'video2') {
        videoSource.src = 'video2.mp4';
    } else if (videoId === 'video3') {
        videoSource.src = 'video3.mp4';
    }

    // Load and play the new video
    videoPlayer.load();
    videoPlayer.play();
}
