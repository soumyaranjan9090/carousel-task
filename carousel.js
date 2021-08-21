var num = 0;

var data = [
    {
        name: 'Amazon Echo Dot 4th Gen Alexa Built- in Speaker',
        image: "images/amazon.png",
        button: "Buy now",
        matter: [
            {
                heading: "Wake Words ",
                content: "There are four options of wake words to choose from - Alexa, Amazon, Echo, Computer  "
            }, {
                heading: "Conversation",

                content: "Alexa’s follow-up mode allows to initiate a new query with respect to the old one.",

            }, {
                heading: "Assists Better  ",
                content: "Alexa does have an advantage with respect to features and ability to operate smart home devices",
            }, {
                heading: "Enabled Devices ",
                content: "Alexa boasts of being compatible with over 100,000 devices like, smart plugs, security cameras and more",
            }, {
                heading: "Verdict",
                content: "Alexa is definitely user friendly, more compatible with third-party devices and offers a great AI experience that makes it a competitor in the segment"
            }
        ]
    },
    {
        name: 'Google 12 watts Assistant Smart Speaker',
        image: "images/xiaomi.png",
        button: "Buy now",
        matter: [
            {
                heading: "Wake Words ",
                content: "You can ‘wake up’ the assistant by saying ‘Ok, Google’ or ‘Hey, Google’ "
            }, {
                heading: "Conversation",

                content: "Alexa’s follow-up mode allows to initiate a new query with respect to the old one.  ",

            }, {
                heading: "Assists Better  ",
                content: "Alexa does have an advantage with respect to features and ability to operate smart home devices",
            }, {
                heading: "Enabled Devices ",
                content: "Alexa boasts of being compatible with over 100,000 devices like, smart plugs, security cameras and more",
            }, {
                heading: "Verdict",
                content: "Alexa is definitely user friendly, more compatible with third-party devices and offers a great AI experience that makes it a competitor in the segment"
            }
        ]
    },
    {
        name: 'Apple HomePad mini Built- in Smart Speaker',
        image: "images/apple.jpg",
        button: "Buy now",
        matter: [
            {
                heading: "Wake Words ",
                content: "There are four options of wake words to choose from - Alexa, Amazon, Echo, Computer"
            }, {
                heading: "Conversation",

                content: "Alexa’s follow-up mode allows to initiate a new query with respect to the old one.",

            }, {
                heading: "Assists Better  ",
                content: "Alexa does have an advantage with respect to features and ability to operate smart home devices",
            }, {
                heading: "Enabled Devices ",
                content: "Alexa boasts of being compatible with over 100,000 devices like, smart plugs, security cameras and more",
            }, {
                heading: "Verdict",
                content: "Alexa is definitely user friendly, more compatible with third-party devices and offers a great AI experience that makes it a competitor in the segment"
            }
        ]
    },
    {
        name: 'Xiaomi 12 Watts Google Assistant Smart Speaker',
        image: "images/x.jpg",
        button: "Buy now",
        matter: [
            {
                heading: "Wake Words ",
                content: "You can ‘wake up’ the assistant by saying ‘Ok, Google’ or ‘Hey, Google’ "
            }, {
                heading: "Conversation",

                content: "Alexa’s follow-up mode allows to initiate a new query with respect to the old one.",

            }, {
                heading: "Assists Better  ",
                content: "Alexa does have an advantage with respect to features and ability to operate smart home devices",
            }, {
                heading: "Enabled Devices ",
                content: "Alexa boasts of being compatible with over 100,000 devices like, smart plugs, security cameras and more",
            }, {
                heading: "Verdict",
                content: "Alexa is definitely user friendly, more compatible with third-party devices and offers a great AI experience that makes it a competitor in the segment"
            }
        ]
    },
    {
        name: 'Google Home Mini- Smart Speaker one size',
        image: "images/shopping.webp",
        button: "Buy now",
        matter: [
            {
                heading: "Wake Words ",
                content: "There are four options of wake words to choose from - Alexa, Amazon, Echo, Computer  "
            }, {
                heading: "Conversation",

                content: "Alexa’s follow-up mode allows to initiate a new query with respect to the old one.",

            }, {
                heading: "Assists Better  ",
                content: "Alexa does have an advantage with respect to features and ability to operate smart home devices",
            }, {
                heading: "Enabled Devices ",
                content: "Alexa boasts of being compatible with over 100,000 devices like, smart plugs, security cameras and more",
            }, {
                heading: "Verdict",
                content: "Alexa is definitely user friendly, more compatible with third-party devices and offers a great AI experience that makes it a competitor in the segment"
            }
        ]
    },
    {
        name: 'Amazon Echo 4th Gen Smart Voice Speaker',
        image: "images/Echo1.webp",
        button: "Buy now",
        matter: [
            {
                heading: "Wake Words ",
                content: "You can ‘wake up’ the assistant by saying ‘Ok, Google’ or ‘Hey, Google’"
            }, {
                heading: "Conversation",
                content: "Alexa’s follow-up mode allows to initiate a new query with respect to the old one.",

            }, {
                heading: "Assists Better  ",
                content: "Alexa does have an advantage with respect to features and ability to operate smart home devices",
            }, {
                heading: "Enabled Devices ",
                content: "Alexa boasts of being compatible with over 100,000 devices like, smart plugs, security cameras and more",
            }, {
                heading: "Verdict",
                content: "Alexa is definitely user friendly, more compatible with third-party devices and offers a great AI experience that makes it a competitor in the segment"
            }
        ]
    }
];


var code = "";

for (let i = 0; i < data.length; i++) {
 
    code += `<div class="section">
            <img src=${data[i].image} alt="no image" class="img">
            <p>${data[i].name}</p>
            <div class = "btn-background">
            <div class = "btn-name">${data[i].button}</div>
            </div>
    <div class="content">
        <h4 class="name">${data[i].matter[0].heading}</h4>
        <p class="matter">${data[i].matter[0].content}</p>
        <hr>
        <h4 class="name">${data[i].matter[1].heading}</h4>
        <p class="matter">${data[i].matter[1].content}</p>
        <hr>
        <h4 class="name">${data[i].matter[2].heading}</h4>
        <p class="matter">${data[i].matter[2].content}</p>
        <hr>
        <h4 class="name">${data[i].matter[3].heading}</h4>
        <p class="matter">${data[i].matter[3].content}</p>
        <hr>
        <h4 class="name">${data[i].matter[4].heading}</h4>
        <p class="matter">${data[i].matter[4].content}</p>
        <hr>
    </div>
</div>`
}



document.getElementsByClassName("repeat")[0].innerHTML = code;

var scroll = 0;
function displayNext(){
    scroll += 500;
    document.getElementsByClassName("carousel")[0].scrollLeft = scroll;
}

function displayPrevious(){
    scroll -= 500;
    document.getElementsByClassName("carousel")[0].scrollLeft = scroll;
}

