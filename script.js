// Create audio element for background music
const audio = new Audio('https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.8/download.min.js');
audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAASAAAZtgA9PT09PT09PT09PX19fX19fX19fX2dnZ2dnZ2dnZ2dv7+/v7+/v7+/v+vr6+vr6+vr6+v7+/v7+/v7+/v7//////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJARFAAAAAAAAGbZb5bOCAAAAAAD/+9DEAAAH0AFNIAAAACBGSW0gABBIzWbISGLIyMjZmTTZkzZkxCEIQhCEIQhCMjIzZkxCEJoTLMQhJoQhCEIQhMiZkzJiEGRkZGbTBCE0JiESaEIQmRMyZkTQmZMiZEyGRkZtMiYhCEIQmRiEIQhCEITJiZMmIQhCDJpmTJppmYhCEIFYFQUACAvggQFK6gUXF24wKAIBgIUZBQDgUA4AgEKnhMGMDgFA6DYBAOUyJMAUt4rA4Ef/s3x4CBxREwBjB/9/+zf/sgqBcGo9HAZDIPgZEJOioWRr//sMZMRiFsYb///7N///9m4NCEPg2Pj4xTuA4bBHGhKHRSYmOmogSX/gyIY0JRgYnyf//5EYFIaEQwMVNU9qaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UMTyg8rYBTaAAAQisAmhwAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==';

// Play and Pause button functionality
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

playBtn.addEventListener('click', () => {
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});

// Create confetti particles
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff4081', '#3f51b5', '#ffeb3b', '#4caf50', '#9c27b0'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Randomize confetti appearance
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        // Create different shapes
        const shapeType = Math.floor(Math.random() * 3);
        if (shapeType === 0) {
            // Circle
            confetti.style.borderRadius = '50%';
        } else if (shapeType === 1) {
            // Rectangle
            confetti.style.width = '8px';
            confetti.style.height = '12px';
        } else {
            // Triangle (using border trick)
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = '10px solid ' + colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = 'transparent';
        }
        
        confettiContainer.appendChild(confetti);
    }
}

// Create a blinking effect to the Happy Birthday text
function blinkText() {
    const title = document.querySelector('.title');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 5) % 360;
        title.style.color = `hsl(${hue}, 100%, 65%)`;
    }, 150);
}

// Make the cake animated
function animateCake() {
    const cake = document.querySelector('.cake');
    
    cake.addEventListener('mouseenter', () => {
        cake.style.transform = 'scale(1.1)';
        cake.style.transition = 'transform 0.3s ease';
    });
    
    cake.addEventListener('mouseleave', () => {
        cake.style.transform = 'scale(1)';
    });
}

// Initialize all animations when the page loads
window.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    blinkText();
    animateCake();
    
    // Auto-trigger some confetti effect on page load
    setTimeout(() => {
        const extraConfetti = document.createElement('div');
        extraConfetti.style.position = 'fixed';
        extraConfetti.style.top = '0';
        extraConfetti.style.left = '0';
        extraConfetti.style.width = '100%';
        extraConfetti.style.height = '100%';
        extraConfetti.style.pointerEvents = 'none';
        document.body.appendChild(extraConfetti);
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.backgroundColor = ['#ff4081', '#3f51b5', '#ffeb3b', '#4caf50', '#9c27b0'][Math.floor(Math.random() * 5)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = '0s';
                extraConfetti.appendChild(confetti);
                
                // Remove confetti after animation completes
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 100);
        }
    }, 1000);
});