var open = false;

document.querySelector("header").onclick = (ev) => {
    if (open && ev.target.className != "openbtn") {
        closeAside();
    }
}

document.querySelector("main").onclick = (ev) => {
    if (open && ev.target.className != "openbtn") {
        closeAside();
    }
}

function openAside() {
    document.getElementById("sidebar").style.width = "300px";
    document.querySelector(".openbtn").style.display = "none";
    open = true;
}

function closeAside() {
    document.querySelector("aside").style.width = "0";
    //document.querySelector("main").style.marginRight = "0";
    document.querySelector(".openbtn").style.display = "block";
    side = false;
}