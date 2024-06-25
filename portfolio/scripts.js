document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('dblclick', function() {
            showSkillDetails(this.querySelector('.card-title').innerText);
        });
    });
});

function showSkillDetails(skill) {
    alert('Detailed view of ' + skill);
}

function addAnimation(button) {
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

function playVideo(videoId) {
    const videoUrls = {
        video1: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        // Add more video mappings here
    };

    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = `<iframe width="100%" height="315" src="${videoUrls[videoId]}" frameborder="0" allowfullscreen></iframe>`;
    const videoPlayerModal = new bootstrap.Modal(document.getElementById('videoPlayerModal'));
    videoPlayerModal.show();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation and submission logic
    alert('Form submitted!');
});
