

var back = document.querySelector("#back");
var left = document.querySelector("#left-side");
var right = document.querySelector("#right-side");
var menuFont = document.querySelectorAll(".menu-element");
var aside = document.querySelector(".aside");
var contentWindow = document.querySelector("#window");
var interests = document.querySelector("#interests");
var generalInfo = document.querySelector("#generalInfo");
var closeGeneral = document.querySelector("#closeGeneral");
var arrowInfo = document.querySelector(".arrow-info");
var mainTitle = document.querySelector(".main-title");
var mainContent = document.querySelector(".mainContent");
var background = document.querySelector("#background-image");
var home = document.querySelectorAll(".home-menu");
var skill = document.querySelectorAll(".skill-menu");
var work = document.querySelectorAll(".work-menu");
var contact = document.querySelectorAll(".contact-menu");
var hamBars = document.querySelector("#ham-bars");
var mobileNav = document.querySelector("#mobile-nav");
var desktopNav = document.querySelector("#nav");
var contentBlock = document.querySelector(".content-block");


background.style.backgroundImage = "url('../img/me8.jpg');";

back.addEventListener("click", function(){
    left.classList.toggle("slideLeft");
    aside.classList.toggle("asideSlide");
    right.classList.toggle("slideRight");
    back.classList.toggle("rotate");
    interests.classList.add("interests-animation");
    desktopNav.firstElementChild.classList.toggle("left-ul-right");
    menuFont.forEach(function(elem){
      elem.classList.toggle("font-change");
    });
}, false);

aside.addEventListener("mouseenter", function(){
  left.classList.add("hider");
  right.classList.add("hider");
  interests.classList.add("hider");
}, false);

aside.addEventListener("mouseleave", function(){
  left.classList.remove("hider");
  right.classList.remove("hider");
  interests.classList.remove("hider");
}, false);

// general.addEventListener("click", function(){
//   var generalInfo = document.querySelector("#generalInfo");
//   // generalInfo.classList.add("show");
//   setTimeout(function(){
//     generalInfo.classList.add("show");
//   }, 1);
// }, false);

closeGeneral.addEventListener("click", function(){
  hideGeneral();
}, false);

function hideGeneral(){
  generalInfo.classList.add("general-hide");
  setTimeout(function(){
    generalInfo.classList.remove("show");
    generalInfo.classList.remove("general-hide");
  }, 200);
}

window.setInterval(arrowAnimate, 3600);
function arrowAnimate(){
  arrowInfo.classList.toggle("arrow-info-animation");
}

document.body.addEventListener( 'click', bodyClick, false );

function bodyClick(e){
  var general = document.querySelector(".content-block .general");
  var element = document.elementFromPoint(e.clientX, e.clientY);
  console.log(e.target);
  if(generalInfo.classList == "show"){
    if(element !== generalInfo && !generalInfo.contains(element) && element !== back){
      hideGeneral();
    }
  }
  if(e.target.innerHTML == "general"){
    setTimeout(function(){
      generalInfo.classList.add("show");
    }, 1);
  }
}

hamBars.addEventListener("click", function(){
  mobileNav.classList.toggle("left-mobile-slide");
  mobileNav.classList.toggle("left-mobile-slide-out");
  this.classList.toggle("ham-clicked");
  this.classList.toggle("fa-bars");
  this.classList.toggle("fa-times");
}, false);

