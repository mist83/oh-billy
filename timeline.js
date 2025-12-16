// Timeline Events - "We Didn't Start the Fire" by Billy Joel
// All events with fire breaks at chorus points

const timeline = [
    // Verse 1
    { name: "Harry Truman", icon: "ti ti-atom-2", description: "33rd President of the United States, 1945-1953" },
    { name: "Doris Day", icon: "ti ti-microphone-2", description: "American actress and singer, Hollywood star of the 1950s" },
    { name: "Red China", icon: "ti ti-yin-yang-filled", description: "Communist Party took control in 1949" },
    { name: "Johnnie Ray", icon: "ti ti-microphone", description: "American singer known for 'Cry' in the early 1950s" },
    { name: "South Pacific", icon: "ti ti-theater", description: "Rodgers and Hammerstein musical, 1949" },
    { name: "Walter Winchell", icon: "ti ti-news", description: "Influential newspaper and radio commentator" },
    { name: "Joe DiMaggio", icon: "ti ti-ball-baseball", description: "Yankees center fielder, 56-game hitting streak" },
    { name: "Joe McCarthy", icon: "ti ti-gavel", description: "Senator who led anti-communist investigations" },
    { name: "Richard Nixon", icon: "ti ti-zoom-question", description: "Vice President under Eisenhower" },
    { name: "Studebaker", icon: "ti ti-car", description: "American automobile manufacturer" },
    { name: "Television", icon: "ti ti-device-tv", description: "Mass adoption in American homes, 1950s" },
    { name: "North Korea, South Korea", icon: "ti ti-flag", description: "Korean War, 1950-1953" },
    { name: "Marilyn Monroe", icon: "ti ti-star", description: "Iconic actress and model of the 1950s" },
    
    // Verse 2
    { name: "Rosenbergs", icon: "ti ti-lock", description: "Executed for espionage in 1953" },
    { name: "H-Bomb", icon: "ti ti-bomb", description: "Hydrogen bomb tested by U.S. in 1952" },
    { name: "Sugar Ray", icon: "ti ti-trophy", description: "Sugar Ray Robinson, legendary boxer" },
    { name: "Panmunjom", icon: "ti ti-writing-sign", description: "Korean Armistice Agreement signed, 1953" },
    { name: "Brando", icon: "ti ti-mask", description: "Marlon Brando revolutionized acting" },
    { name: "The King and I", icon: "ti ti-crown", description: "Rodgers and Hammerstein musical, 1951" },
    { name: "The Catcher in the Rye", icon: "ti ti-book-2", description: "J.D. Salinger novel, 1951" },
    { name: "Eisenhower", icon: "ti ti-military-rank", description: "34th President, 1953-1961" },
    { name: "Vaccine", icon: "ti ti-pill", description: "Jonas Salk's polio vaccine, 1955" },
    { name: "England's Got a New Queen", icon: "ti ti-crown", description: "Queen Elizabeth II, 1952" },
    { name: "Marciano", icon: "ti ti-trophy", description: "Rocky Marciano, undefeated heavyweight champion" },
    { name: "Liberace", icon: "ti ti-piano", description: "Flamboyant pianist and entertainer" },
    { name: "Santayana Goodbye", icon: "ti ti-grave-2", description: "Philosopher George Santayana died, 1952" },
    
    { type: "fire-break" },
    
    // Verse 3
    { name: "Joseph Stalin", icon: "ti ti-user-x", description: "Soviet dictator died in 1953" },
    { name: "Malenkov", icon: "ti ti-building-fortress", description: "Succeeded Stalin briefly as Soviet Premier" },
    { name: "Nasser", icon: "ti ti-droplet", description: "Egyptian leader, nationalized Suez Canal" },
    { name: "Prokofiev", icon: "ti ti-music", description: "Russian composer died in 1953" },
    { name: "Rockefeller", icon: "ti ti-building-bank", description: "Nelson Rockefeller, Governor of New York" },
    { name: "Campanella", icon: "ti ti-ball-baseball", description: "Roy Campanella, Brooklyn Dodgers catcher" },
    { name: "Communist Bloc", icon: "ti ti-shield-lock", description: "Soviet-aligned Eastern European nations" },
    { name: "Roy Cohn", icon: "ti ti-gavel", description: "McCarthy's chief counsel" },
    { name: "Juan Peron", icon: "ti ti-users", description: "Argentine president" },
    { name: "Toscanini", icon: "ti ti-music", description: "Arturo Toscanini, renowned conductor" },
    { name: "Dacron", icon: "ti ti-shirt", description: "Synthetic fiber introduced in 1950s" },
    { name: "Dien Bien Phu Falls", icon: "ti ti-parachute", description: "French defeat in Vietnam, 1954" },
    { name: "Rock Around the Clock", icon: "ti ti-guitar-pick", description: "Bill Haley hit, birth of rock and roll" },
    { name: "Einstein", icon: "ti ti-atom", description: "Albert Einstein died in 1955" },
    { name: "James Dean", icon: "ti ti-car-crash", description: "Actor died in car crash, 1955" },
    { name: "Brooklyn's Got a Winning Team", icon: "ti ti-trophy", description: "Dodgers won World Series, 1955" },
    { name: "Davy Crockett", icon: "ti ti-star", description: "Disney TV series phenomenon" },
    { name: "Peter Pan", icon: "ti ti-device-tv", description: "TV musical broadcast, 1955" },
    { name: "Elvis Presley", icon: "ti ti-microphone", description: "King of Rock and Roll emerged" },
    { name: "Disneyland", icon: "ti ti-map-pin", description: "Theme park opened in 1955" },
    { name: "Bardot", icon: "ti ti-heart", description: "Brigitte Bardot, French actress" },
    { name: "Budapest", icon: "ti ti-flame", description: "Hungarian Revolution crushed, 1956" },
    { name: "Alabama", icon: "ti ti-bus", description: "Montgomery Bus Boycott" },
    { name: "Khrushchev", icon: "ti ti-shoe", description: "Soviet Premier" },
    { name: "Princess Grace", icon: "ti ti-crown", description: "Grace Kelly married Prince of Monaco" },
    { name: "Peyton Place", icon: "ti ti-heart-broken", description: "Controversial bestselling novel" },
    { name: "Trouble in the Suez", icon: "ti ti-ship", description: "Suez Crisis, 1956" },
    
    { type: "fire-break" },
    
    // Verse 4
    { name: "Little Rock", icon: "ti ti-school", description: "School desegregation crisis, 1957" },
    { name: "Pasternak", icon: "ti ti-heart", description: "Boris Pasternak, Doctor Zhivago author" },
    { name: "Mickey Mantle", icon: "ti ti-ball-baseball", description: "Yankees baseball legend" },
    { name: "Kerouac", icon: "ti ti-route", description: "Jack Kerouac, On the Road" },
    { name: "Sputnik", icon: "ti ti-rocket", description: "Soviet satellite, 1957" },
    { name: "Zhou En-lai", icon: "ti ti-yin-yang-filled", description: "Chinese Premier" },
    { name: "Bridge On The River Kwai", icon: "ti ti-building-bridge", description: "Oscar-winning film, 1957" },
    { name: "Lebanon", icon: "ti ti-building-mosque", description: "U.S. troops sent to Lebanon, 1958" },
    { name: "Charles de Gaulle", icon: "ti ti-military-rank", description: "President of France" },
    { name: "California Baseball", icon: "ti ti-ball-baseball", description: "Dodgers and Giants moved west" },
    { name: "Starkweather Homicide", icon: "ti ti-skull", description: "Charles Starkweather murder spree" },
    { name: "Children of Thalidomide", icon: "ti ti-pill", description: "Drug caused birth defects" },
    { name: "Buddy Holly", icon: "ti ti-microphone", description: "Rock pioneer died in plane crash, 1959" },
    { name: "Ben-Hur", icon: "ti ti-horse", description: "Epic film won 11 Oscars" },
    { name: "Space Monkey", icon: "ti ti-rocket", description: "Animals sent to space" },
    { name: "Mafia", icon: "ti ti-users", description: "Organized crime investigations" },
    { name: "Hula Hoops", icon: "ti ti-circle-dotted", description: "Toy fad craze" },
    { name: "Castro", icon: "ti ti-smoking", description: "Fidel Castro took power in Cuba" },
    { name: "Edsel is a No-Go", icon: "ti ti-car", description: "Ford's failed automobile" },
    { name: "U-2", icon: "ti ti-plane", description: "Spy plane incident, 1960" },
    { name: "Syngman Rhee", icon: "ti ti-building-community", description: "South Korean president" },
    { name: "Payola", icon: "ti ti-cash", description: "Radio bribery scandal" },
    { name: "Kennedy", icon: "ti ti-flag-3", description: "JFK elected president, 1960" },
    { name: "Chubby Checker", icon: "ti ti-rotate-clockwise-2", description: "The Twist dance craze" },
    { name: "Psycho", icon: "ti ti-blade", description: "Hitchcock thriller" },
    { name: "Belgians in the Congo", icon: "ti ti-diamond", description: "Congo independence crisis" },
    
    { type: "fire-break" },
    
    // Verse 5
    { name: "Hemingway", icon: "ti ti-fish", description: "Ernest Hemingway died, 1961" },
    { name: "Eichmann", icon: "ti ti-gavel", description: "Nazi war criminal trial" },
    { name: "Stranger in a Strange Land", icon: "ti ti-alien", description: "Robert Heinlein sci-fi novel" },
    { name: "Dylan", icon: "ti ti-microphone", description: "Bob Dylan emerged" },
    { name: "Berlin", icon: "ti ti-wall", description: "Berlin Wall built, 1961" },
    { name: "Bay of Pigs Invasion", icon: "ti ti-parachute", description: "Failed Cuba invasion, 1961" },
    { name: "Lawrence of Arabia", icon: "ti ti-sun", description: "Epic film" },
    { name: "British Beatlemania", icon: "ti ti-vinyl", description: "The Beatles phenomenon" },
    { name: "Ole Miss", icon: "ti ti-school", description: "University integration riot, 1962" },
    { name: "John Glenn", icon: "ti ti-rocket", description: "First American to orbit Earth" },
    { name: "Liston Beats Patterson", icon: "ti ti-trophy", description: "Boxing heavyweight championship" },
    { name: "Pope Paul", icon: "ti ti-crown", description: "Pope Paul VI elected, 1963" },
    { name: "Malcolm X", icon: "ti ti-sunglasses", description: "Civil rights leader" },
    { name: "British Politician Sex", icon: "ti ti-hearts", description: "Profumo scandal" },
    { name: "J.F.K. Blown Away", icon: "ti ti-user-x", description: "President Kennedy assassinated, 1963" },
    
    { type: "fire-break" },
    
    // Verse 6
    { name: "Birth Control", icon: "ti ti-pill", description: "Contraceptive pill widely available" },
    { name: "Ho Chi Minh", icon: "ti ti-helmet", description: "North Vietnamese leader" },
    { name: "Richard Nixon Back Again", icon: "ti ti-user-check", description: "Elected president, 1968" },
    { name: "Moonshot", icon: "ti ti-rocket", description: "Apollo 11 moon landing, 1969" },
    { name: "Woodstock", icon: "ti ti-music", description: "Music festival, 1969" },
    { name: "Watergate", icon: "ti ti-lock", description: "Political scandal, Nixon resignation" },
    { name: "Punk Rock", icon: "ti ti-guitar-pick", description: "Music movement emerged" },
    { name: "Begin", icon: "ti ti-hand-stop", description: "Menachem Begin, Israeli PM" },
    { name: "Reagan", icon: "ti ti-movie", description: "Ronald Reagan elected president, 1980" },
    { name: "Palestine", icon: "ti ti-home-x", description: "Middle East conflict" },
    { name: "Terror on the Airline", icon: "ti ti-plane", description: "Hijackings and terrorism" },
    { name: "Ayatollahs in Iran", icon: "ti ti-star-crescent", description: "Iranian Revolution, 1979" },
    { name: "Russians in Afghanistan", icon: "ti ti-tank", description: "Soviet invasion, 1979" },
    { name: "Wheel of Fortune", icon: "ti ti-device-tv", description: "Popular game show" },
    { name: "Sally Ride", icon: "ti ti-rocket", description: "First American woman in space, 1983" },
    { name: "Heavy Metal Suicide", icon: "ti ti-music", description: "Judas Priest trial controversy" },
    { name: "Foreign Debts", icon: "ti ti-cash", description: "Global economic crisis" },
    { name: "Homeless Vets", icon: "ti ti-home-off", description: "Vietnam veterans crisis" },
    { name: "AIDS", icon: "ti ti-virus", description: "Epidemic emerged in 1980s" },
    { name: "Crack", icon: "ti ti-pill", description: "Cocaine epidemic" },
    { name: "Bernie Goetz", icon: "ti ti-train", description: "Subway vigilante shooting" },
    { name: "Hypodermics on the Shores", icon: "ti ti-vaccine", description: "Medical waste washed up on beaches" },
    { name: "China's Under Martial Law", icon: "ti ti-shield-x", description: "Tiananmen Square protests, 1989" },
    { name: "Rock and Roller Cola Wars", icon: "ti ti-bottle", description: "Pepsi vs Coke marketing battles" },
    
    { type: "fire-break" }
];

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

// Initialize
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

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {
        // Silent fail - service worker is optional
    });
}
