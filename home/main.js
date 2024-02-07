document.addEventListener("DOMContentLoaded", function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", function () {
        var firstContainer = document.querySelector("section#second .firstContainer");
        var secondContainer = document.querySelector("section#second .secondContainer");

        var scrollPositionY = window.scrollY;
        var firstContainerPosition = firstContainer.offsetTop;
        var secondContainerPosition = secondContainer.offsetTop;

        if (scrollPositionY > firstContainerPosition - 700) {
            firstContainer.firstElementChild.classList.add("fadeToLeftOpacity")
            firstContainer.lastElementChild.classList.add("fadeToRightOpacity")
        }
        if (scrollPositionY > secondContainerPosition - 700) {
            secondContainer.firstElementChild.classList.add("fadeToLeftOpacity")
            secondContainer.lastElementChild.classList.add("fadeToRightOpacity")
        }
    });

    var popUp = document.querySelector("popup.more");
    var closePopUp = document.querySelector("popup.more i.fa-xmark");
    var main = document.querySelector("main");
    var button = document.querySelector("div.button");

    button.addEventListener("click", function () {
        main.classList.add("darken");
        popUp.classList.remove("fadeFromBottomOpacity")
        popUp.classList.add("fadeFromTopOpacity");
        popUp.classList.remove("hidden");
    });

    closePopUp.addEventListener("click", function () {
        popUp.classList.remove("fadeFromTopOpacity");
        popUp.classList.add("fadeFromBottomOpacity");
        main.classList.remove("darken");
    });
})