for (var i = 0; i < home.length; i++) {
  home[i].addEventListener("click", function(){
      var XHR = new XMLHttpRequest();
      // mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide-out");
      hamBars.classList.toggle("ham-clicked");
      hamBars.classList.toggle("fa-bars");
      hamBars.classList.toggle("fa-times");

      XHR.onreadystatechange = function(){
        if(XHR.readyState == 1) {
          mainTitle.classList.remove("ajaxFadeIn");
          mainContent.classList.remove("ajaxFadeIn");
          interests.classList.remove("ajaxFadeIn");
          background.classList.remove("ajaxFadeIn");
          mainTitle.classList.add("ajaxFadeOut");
          mainContent.classList.add("ajaxFadeOut");
          interests.classList.add("ajaxFadeOut");
          background.classList.add("ajaxFadeOut");
        }
        if(XHR.readyState == 4) {
          if(XHR.status == 200) {
            var title = JSON.parse(XHR.responseText).home.title;
            mainTitle.textContent = title;
            var contentMain = JSON.parse(XHR.responseText).home.content;
            mainContent.innerHTML = contentMain;
            var interestsContent = JSON.parse(XHR.responseText).home.interests;
            interests.textContent = interestsContent;
            var backgroundImage = JSON.parse(XHR.responseText).home.background;
            background.style.backgroundImage = backgroundImage;
            mainTitle.classList.remove("ajaxFadeOut");
            mainContent.classList.remove("ajaxFadeOut");
            interests.classList.remove("ajaxFadeOut");
            background.classList.remove("ajaxFadeOut");
            mainTitle.classList.add("ajaxFadeIn");
            mainContent.classList.add("ajaxFadeIn");
            interests.classList.add("ajaxFadeIn");
            background.classList.add("ajaxFadeIn");
          }
        }
      };

      XHR.open("GET", "main.json");
      XHR.send();

      var XHR2 = new XMLHttpRequest();

      XHR2.onreadystatechange = function(){
        if(XHR2.readyState == 4) {
          if(XHR2.status == 200) {
            mainContent.innerHTML = XHR2.responseText;
            console.log(XHR2.responseText);
          }
        }
      };

      XHR2.open("GET", "home.html");
      XHR2.send();
  }, false);
}

for (var i = 0; i < skill.length; i++) {
  skill[i].addEventListener("click", function(){
      var XHR = new XMLHttpRequest();
      // mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide-out");
      hamBars.classList.toggle("ham-clicked");
      hamBars.classList.toggle("fa-bars");
      hamBars.classList.toggle("fa-times");

      XHR.onreadystatechange = function(){
        if(XHR.readyState == 1) {
          mainTitle.classList.remove("ajaxFadeIn");
          mainContent.classList.remove("ajaxFadeIn");
          interests.classList.remove("ajaxFadeIn");
          background.classList.remove("ajaxFadeIn");
          mainTitle.classList.add("ajaxFadeOut");
          mainContent.classList.add("ajaxFadeOut");
          interests.classList.add("ajaxFadeOut");
          background.classList.add("ajaxFadeOut");
        }
        if(XHR.readyState == 4) {
          if(XHR.status == 200) {
            var title = JSON.parse(XHR.responseText).skill.title;
            mainTitle.textContent = title;
            var contentMain = JSON.parse(XHR.responseText).skill.content;
            mainContent.innerHTML = contentMain;
            var interestsContent = JSON.parse(XHR.responseText).skill.interests;
            interests.textContent = interestsContent;
            var backgroundImage = JSON.parse(XHR.responseText).skill.background;
            background.style.backgroundImage = backgroundImage;
            mainTitle.classList.remove("ajaxFadeOut");
            mainContent.classList.remove("ajaxFadeOut");
            interests.classList.remove("ajaxFadeOut");
            background.classList.remove("ajaxFadeOut");
            mainTitle.classList.add("ajaxFadeIn");
            mainContent.classList.add("ajaxFadeIn");
            interests.classList.add("ajaxFadeIn");
            background.classList.add("ajaxFadeIn");
          }
        }
      };

      XHR.open("GET", "main.json");
      XHR.send();

      var XHR2 = new XMLHttpRequest();

      XHR2.onreadystatechange = function(){
        if(XHR2.readyState == 4) {
          if(XHR2.status == 200) {
            mainContent.innerHTML = XHR2.responseText;
          }
        }
      };

      XHR2.open("GET", "skill.html");
      XHR2.send();
  }, false);
}

