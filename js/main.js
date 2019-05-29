$('#scroll-btn').click(function () {
    document.getElementById("div-one").scrollIntoView({behavior: "smooth"});
});

$('img').visibility({
    type: 'image',
    transition: 'fade in',
    duration: 1000
});

function isInViewport(el) {
    return window.innerHeight > el[0].getBoundingClientRect().top;
}

const map = $('#map');

$(document).ready(function () {
    isInViewport(map);
});

window.onscroll = function () {
    if (isInViewport(map)) {
        map.embed();
        window.onscroll = undefined;
    }
};
