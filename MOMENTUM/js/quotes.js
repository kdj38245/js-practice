const quotes = [
    {
        quote: "Life is like riding a bicycle. To keep your balacne, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "If A is success in life, then A equals X plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
        author: "Albert Einstein",
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein",
    },
    {
        quote: "It's not that I'm so smart; it's just that I stay with problems longer.",
        author: "Albert Einstein",
    },
    {
        quote: "Insanity is doing the same thing over and lover again and expecting different results.",
        author: "Albert Einstein",
    },
    {
        quote: "Not everything that counts can be counted, and not everything that can be counted counts.",
        author: "Albert Einstein",
    },
    {
        quote: "Science without religion is lame, religion without science is blind.",
        author: "Albert Einstein",
    },
    {
        quote: "The value of a man resides in What he gives and not in what he is capable of receving.",
        author: "Albert Einstein",
    },
    {
        quote: "Try not to become a man of success but rather the become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein",
    }
   

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;