for (var i = 0; i < work.length; i++) {
  work[i].addEventListener("click", function(){
      var XHR = new XMLHttpRequest();
      // mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide-out");
      hamBars.classList.toggle("ham-clicked");
      hamBars.classList.toggle("fa-bars");
      hamBars.classList.toggle("fa-times");

      XHR.onreadystatechange = function(){
        if(XHR.readyState == 1) {
          mainTitle.classList.remove("ajaxFadeIn");
          mainContent.classList.remove("ajaxFadeIn");
          interests.classList.remove("ajaxFadeIn");
          background.classList.remove("ajaxFadeIn");
          mainTitle.classList.add("ajaxFadeOut");
          mainContent.classList.add("ajaxFadeOut");
          interests.classList.add("ajaxFadeOut");
          background.classList.add("ajaxFadeOut");
        }
        if(XHR.readyState == 4) {
          if(XHR.status == 200) {
            var title = JSON.parse(XHR.responseText).work.title;
            mainTitle.textContent = title;
            var contentMain = JSON.parse(XHR.responseText).work.content;
            mainContent.innerHTML = contentMain;
            var interestsContent = JSON.parse(XHR.responseText).work.interests;
            interests.textContent = interestsContent;
            var backgroundImage = JSON.parse(XHR.responseText).work.background;
            background.style.backgroundImage = backgroundImage;
            mainTitle.classList.remove("ajaxFadeOut");
            mainContent.classList.remove("ajaxFadeOut");
            interests.classList.remove("ajaxFadeOut");
            background.classList.remove("ajaxFadeOut");
            mainTitle.classList.add("ajaxFadeIn");
            mainContent.classList.add("ajaxFadeIn");
            interests.classList.add("ajaxFadeIn");
            background.classList.add("ajaxFadeIn");
          }
        }
      };

      XHR.open("GET", "main.json");
      XHR.send();

      var XHR2 = new XMLHttpRequest();

      XHR2.onreadystatechange = function(){
        if(XHR2.readyState == 4) {
          if(XHR2.status == 200) {
            mainContent.innerHTML = XHR2.responseText;
          }
        }
      };

      XHR2.open("GET", "work.html");
      XHR2.send();
  }, false);
}

for (var i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", function(){
      var XHR = new XMLHttpRequest();
      // mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide");
      mobileNav.classList.toggle("left-mobile-slide-out");
      hamBars.classList.toggle("ham-clicked");
      hamBars.classList.toggle("fa-bars");
      hamBars.classList.toggle("fa-times");

      XHR.onreadystatechange = function(){
        if(XHR.readyState == 1) {
          mainTitle.classList.remove("ajaxFadeIn");
          mainContent.classList.remove("ajaxFadeIn");
          interests.classList.remove("ajaxFadeIn");
          background.classList.remove("ajaxFadeIn");
          mainTitle.classList.add("ajaxFadeOut");
          mainContent.classList.add("ajaxFadeOut");
          interests.classList.add("ajaxFadeOut");
          background.classList.add("ajaxFadeOut");
        }
        if(XHR.readyState == 4) {
          if(XHR.status == 200) {
            var title = JSON.parse(XHR.responseText).contact.title;
            mainTitle.textContent = title;
            var contentMain = JSON.parse(XHR.responseText).contact.content;
            mainContent.innerHTML = contentMain;
            var interestsContent = JSON.parse(XHR.responseText).contact.interests;
            interests.textContent = interestsContent;
            var backgroundImage = JSON.parse(XHR.responseText).contact.background;
            background.style.backgroundImage = backgroundImage;
            mainTitle.classList.remove("ajaxFadeOut");
            mainContent.classList.remove("ajaxFadeOut");
            interests.classList.remove("ajaxFadeOut");
            background.classList.remove("ajaxFadeOut");
            mainTitle.classList.add("ajaxFadeIn");
            mainContent.classList.add("ajaxFadeIn");
            interests.classList.add("ajaxFadeIn");
            background.classList.add("ajaxFadeIn");
          }
        }
      };

      XHR.open("GET", "main.json");
      XHR.send();

      var XHR2 = new XMLHttpRequest();

      XHR2.onreadystatechange = function(){
        if(XHR2.readyState == 4) {
          if(XHR2.status == 200) {
            mainContent.innerHTML = XHR2.responseText;
          }
        }
      };

      XHR2.open("GET", "contact.html");
      XHR2.send();
  }, false);
}
