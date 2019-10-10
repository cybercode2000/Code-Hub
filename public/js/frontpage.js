let header = document.querySelector('.header');
let main = document.querySelector('.main');
let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');
let main1 = document.querySelector('.main1');
let image3 = document.querySelector('#image3');
let main2 = document.querySelector('.main2');
let serviceheader = document.querySelector('.header-service');
let talk = document.querySelector('.firstext');
let btn1 = document.querySelector('#btn1');
let arrow = document.querySelector('#arrow');


function getDocHeight(){
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
}


btn1.addEventListener('mouseenter', () => {
    arrow.style.display = "inline-block";
})

btn1.addEventListener('mouseleave', () => {
    arrow.style.display = "none";
})


function amountscrolled() {
    var winHeight = window.innerHeight;
    var docheight = getDocHeight();
    var scrollTop = window.pageYOffset;
    var tracklength = docheight - winHeight;
    var result = Math.floor((scrollTop / tracklength) * 100);


if(result >= 6) {
header.style.opacity = 1;
header.style.animationName = 'damicode2';
header.style.animationDuration = '0.8s';

image1.style.display = 'block';
image1.style.animationName = 'image1';
image1.style.animationDuration = '1.5s';

main.style.display = 'block';
main.style.animationName = 'content';
main.style.animationDuration = '1.5s';
}



if(result >= 24) {
    image2.style.display = 'block';
    image2.style.animationName = 'image1';
    image2.style.animationDuration = '1.5s';
    
    main1.style.display = 'block';
    main1.style.animationName = 'content';
    main1.style.animationDuration = '1.5s';
    }


if(result >= 31) {
    image3.style.display = 'block';
    image3.style.animationName = 'image1';
    image3.style.animationDuration = '1.5s';
        
    main2.style.display = 'block';
    main2.style.animationName = 'content';
    main2.style.animationDuration = '1.5s';
    }

    
if(result >= 180)
talk.style.opacity = 1;
talk.style.animationName = 'image1';
talk.style.animationDuration = '1.5s';

    
}

window.addEventListener("scroll", (() => {
        amountscrolled();
}));

