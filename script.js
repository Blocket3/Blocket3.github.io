$(function () {
    $(".menu-link").click(function () {
     $(".menu-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   $(function () {
    $(".main-header-link").click(function () {
     $(".main-header-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   const dropdowns = document.querySelectorAll(".dropdown");
   dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
     e.stopPropagation();
     dropdowns.forEach((c) => c.classList.remove("is-active"));
     dropdown.classList.add("is-active");
    });
   });
   
   $(".search-bar input")
    .focus(function () {
     $(".header").addClass("wide");
    })
    .blur(function () {
     $(".header").removeClass("wide");
    });
   
   $(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
     dd.removeClass("is-active");
    }
   });
   
   $(function () {
    $(".dropdown").on("click", function (e) {
     $(".content-wrapper").addClass("overlay");
     e.stopPropagation();
    });
    $(document).on("click", function (e) {
     if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
     }
    });
   });
   
   $(function () {
    $(".status-button:not(.open)").on("click", function (e) {
     $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
     $(".overlay-app").removeClass("is-active");
    });
   });
   
   $(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
   });
   
   $(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
   });
   
   const toggleButton = document.querySelector('.dark-light');
   
   toggleButton.addEventListener('click', () => {
     document.body.classList.toggle('light-mode');
   });


   fetch("https://raw.githubusercontent.com/Blocket3/Blocket3.github.io/main/code/bookmarklet%20html%20sorta")
        .then(response => response.text())
        .then(html => {
          const externalHTML = document.querySelector("#gui-js");
          externalHTML.innerHTML = html;
        })
        .catch(error => {
          console.log("Error fetching external HTML:", error);
        });


        fetch("https://raw.githubusercontent.com/Blocket3/Blocket3.github.io/main/updated.txt")
        .then(response => response.text())
        .then(text => {
          const externalText = document.querySelector("#external-text");
          if (text === "online") {
            externalText.innerText = "Updated";
          } else if (text === "offline") {
            externalText.innerText = "Under Maintenance";
          } else {
            externalText.innerText = "Unknown";
          }
        })
        .catch(error => {
          console.log("Error fetching external text file:", error);
        });

        fetch("https://raw.githubusercontent.com/Blocket3/Blocket3.github.io/main/code/Gui%20button%202")
        .then(response => response.text())
        .then(html => {
          const externalHTML = document.querySelector("#button-2js");
          externalHTML.innerHTML = html;
        })
        .catch(error => {
          console.log("Error fetching external HTML:", error);
        });
