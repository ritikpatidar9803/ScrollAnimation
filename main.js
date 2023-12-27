function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var img2 = document.getElementsByClassName("img2");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop + 800 < windowHeight - elementVisible) {
            reveals[i].classList.add("firstview");
        } else {
            reveals[i].classList.remove("firstview");
        }
        if (elementTop + 1500 < windowHeight - elementVisible && elementTop + 2100 > windowHeight - elementVisible) {
            setTimeout(showZoom, 1500);
            reveals[i].classList.add("secondview");
        } else {
            reveals[i].classList.remove("secondview");
        }
        if (elementTop + 2100 < windowHeight - elementVisible) {
            reveals[i].classList.add("thirdview");
        } else {
            reveals[i].classList.remove("thirdview");
        }
        if (elementTop + 1500 < windowHeight - elementVisible && elementTop + 1600 > windowHeight - elementVisible) {
            setTimeout(showZoom, 1500);
        }
        else {
            document.getElementById('zoom-bg').style.display = 'none';
            document.getElementById('zoomed-part').style.display = 'none';
        }
    }
}

function showZoom() {
    document.getElementById('zoom-bg').style.display = 'block';
    document.getElementById('zoomed-part').style.display = 'block';
}
window.addEventListener("scroll", reveal);




