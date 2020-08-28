let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("wrapper section");

let lastId;
let cur = [];

if(window.innerWidth <= 501){ //conditional based on max width like media query --mobile--
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 280;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop + 105 &&
        section.offsetTop + section.offsetHeight > fromTop + 105
      ) {
        link.classList.add("current");
        // console.log(link)
        // console.log(1)
      } else {
        link.classList.remove("current");
      }
    });
  });
}else if(window.innerWidth <= 801) {// --tablet--
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 200;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop + 125 &&
        section.offsetTop + section.offsetHeight > fromTop + 125
      ) {
        link.classList.add("current");
        // console.log(link)
        // console.log(2)
      } else {
        link.classList.remove("current");
      }
    });
  });
}else if (window.innerWidth >= 800){// --desktop--
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 750;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop + 95 &&
        section.offsetTop + section.offsetHeight > fromTop + 95
      ) {
        link.classList.add("current");
        // console.log(link)
        // console.log(3)
      } else {
        link.classList.remove("current");
      }
    });
  });
}


// console.log(window.innerWidth)
