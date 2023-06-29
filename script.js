var quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown Jr."
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    }
];

// Function to generate a random quote
function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    var quoteElement = document.getElementById("quote");
    quoteElement.textContent = randomQuote.text + " - " + randomQuote.author;
}

// Event listener for button click
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQuote);

// Generate initial quote on page load
generateQuote();