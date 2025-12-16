// Timeline Events - loaded from external JSON file
let timeline = [];
let timelineLoaded = false;

// Load timeline data
async function loadTimelineData() {
    try {
        const cacheBust = new URLSearchParams(window.location.search).get('v') || Date.now();
        const response = await fetch(`timeline-data.json?v=${cacheBust}`);
        timeline = await response.json();
        timelineLoaded = true;
        initializeTimeline();
    } catch (error) {
        console.error('Failed to load timeline data:', error);
    }
}

let currentIndex = 0;
let allCards = [];
const container = document.getElementById('events-container');
const progressFill = document.getElementById('progress-fill');

// Create all cards
function createAllCards() {
    timeline.forEach((item) => {
        if (item.type === 'fire-break') {
            const fireBreak = document.createElement('div');
            fireBreak.className = 'event-card fire-break';
            fireBreak.innerHTML = `
                <div class="event-icon"><i class="ti ti-matchstick"></i></div>
            `;
            container.appendChild(fireBreak);
            allCards.push(fireBreak);
        } else {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <div class="event-title">${item.name}</div>
                <div class="event-icon"><i class="${item.icon}"></i></div>
                <div class="event-description">${item.description}</div>
            `;
            container.appendChild(card);
            allCards.push(card);
        }
    });
}

// Show card at center
function showCard(index) {
    if (index < 0 || index >= allCards.length) return;
    
    const card = allCards[index];
    card.classList.add('at-center');
    card.style.transform = 'translateX(0)';
    
    updateProgress();
}

// Hide card (slide off left)
function hideCardLeft(index) {
    if (index < 0 || index >= allCards.length) return;
    
    const card = allCards[index];
    card.classList.remove('at-center');
    card.classList.add('off-left');
    card.style.transform = 'translateX(-100vw)';
}

// Hide card (slide off right)
function hideCardRight(index) {
    if (index < 0 || index >= allCards.length) return;
    
    const card = allCards[index];
    card.classList.remove('at-center', 'off-left');
    card.style.transform = 'translateX(100vw)';
}

// Update progress bar
function updateProgress() {
    const progress = (currentIndex / (allCards.length - 1)) * 100;
    progressFill.style.width = progress + '%';
}

// Navigate forward (always advances, but direction can be specified)
// direction: 'right', 'left', 'top', 'bottom'
function nextEvent(direction = 'right') {
    const prevIndex = currentIndex;
    
    // Advance index
    currentIndex++;
    if (currentIndex >= allCards.length) {
        currentIndex = 0;
    }
    
    const nextCard = allCards[currentIndex];
    const prevCard = allCards[prevIndex];
    nextCard.classList.remove('at-center', 'off-left');
    nextCard.style.transition = 'none';
    
    // Position next card based on direction
    switch(direction) {
        case 'left':
            nextCard.style.transform = 'translateX(-100vw)';
            void nextCard.offsetWidth;
            nextCard.style.transition = '';
            prevCard.style.transform = 'translateX(100vw)'; // Previous goes right
            break;
        case 'top':
            nextCard.style.transform = 'translateY(-100vh)';
            void nextCard.offsetWidth;
            nextCard.style.transition = '';
            prevCard.style.transform = 'translateY(100vh)'; // Previous goes down
            break;
        case 'bottom':
            nextCard.style.transform = 'translateY(100vh)';
            void nextCard.offsetWidth;
            nextCard.style.transition = '';
            prevCard.style.transform = 'translateY(-100vh)'; // Previous goes up
            break;
        default: // 'right'
            nextCard.style.transform = 'translateX(100vw)';
            void nextCard.offsetWidth;
            nextCard.style.transition = '';
            prevCard.style.transform = 'translateX(-100vw)'; // Previous goes left
            break;
    }
    
    // Show next card (slides to center)
    showCard(currentIndex);
}

// Navigate backward (with random direction)
function previousEvent() {
    const prevIndex = currentIndex;
    
    // Decrease index
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allCards.length - 1;
    }
    
    const prevCard = allCards[currentIndex];
    const currentCard = allCards[prevIndex];
    prevCard.classList.remove('at-center', 'off-left');
    prevCard.style.transition = 'none';
    
    // Random direction for backward navigation
    const directions = ['right', 'left', 'top', 'bottom'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    switch(randomDirection) {
        case 'left':
            prevCard.style.transform = 'translateX(-100vw)';
            void prevCard.offsetWidth;
            prevCard.style.transition = '';
            currentCard.style.transform = 'translateX(100vw)';
            break;
        case 'top':
            prevCard.style.transform = 'translateY(-100vh)';
            void prevCard.offsetWidth;
            prevCard.style.transition = '';
            currentCard.style.transform = 'translateY(100vh)';
            break;
        case 'bottom':
            prevCard.style.transform = 'translateY(100vh)';
            void prevCard.offsetWidth;
            prevCard.style.transition = '';
            currentCard.style.transform = 'translateY(-100vh)';
            break;
        default: // 'right'
            prevCard.style.transform = 'translateX(100vw)';
            void prevCard.offsetWidth;
            prevCard.style.transition = '';
            currentCard.style.transform = 'translateX(-100vw)';
            break;
    }
    
    showCard(currentIndex);
}

// Jump to specific index with random direction
function jumpToIndex(targetIndex) {
    if (targetIndex < 0 || targetIndex >= allCards.length) return;
    if (targetIndex === currentIndex) return;
    
    const prevIndex = currentIndex;
    currentIndex = targetIndex;
    
    const targetCard = allCards[targetIndex];
    const prevCard = allCards[prevIndex];
    targetCard.classList.remove('at-center', 'off-left');
    targetCard.style.transition = 'none';
    
    // Random direction
    const directions = ['right', 'left', 'top', 'bottom'];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    
    switch(dir) {
        case 'left':
            targetCard.style.transform = 'translateX(-100vw)';
            void targetCard.offsetWidth;
            targetCard.style.transition = '';
            prevCard.style.transform = 'translateX(100vw)';
            break;
        case 'top':
            targetCard.style.transform = 'translateY(-100vh)';
            void targetCard.offsetWidth;
            targetCard.style.transition = '';
            prevCard.style.transform = 'translateY(100vh)';
            break;
        case 'bottom':
            targetCard.style.transform = 'translateY(100vh)';
            void targetCard.offsetWidth;
            targetCard.style.transition = '';
            prevCard.style.transform = 'translateY(-100vh)';
            break;
        default:
            targetCard.style.transform = 'translateX(100vw)';
            void targetCard.offsetWidth;
            targetCard.style.transition = '';
            prevCard.style.transform = 'translateX(-100vw)';
    }
    
    showCard(targetIndex);
}

// Jump to start (with optional random direction)
function jumpToStart(randomDirection = false) {
    if (randomDirection) {
        jumpToIndex(0);
    } else {
        const prevIndex = currentIndex;
        currentIndex = 0;
        
        const firstCard = allCards[0];
        firstCard.classList.remove('at-center', 'off-left');
        firstCard.style.transition = 'none';
        firstCard.style.transform = 'translateX(100vw)';
        
        void firstCard.offsetWidth;
        firstCard.style.transition = '';
        
        if (prevIndex !== 0) {
            allCards[prevIndex].style.transform = 'translateX(-100vw)';
        }
        
        showCard(0);
    }
}

// Jump to end
function jumpToEnd() {
    hideCardLeft(currentIndex);
    currentIndex = allCards.length - 1;
    
    const lastCard = allCards[currentIndex];
    lastCard.classList.remove('at-center', 'off-left');
    lastCard.style.transition = 'none';
    lastCard.style.transform = 'translateX(-100vw)';
    
    void lastCard.offsetWidth;
    
    lastCard.style.transition = '';
    showCard(currentIndex);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
        case 'Spacebar':
        case 'Enter':
            e.preventDefault();
            // Always advance forward, but random slide direction (4 possibilities)
            const directions = ['right', 'left', 'top', 'bottom'];
            const randomDirection = directions[Math.floor(Math.random() * directions.length)];
            nextEvent(randomDirection);
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextEvent('right'); // Next card, slide from right
            break;
        case 'ArrowLeft':
            e.preventDefault();
            nextEvent('left'); // Next card, slide from left
            break;
        case 'ArrowUp':
            e.preventDefault();
            nextEvent('top'); // Next card, slide from top
            break;
        case 'ArrowDown':
            e.preventDefault();
            nextEvent('bottom'); // Next card, slide from bottom
            break;
        case 'Backspace':
            e.preventDefault();
            previousEvent(); // Previous card, random direction
            break;
        case 'Home':
            e.preventDefault();
            jumpToStart();
            break;
        case 'End':
            e.preventDefault();
            jumpToEnd();
            break;
        case 'Escape':
        case '-':
        case '_':
            e.preventDefault();
            jumpToStart(true); // Reset with random direction
            break;
    }
});

// Mouse wheel navigation
document.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        // Forward - random direction
        const directions = ['right', 'left', 'top', 'bottom'];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        nextEvent(randomDirection);
    } else {
        // Backward - random direction
        previousEvent();
    }
}, { passive: false });


// Check for index query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Touch swipe handling
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const minSwipeDistance = 50;
    
    // Determine if horizontal or vertical swipe
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                // Swiped right - next card slides from left
                nextEvent('left');
            } else {
                // Swiped left - next card slides from right
                nextEvent('right');
            }
        }
    } else {
        // Vertical swipe
        if (Math.abs(deltaY) > minSwipeDistance) {
            if (deltaY > 0) {
                // Swiped down - next card slides from top
                nextEvent('top');
            } else {
                // Swiped up - next card slides from bottom
                nextEvent('bottom');
            }
        }
    }
}

// Back button functionality
document.getElementById('back-btn').addEventListener('click', () => {
    previousEvent(); // Previous card, random direction
});

// Reset button functionality
document.getElementById('reset-btn').addEventListener('click', () => {
    jumpToStart(true); // Random direction
});

// Tap anywhere to advance (except buttons and progress bar)
document.body.addEventListener('click', (e) => {
    // Exclude buttons and progress bar
    if (e.target.closest('.back-button, .reset-button, .progress-bar')) {
        return;
    }
    
    // Advance with random animation
    const directions = ['right', 'left', 'top', 'bottom'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    nextEvent(randomDirection);
});

// Safari zoom prevention - double-tap
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Safari zoom prevention - pinch gesture
document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
});

// Progress bar scrubber
const progressBar = document.querySelector('.progress-bar');

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetIndex = Math.round(percentage * (allCards.length - 1));
    jumpToIndex(targetIndex);
});

progressBar.addEventListener('touchend', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const touch = e.changedTouches[0];
    const clickX = touch.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetIndex = Math.round(percentage * (allCards.length - 1));
    jumpToIndex(targetIndex);
});

// Initialize timeline after data loads
function initializeTimeline() {
    createAllCards();

    // Check if there's an index query parameter
    const startIndex = getQueryParam('index');
    if (startIndex !== null) {
        const index = parseInt(startIndex);
        if (!isNaN(index) && index >= 0 && index < allCards.length) {
            currentIndex = index;
            showCard(index);
        } else {
            showCard(0);
        }
    } else {
        showCard(0);
    }
}

// Load timeline data on page load
loadTimelineData();

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {
        // Silent fail - service worker is optional
    });
}
