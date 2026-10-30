
// =============================================
// MY LOVELY SISTER WEBSITE
// COMPLETE JAVASCRIPT
// =============================================


// =============================================
// GLOBAL VARIABLES
// =============================================

let sisterName = "";

let messageIndex = 0;

let giftOpened = false;

let audioContext = null;

let musicTimer = null;

let musicPlaying = false;


// =============================================
// SPECIAL SISTER MESSAGES
// =============================================

const specialMessages = [

    "You are my built-in best friend! 💗",

    "You are my God-gifted blessing! 🥰",

    "You make my world more beautiful! 🌸",

    "Your smile is my favourite sunshine! ☀️",

    "I am lucky to have a sister like you! 💕",

    "You are one of my biggest blessings! 🧸",

    "No distance can change our bond! ❤️",

    "You will always have a special place in my heart! 💖",

    "Thank you for being YOU! 🌷",

    "I love you more than words can explain! 💝"

];


// =============================================
// BEAUTIFUL ISLAMIC DUAS
// =============================================

const duas = [

    "Allah bless you with endless happiness that never fades away. 💗",

    "Allah bless you with good health and a long, beautiful life. 🌸",

    "Allah bless you with peace, love and comfort in your heart. ❤️",

    "Allah bless you with success in every step of your journey. ✨",

    "Allah bless you with strong Imaan and a beautiful connection with Allah. 🤲",

    "Allah bless you with the best people who always care for you. 🥰",

    "Allah bless you with protection from every sadness and difficulty. 💕",

    "Allah bless you with all the beautiful dreams your heart wishes for. 🌙",

    "Allah bless you with Barakah in your life and everything you do. 💖",

    "Allah bless you with a beautiful future and endless blessings. 🌷",

    "Allah bless you with strength during difficult times and gratitude during happy times. 🦋",

    "Allah bless you with a heart that always finds peace in remembering Him. 🤲",

    "Allah bless you with success in this life and Jannah in the Hereafter. 💗",

    "Allah bless you with countless reasons to smile every single day. 🧸",

    "Allah keep you safe, protected and surrounded by endless love. ❤️"

];


// =============================================
// PAGE NAVIGATION
// =============================================

function nextPage(number) {

    const selectedPage = document.getElementById(
        "page" + number
    );

    if (!selectedPage) return;

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    selectedPage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (number === 3) {

        messageIndex = 0;

        showSpecialMessage();

    }

    if (number === 5) {

        startLoveLoop();

    }

}


// =============================================
// PAGE 1: PERSONALIZED WELCOME
// =============================================

function startJourney() {

    const input = document.getElementById(
        "sisterName"
    );

    sisterName = input.value.trim();

    if (sisterName === "") {

        alert(
            "Please enter your beautiful name first! 💗"
        );

        input.focus();

        return;
    }

    document.getElementById(
        "helloName"
    ).textContent = "Hello, " + sisterName + "! 🥰";

    nextPage(2);

}


// =============================================
// PAGE 3: SPECIAL MESSAGE SYSTEM
// =============================================

function showSpecialMessage() {

    const message = document.getElementById(
        "specialMessage"
    );

    if (!message) return;

    message.textContent = specialMessages[
        messageIndex
    ];

    message.style.animation = "none";

    void message.offsetWidth;

    message.style.animation =
        "messagePop 0.7s ease";

}


function changeSpecialMessage() {

    messageIndex = (
        messageIndex + 1
    ) % specialMessages.length;

    showSpecialMessage();

}


// =============================================
// PAGE 4: OPEN GIFT SURPRISE
// =============================================

function openGift() {

    if (giftOpened) return;

    giftOpened = true;

    const gift = document.getElementById("gift");

    const message = document.getElementById(
        "giftMessage"
    );

    gift.classList.add("opened");

    gift.textContent = "🎉💝✨";

    message.innerHTML =
        "SURPRISE! 🎀<br><br>" +
        "Your gift is my promise to always support you, " +
        "make you smile and be there whenever you need me! " +
        "You are priceless! 💗";

    createCelebration();

}


// =============================================
// PAGE 5: MOVIE STYLE DUA CREDITS
// =============================================

function startLoveLoop() {

    const container = document.getElementById(
        "duaMessages"
    );

    if (!container) return;

    // Clear any previous credits

    container.innerHTML = "";

    // Create two identical groups
    // This creates a seamless infinite loop

    for (let repeat = 0; repeat < 2; repeat++) {

        const group = document.createElement("div");

        group.className = "dua-credit-group";

        // Space before the first Dua

        const spacer = document.createElement("div");

        spacer.className = "dua-credit-spacer";

        group.appendChild(spacer);

        // Add every Dua

        duas.forEach((dua) => {

            const line = document.createElement("div");

            line.className = "dua-line";

            line.textContent = "💗 " + dua + " ✨";

            group.appendChild(line);

        });

        container.appendChild(group);

    }

    // Start the continuous movie credits animation

    container.style.animation = "none";

    void container.offsetWidth;

    container.style.animation =
        "movieCredits 75s linear infinite";

}


// =============================================
// FLOATING HEARTS AND FLOWERS
// =============================================

const floatingItems = [

    "💗",
    "💕",
    "❤️",
    "🌸",
    "🦋",
    "✨",
    "💖",
    "🌷",
    "⭐",
    "💝"

];


function createFloatingItem() {

    const container = document.getElementById(
        "floatingHearts"
    );

    if (!container) return;

    const item = document.createElement("div");

    item.className = "floating-item";

    item.textContent = floatingItems[
        Math.floor(
            Math.random() * floatingItems.length
        )
    ];

    item.style.left =
        Math.random() * 100 + "%";

    item.style.fontSize =
        (18 + Math.random() * 25) + "px";

    const duration = 5 + Math.random() * 6;

    item.style.animationDuration =
        duration + "s";

    container.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, duration * 1000);

}


// Create background decorations

setInterval(createFloatingItem, 400);


// =============================================
// GIFT CELEBRATION
// =============================================

function createCelebration() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createFloatingItem();

        }, i * 100);

    }

}


// =============================================
// BACKGROUND MELODY
// =============================================

function toggleMusic() {

    const button = document.querySelector(
        ".music-button"
    );

    if (!button) return;

    // Turn music off

    if (musicPlaying) {

        clearInterval(musicTimer);

        musicTimer = null;

        musicPlaying = false;

        button.textContent = "🎵 Turn Music On";

        return;

    }

    // Browser audio support

    const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContextClass) {

        alert(
            "Your browser does not support audio."
        );

        return;

    }

    audioContext = audioContext ||
        new AudioContextClass();

    audioContext.resume();

    // Original gentle melody notes

    const notes = [

        523.25,
        659.25,
        783.99,
        659.25,
        587.33,
        698.46,
        783.99,
        659.25

    ];

    let noteIndex = 0;


    function playNote() {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value =
            notes[noteIndex];

        const now = audioContext.currentTime;

        gain.gain.setValueAtTime(
            0.0001,
            now
        );

        gain.gain.exponentialRampToValueAtTime(
            0.06,
            now + 0.08
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + 0.65
        );

        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );

        oscillator.start(now);

        oscillator.stop(now + 0.7);

        noteIndex = (
            noteIndex + 1
        ) % notes.length;

    }


    // Start melody

    playNote();

    musicTimer = setInterval(
        playNote,
        750
    );

    musicPlaying = true;

    button.textContent = "🔇 Turn Music Off";

}
