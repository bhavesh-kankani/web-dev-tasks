let element1 = document.getElementById("r1");
let element2 = document.getElementById("r2");
let element3 = document.getElementById("r3");
let element4 = document.getElementById("r4");
let element5 = document.getElementById("r5");
let x;

const handleClick = () => {
    x = setInterval(() => {
        element1.style.transition = "height 1s";
        element1.style.height = `${Math.floor(Math.random() * 200)}`;
        element2.style.transition = "height 1s";
        element2.style.height = `${Math.floor(Math.random() * 200)}`;
        element3.style.transition = "height 1s";
        element3.style.height = `${Math.floor(Math.random() * 200)}`;
        element4.style.transition = "height 1s";
        element4.style.height = `${Math.floor(Math.random() * 200)}`;
        element5.style.transition = "height 1s";
        element5.style.height = `${Math.floor(Math.random() * 200)}`;
    }, 1000);
};

const handleEndClick = () => {
    clearInterval(x);
};