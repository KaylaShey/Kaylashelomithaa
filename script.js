
function playSong() {
    var audio = document.getElementById("mySong");
    audio.play();
}


function revealFact(num) {
    let fact = document.getElementById(`fact${num}`);
    fact.style.display = "block";
}


function saveMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() !== "") {
        alert("Aww, thank you! Your message has been saved! 💙");
        document.getElementById("message").value = "";
    } else {
        alert("Oops! Write something first. 💭");
    }
}


function showSurprise() {
    let message = document.getElementById("surpriseMessage");
    message.innerHTML = "SENDING 1000 VIRTUAL HUGS! DM @d0rayami for gifts";
}


function createFloatingDecorations() {
    const emojis = ["✨", "💖", "🌟", "💙", "🦋"]; // Cute floating symbols
    const decoration = document.createElement("div");
    decoration.classList.add("floating-decoration");
    decoration.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    
    decoration.style.left = Math.random() * window.innerWidth + "px";

    
    decoration.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(decoration);

    
    setTimeout(() => {
        decoration.remove();
    }, 4000);
}

// Countdown Timer Script
function countdownTimer() {
    const now = new Date();
    let eventDate = new Date(now.getFullYear(), 3, 17, 0, 0, 0); // April 17, current year at midnight

    // If today is past April 17, set the countdown for next year
    if (now > eventDate) {
        eventDate.setFullYear(now.getFullYear() + 1);
    }

    const timeLeft = eventDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdownTimer").innerText = `${days} days, ${hours} hours, ${minutes} minutes`;
}

// Call the function
countdownTimer();
setInterval(countdownTimer, 1000 * 60); // Update every minute

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

const bibleVerses = [
    '"For God so loved the world that he gave his one and only Son..." - John 3:16',
    '"I can do all things through Christ who strengthens me." - Philippians 4:13',
    '"The Lord is my shepherd, I lack nothing." - Psalm 23:1',
    '"Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5',
    '"Be strong and courageous. Do not be afraid or discouraged." - Joshua 1:9',
    '"The Lord is near to all who call on him." - Psalm 145:18',
    '"Let all that you do be done in love." - 1 Corinthians 16:14',
    '"Cast all your anxiety on him because he cares for you." - 1 Peter 5:7',
    '"With God all things are possible." - Matthew 19:26',
    '"Give thanks to the Lord, for he is good; his love endures forever." - Psalm 107:1'
];

let currentVerseIndex = 0;
const verseText = document.getElementById("bibleVerse");
const prevButton = document.getElementById("prevVerse");
const nextButton = document.getElementById("nextVerse");

nextButton.addEventListener("click", () => {
    currentVerseIndex = (currentVerseIndex + 1) % bibleVerses.length;
    verseText.textContent = bibleVerses[currentVerseIndex];
});

prevButton.addEventListener("click", () => {
    currentVerseIndex = (currentVerseIndex - 1 + bibleVerses.length) % bibleVerses.length;
    verseText.textContent = bibleVerses[currentVerseIndex];
});

function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    let scrollAmount = 200 * direction; // Adjust scroll speed
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function flipCard(card) {
    card.classList.toggle('flip');
}
