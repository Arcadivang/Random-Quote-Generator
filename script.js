const quotes = [
    "Believe in yourself!",
    "You can do it!",
    "Stay positive, work hard, make it happen.",
    "Success is not final, failure is not fatal."
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
