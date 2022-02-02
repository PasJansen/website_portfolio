"use strict";

// Header

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
<a class="navbar-brand" href="index.html">Pascal Jansen </a>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Startseite</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="projekte.html">Projekte</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="bildung.html">Bildung</a></li>
   <li class="nav-item">
   <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()" checked>
   </li>
  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <p class="tag" >“Experience is the name everyone gives to their mistakes." – Oscar Wilde</p>
    </div>


    <div class="container">
      <div class="row">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Schreiben Sie mir eine Nachricht</h6>
              </div>
                <form>
                  <form accept-charset="UTF-8">
                  <input type="text" name="feld1" placeholder="Ihr Name" required/>
                  <input type="email" name="feld2" placeholder="Ihre E-Mail Adresse"  required/>
                  <textarea name="field3" placeholder="Ihre Nachricht" required></textarea>
                  <input type="submit" value="Absenden" />
                </form>
             </div>
          </div>
    </div>


    

    <div class="rounded-social-buttons tag">
        <a class="social-button linkedin" href="https://www.linkedin.com/in/pascal-jansen/" target="_blank" >
    <!-- SVG Code für LinkedIn Icon -->
      <svg class="linkedin-icon-footer" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>

    <a class="social-button github" href="https://github.com/PasJansen" target="_blank">
    <!-- SVG Code für Github Icon-->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- Körper -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- Arm    -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>
    </div>
    </div>
</footer>
`);

//"Scroll Button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

$(document).ready(function () {
    updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

    $(window).scroll(function () {
        if ($(window).scrollTop() < $(window).height()) {
            $("#btnScrollToTop").css("visibility", "hidden");
        } else {
            $("#btnScrollToTop").css("visibility", "visible");
            if (
                $(window).scrollTop() + $(window).height() >
                $(document).height() - 838
            ) {
                $("#btnScrollToTop").css("background-color", "#6a00bb");
            } else {
                $("#btnScrollToTop").css("background-color", "#6a00bb");
            }
        }
    });
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Window Laden
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
    bodyElement.append(upArrow);
    $("#btnScrollToTop").css("visibility", "hidden");

    const menuBtn = document.querySelector(".navbar-toggler");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    });
});

$(function () {
    $("#js-tog5").on("click", function () {
        $(this).toggleClass("is-active");
    });
});


let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
}
$(function () {
    $("a.nav-link").each(function () {
        if ($(this).prop("href") == window.location.href) {
            $(this).addClass("current-link");
        }
    });
});

$(document).ready(function () {
    $("a.nav-link").hover(
        function () {
            $(this).removeClass("current-link");
        },
        function () {
            if ($(this).prop("href") == window.location.href) {
                $(this).addClass("current-link");
            }
        }
    );
});

if (localStorage.getItem("lightMode") == "light") {
    var app = document.getElementsByTagName("HTML")[0];
    app.setAttribute("light-mode", "light");

    //to add dark theme to nav bar after its been loaded
    window.addEventListener("load", function () {
        var nav = document.getElementById("navbar");
        nav.classList.remove("dark-theme");
        document.getElementById("dark_toggler").checked = false;
    });

    var sc = document.getElementsByClassName("socialicon");
    for (var i = 0; i < sc.length; i++) {
        sc[i].classList.remove("dsc");
    }
} else {
    localStorage.setItem("lightMode", "dark");
}

function toggle_light_mode() {
    console.log(localStorage.getItem("lightMode"));
    var app = document.getElementsByTagName("HTML")[0];
    var nav = document.getElementById("navbar");
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
        nav.classList.remove("dark-theme");
        var sc = document.getElementsByClassName("socialicon");
        for (var i = 0; i < sc.length; i++) {
            sc[i].classList.remove("dsc");
        }
    } else {
        nav.classList.add("dark-theme");
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
        var sc = document.getElementsByClassName("socialicon");
        for (var i = 0; i < sc.length; i++) {
            sc[i].classList.add("dsc");
        }
    }
    updateColorOfSwiperBullets(localStorage.getItem("lightMode"));
}
function updateColorOfSwiperBullets(lightMode) {
    document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
        if (lightMode == "light") {
            bullet.style.backgroundColor = "blue";
        } else {
            bullet.style.backgroundColor = "white";
        }
    });
}

window.addEventListener("storage", function () {
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    } else {
        app.setAttribute("light-mode", "light");
    }
});

$(window).on("load", function () {
    setTimeout(function () {
        $(".no-scroll-preload").css("overflow", "visible");
    }, 1000);
    $(".loader-container").fadeOut(2500);
});
