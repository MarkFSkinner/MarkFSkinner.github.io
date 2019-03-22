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
        //clipboard successfully set
        const tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied!";
    }, () => {
        //clipboard copy failed
        alert("Failed to copy to clipboard");
    });
}

function copyEmail() {
    let emailText = $('#email-text').text();
    updateClipboard(emailText);
}

function outFunc() {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function setActiveClickLink() {
    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function setActiveScrollLink() {
    const navLinks = document.getElementsByClassName('nav-link');
    const hrefs = $.map(navLinks, (elem) => {
        let result = elem.href.slice(elem.href.indexOf('#'));
        if (result.length === 1) {
            return result + 'intro';
        }
        return result;
    });
    const sections = $.grep(hrefs, (elem) => {
        return elem.indexOf('#') !== -1;
    });
    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + 1;
        let scrollBottom = $(window).scrollTop() + $(window).height();
        let lastOffset = $(sections[sections.length - 1]).offset().top;
        for (let i = 0; i < sections.length; i++) {
            let currentOffset = $(sections[i]).offset().top;
            if (currentOffset > scroll) {
                break;
            }
            let nextOffset = $(sections[i + 1]).offset().top;
            let currentLink = document.getElementsByClassName("active");
            if (scrollBottom > lastOffset) {
                currentLink[0].className = currentLink[0].className.replace(" active", "");
                $(sections[sections.length - 1] + '-link').addClass("active");
                break;
            }
            else if (scroll >= currentOffset && scroll < nextOffset) {
                currentLink[0].className = currentLink[0].className.replace(" active", "");
                $(sections[i] + '-link').addClass("active");
                break;
            }
        }
    });
}

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
    let viewportWidth = $(window).width();
    if (viewportWidth > 786) {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    }
});

function closeMenuOnClick() {
    $(".nav-link").on('click', function() {
        $("#nav-bar").removeClass("responsive");
        $("#container").css("width", "100%");
        $(".line").addClass("hidden");
        $(".fas").removeClass("fa-times");
        $(".fas").addClass("fa-bars");
    });
}

//Run on page load
$(function() {
    addProjects(projects);
    setActiveClickLink();
    setActiveScrollLink();
    closeMenuOnClick();
})
