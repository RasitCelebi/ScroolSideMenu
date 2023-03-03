
let clickEvent = document.querySelector('.myMenuUl');

clickEvent.addEventListener("click", function (event) {
    console.log("number of Children : " + event.target.childNodes.length + " child");

    if (event.target.childNodes.length > 1) {
        event.target.querySelector('ul').classList.toggle("hidden");
        event.target.querySelector('ul').classList.toggle("block");
    }
});


let clickEventSub = document.querySelectorAll('.mySubMenu');

clickEventSub.forEach(item =>
    item.addEventListener(
        'click', function (event) {
            event.target.parentNode.classList.toggle("hidden");
            event.target.parentNode.classList.toggle("block");
        }
    ));







