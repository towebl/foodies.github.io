"use strict"

// home text Input userName
/*let text = document.querySelector('.home__subtext');


function getName() {
    setTimeout(() => {
        const infor = prompt("What's your name??").toUpperCase();
        if (typeof infor === 'string' && isNaN(infor)) {
            text.innerHTML = `Welcome ${infor}..`;
        } else {
            alert('Enter only your name')
        }
    }, 2000)
}

getName();*/







// darkmode 
const darkMode = document.querySelector('#darkmode');

darkMode.addEventListener('click', () => {
    if (darkMode.classList.contains('fa-moon-o')) {
        darkMode.classList.replace('fa-moon-o', 'fa-sun-o');
        darkMode.style.color = 'yellow';
        document.body.classList.add('active');
        alert('Background is on white mode');
    } else {
        darkMode.classList.replace('fa-sun-o', 'fa-moon-o');
        darkMode.style.color = 'white';
        document.body.classList.remove('active');
    };
});









// home change Images
const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImage = 0;

setInterval(() => {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}, 5000);


// menu button 

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });

    $('.menu__link').click(function(event) {
        $('.header__burger, .menu').removeClass('active');
        $('body').removeClass('lock');
    });
});


//$(document).ready(function() {
//$('.food__row').slick({
//arrows: false,
//dots: true,
//slidesToShow: 3,
//draggable: false,
//responsive: [{
//breakpoint: 1260,
//settings: {
//slidesToShow: 2
//}
//},
//{
//breakpoint: 850,
//settings: {
//slidesToShow: 1
//}
//}
//]
//});
//});


jQuery(document).ready(function() {
    jQuery('.food__row').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        draggable: false,
        responsive: [{
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



// dishes toggle 
const tabsBtn = document.querySelectorAll('.dishes__tab-btn');
const tabsItems = document.querySelectorAll('.dishes__body');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });


            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.dishes__tab-btn').click();



window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const serving = document.querySelector('.serving');
    serving.style.setProperty('--scroll-pos', `${scrolled}px`);
});









// email respond 
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json()); // parse JSON request bodies

// API endpoint to handle email sending
app.post('/send-email', (req, res) => {
    // Get email data from request body
    const { to, subject, body } = req.body;

    // Create a Nodemailer transport object with your SMTP credentials
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 465,
        secure: true,
        auth: {
            user: 'your-smtp-username',
            pass: 'your-smtp-password'
        }
    });

    // Create an email message object
    const message = {
        from: 'fomionlin44@gmail.com',
        to,
        subject,
        text: body
    };

    // Send the email using the transport object
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent successfully:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});