class Project {
    constructor(name, link, image, categories) {
        this.name = name;
        this.link = link;
        this.image = image;
        this.categories = categories;
    }
}

const projects = [
    new Project("Weather App", "https://weather-app-39e37.firebaseapp.com/", "images/weather-app.png", ["apps", "react"]),
    new Project("Markdown Previewer", "https://markdown-previewer-23554.firebaseapp.com/", "images/markdown-previewer.png", ["apps", "react"]),
    new Project("Drum Machine", "#", "images/coming-soon.jpg", ["apps", "react"]),
    new Project("Random Quote Generator", "#", "images/coming-soon.jpg", ["apps"]),
    new Project("Calculator", "#", "images/coming-soon.jpg", ["apps"]),
    new Project("Pomodoro Clock", "#", "images/coming-soon.jpg", ["apps", "react"]),
    new Project("Wikipedia Searcher", "#", "images/coming-soon.jpg", ["apps"]),
    new Project("Product Landing Page", "https://markfskinner.github.io/product-landing-page/#models", "images/product-landing-page.png", ["sites"]),
    new Project("Technical Documentation Page", "#", "images/coming-soon.jpg", ["sites"]),
    new Project("Tic Tac Toe", "#", "images/coming-soon.jpg", ["apps"]),
    new Project("Frogger", "#", "images/coming-soon.jpg", ["apps"])
];

function addProjects(arr) {
    arr.forEach(item => {
        let classes = item.categories.join(" ");
        $("#portfolio").append("<div class='project-container " + classes + "'><a href='" + item.link
            + "' target='_blank'><div class='project'><div class='img-container'><img src='" + item.image
            + "' alt='" + item.name + "'></div><h3>" + item.name + "</h3></div></a></div>");
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

function setActiveClickLink(target) {
    $('.' + target).click(function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
}

function setActiveScrollLink() {
    const navLinks = document.getElementsByClassName("nav-link");
    const hrefs = $.map(navLinks, (elem) => {
        let result = elem.href.slice(elem.href.indexOf("#"));
        if (result.length === 1) {
            return result + "intro";
        }
        return result;
    });
    const sections = $.grep(hrefs, (elem) => {
        return elem.indexOf("#") !== -1;
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
                $(sections[sections.length - 1] + "-link").addClass("active");
                break;
            }
            else if (scroll >= currentOffset && scroll < nextOffset) {
                currentLink[0].className = currentLink[0].className.replace(" active", "");
                $(sections[i] + "-link").addClass("active");
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

function filterProjects() {
    $(".category").click(function() {
        let value = $(this).attr("data-filter");
        if(value === "all") {
            $(".project-container").show("1000");
        } else {
            $(".project-container").not("." + value).hide("3000");
            $(".project-container").filter("." + value).show("3000");
        }
    });
}

//Run on page load
$(function() {
    addProjects(projects);
    setActiveClickLink("nav-link");
    setActiveScrollLink();
    setActiveClickLink("category");
    closeMenuOnClick();
    filterProjects();
})
