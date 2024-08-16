const images = [
    'https://i.imgur.com/eCuXu6p.jpg',
    'https://i.imgur.com/G08iXpe.jpg',
    'https://i.imgur.com/Pg0IDsm.jpg',
    'https://i.imgur.com/lovKLgJ.jpg',
    'https://i.imgur.com/4vmF3PG.jpg'
];


var curr = 0;

document.querySelector(".next").onclick = nextImg();
document.querySelector(".prev").onclick = prevImg();

function nextImg() {
    return function() {
        curr += 1
        if (curr == 5) {
            curr = 0;
        }
        document.getElementById("currImg").src = images[curr];
        document.querySelector(".selected").className = "unselected";
        document.getElementById(`${curr}`).className = "selected";
    }  
}

function prevImg() {
    return function() {
        curr -= 1
        if (curr == -1) {
            curr = 4;
        }
        document.getElementById("currImg").src = images[curr];
        document.querySelector(".selected").className = "unselected";
        document.getElementById(`${curr}`).className = "selected";
    }
}

curr = -1
carousel()

function carousel() {
    curr += 1
    if (curr == 5) {
        curr = 0;
    }
    document.getElementById("currImg").src = images[curr];
    document.querySelector(".selected").className = "unselected";
    document.getElementById(`${curr}`).className = "selected";
    setTimeout(carousel, 5000)
}
