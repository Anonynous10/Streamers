// Video data
const videos = [
    { title: "Video Title 1", src: "video1.mp4" },
    { title: "Video Title 2", src: "video2.mp4" },
    { title: "Video Title 3", src: "video3.mp4" }
];

// Function to render video cards
function renderVideos() {
    const container = document.getElementById("video-container");

    videos.forEach(video => {
        const card = document.createElement("div");
        card.classList.add("video-card");

        card.innerHTML = `
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h3>${video.title}</h3>
        `;

        container.appendChild(card);
    });
}

// Initialize the page
renderVideos();
