$(function() {
    $(".nav-link").on('click', function() {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    })
})

function toggleMenu() {
    $("#nav-bar").toggleClass("responsive");
    if ($("#nav-bar").hasClass("responsive")) {
        $("#container").css("width", "50%");
        $(".line").removeClass("hidden");
        $(".fas").removeClass("fa-bars");
        $(".fas").addClass("fa-times");
    } else {
        $("#container").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }
}

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 786) {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }
});