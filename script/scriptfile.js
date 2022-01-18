let src = document.images.length;

function nextImg() {
    let firstImage = document.images[0].src;
    for (let i = 0; i < 4; i++) {
        document.images[i].src = document.images[i + 1].src;
    }
    document.images[4].src = firstImage;

}

function prevImg() {
    let firstImage = document.images[4].src;

    for (let i = 4; i > 0; i--) {
        document.images[i].src = document.images[i - 1].src;
    }
    document.images[0].src = firstImage;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}