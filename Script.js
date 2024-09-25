const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const resetButton = document.getElementById('resetButton');
const currentTimeDisplay = document.getElementById('currentTime');
const greetingMessage = document.getElementById('greetingMessage');
const quoteMessage = document.getElementById('quoteMessage');
const bgColorPicker = document.getElementById('bgColorPicker');
const greetingSound = document.getElementById('greetingSound');
const svgIcon = document.getElementById('svgIcon');

// Quotes array
const quotes = [
    "Believe in yourself!",
    "You can do it!",
    "Stay positive!",
    "Keep pushing forward!",
    "Make today amazing!"
];

// Load name from local storage
window.onload = function() {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        nameInput.value = savedName;
    }
};

// Update background color
bgColorPicker.addEventListener('input', function() {
    document.body.style.backgroundColor = bgColorPicker.value;
});

// Display greeting
greetButton.addEventListener('click', function() {
    const name = nameInput.value || "Guest";
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = `Good Morning, ${name}!`;
    } else if (hours < 18) {
        greeting = `Good Afternoon, ${name}!`;
    } else {
        greeting = `Good Evening, ${name}!`;
    }

    const currentTime = new Date().toLocaleTimeString();
    currentTimeDisplay.textContent = `Current Time: ${currentTime}`;
    greetingMessage.textContent = greeting;
    quoteMessage.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    greetingSound.play();

    greetingMessage.style.opacity = 1; // Show greeting with animation
    svgIcon.classList.remove('hidden');
    svgIcon.style.opacity = 1; // Show SVG icon

    // Save name to local storage
    localStorage.setItem('name', name);
});

// Reset function
resetButton.addEventListener('click', function() {
    nameInput.value = '';
    greetingMessage.textContent = '';
    quoteMessage.textContent = '';
    currentTimeDisplay.textContent = '';
    document.body.style.backgroundColor = '#f4f4f4'; // Reset background color
    svgIcon.classList.add('hidden'); // Hide SVG icon
});
