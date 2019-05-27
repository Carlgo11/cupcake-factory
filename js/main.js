$('#scroll-btn').click(function () {
    document.getElementById("div-one").scrollIntoView({behavior: "smooth"});
});

$('img')
    .visibility({
        type: 'image',
        transition: 'fade in',
        duration: 1000
    });

Modernizr.on('webp', function(result) {
    if (result) {
        // supported
    } else {
        // not-supported
    }
});