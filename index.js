let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("wrapper section");

let lastId;
let cur = [];

if(window.innerWidth <= 430){ //conditional based on max width like media query --mobile_s10--
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
}else if(window.innerWidth <= 501) {// --mobile--
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
        // console.log(2)
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
}else if (window.innerWidth <= 1441){// --laptop--
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 405;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop + 75 &&
        section.offsetTop + section.offsetHeight > fromTop + 75
      ) {
        link.classList.add("current");
        // console.log(link)
        // console.log(3)
      } else {
        link.classList.remove("current");
      }
    });
  });
}else if (window.innerWidth >= 1441){// --desktop--
  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 750;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop + 105 &&
        section.offsetTop + section.offsetHeight > fromTop + 105
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
// console.log(document.querySelector(link.hash).offsetTop)
