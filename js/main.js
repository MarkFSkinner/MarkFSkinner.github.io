class Project {
    constructor(name, link, image) {
        this.name = name;
        this.link = link;
        this.image = image;
    }
}

const projects = [
    new Project("Weather App", "#", "https://www.fillmurray.com/640/360"),
    new Project("Drum Machine", "#", "https://www.placecage.com/640/360"),
    new Project("Random Quote Generator", "#", "https://www.fillmurray.com/640/360"),
    new Project("Calculator", "#", "https://www.placecage.com/640/360"),
    new Project("Pomodoro Clock", "#", "https://www.fillmurray.com/640/360"),
    new Project("Wikipedia Searcher", "#", "https://www.placecage.com/640/360"),
    new Project("Markdown Previewer", "#", "https://www.fillmurray.com/640/360"),
    new Project("Product Landing Page", "#", "https://www.placecage.com/640/360"),
    new Project("Technical Documentation Page", "#", "https://www.fillmurray.com/640/360"),
    new Project("Tic Tac Toe", "#", "https://www.placecage.com/640/360"),
    new Project("Frogger", "#", "https://www.fillmurray.com/640/360")
];

function addProjects(arr) {
    arr.forEach(item => {
        $('#portfolio').append("<div class='project-container'><a href='" + item.link
            + "' target='_blank'><div class='project'><img src='" + item.image
            + "' alt='" + item.name + "'><h3>" +item.name + "</h3></div></a></div>");
    });
}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(() => {
        /* clipboard successfully set */
        let tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied!";
    }, () => {
        /* clipboard write failed */
        alert("Failed to copy to clipboard");
    });
}

function copyEmail() {
    updateClipboard("markskinner850@gmail.com");
}

function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function setActiveLink() {
    let navBar = document.getElementById("nav-bar");
    let navLinks = navBar.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

$(function() {
    addProjects(projects);

    setActiveLink();

    $(".nav-link").on('click', function() {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100vw");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    });
})

function toggleMenu() {
    $("#nav-bar").toggleClass("responsive");
    if ($("#nav-bar").hasClass("responsive")) {
        $("#container").css("width", "50vw");
        $(".line").removeClass("hidden");
        $(".fas").removeClass("fa-bars");
        $(".fas").addClass("fa-times");
    } else {
        $("#container").css("width", "100vw");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }
}

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 786) {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100vw");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }
});