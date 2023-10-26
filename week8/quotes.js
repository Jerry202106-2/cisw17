
//Create a function that will change the quotes
//and the source when the page is loaded
// Bouns: changes the quote with a button push

function getQuote(){
    const quotes = [
        "You Don't Have Time To Think Up There. You Think, You're Dead",
        "The Pentagon Sees To It That I Know More Than You.",
        "That Was Some Of The Best Flying I've Seen To Date — Right Up To The Part Where You Got Killed.",
        "Remember Boys, No Points For Second Place.",
        "You're Not Going To Be Happy Unless You're Going Mach 2 With Your Hair On Fire.",
        "This Is What I Call A Target-Rich Environment."
    ]
    const sources = [
        "Maverick",
        "Charlie",
        "Jester",
        "Slider",
        "Charlie",
        "Maverick"
    ]

    //grab the h1 from the htmland replace the innerHTML
    //with the quote
    let quote=document.getElementById('quote');
    quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

    let source=document.getElementById('source');
    source.innerHTML=sources[Math.floor(Math.random()*sources.length)];

}

getQuote();