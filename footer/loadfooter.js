// This needs updating any time the gif list is updated
const gifs = [
    {
        name:"88x31.gif",
        link:"https://cyber.dabamos.de/88x31/", 
        alt:"Text in a serif font saying '88x31'"
    },
    {
        name:"bestviewedopen.gif", 
        alt:"A disintigrating and then reappearing image with text saying 'Best viewed with Open Eyes', there is a yellow emoji face next to it"
    },
    {
        name:"discord.gif", 
        link:"https://discord.gg/bGMSnH2Kqk",
        alt:"The discord logo to the left of some slow flashing text asking you to 'Join now!'"
    },
    {
        name:"drmario.gif", 
        alt:"An image of Dr Mario next to some text saying 'You were diagnosed with GAY'"
    },
    {
        name:"gaywebsite.gif", 
        alt:"A scrawled Microsoft Paint image of a rainbow with the text 'This website is GAY'"
    },
    {
        name:"lan.gif", 
        alt:"An icon representing a LAN network with the text 'Screw Ya'll I'm going back to my Local Network'"

    }, 
    {
        name:"rainbowflag.gif", 
        alt:"A simple rainbow pride flag"
    },
    {
        name:"stardew.gif", 
        alt:"An image of Stardew Valley's logo"
    },
    {
        name:"wikipedia.gif", 
        link:"https://wikipedia.org",
        alt:"An icon asking you to 'Support Wikipedia'"
    }
]

const footerContainer = document.getElementById("footer");
const footerGifs = document.createElement("div");
footerGifs.setAttribute("id", "footer-gifs");
footerContainer.appendChild(footerGifs);

for (let gif in gifs) {
    // Convert from index to value
    gif = gifs[gif]

    // Create elements
    let gifContainer = document.createElement("div");
    let gifURLer     = document.createElement("a");
    let gifImg       = document.createElement("img");

    // Set attributes
    gifContainer.setAttribute("class", "footer-gif");

    if (gif.link != undefined) { // Link is not required to be defined
        gifURLer.setAttribute("href", gif.link);
    }

    gifImg.setAttribute("src", "footer/gifs/"+gif.name);

    if (gif.alt != undefined) { // Alt is not required to be defined
        gifImg.setAttribute("alt", gif.alt);
    }
    

    // Nest elements
    gifURLer.appendChild(gifImg);
    gifContainer.appendChild(gifURLer);
    footerGifs.appendChild(gifContainer);
};
