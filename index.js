// // Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


//slider location voitures

      var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].classList.remove('active');
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].className += " active";
      }
 
/**************************************************** */
      // /***tableau contact responsive ***/
      // document.addEventListener('DOMContentLoaded',function(){
      //   document.querySelectorAll('.table-responsive').forEach(function(table){
      // let labels = Array.from(table.querySelectorAll('th')).map(funcion)
      //    return th.innerText
      // //   table.querySelectorAll('th').forEach(function(){
      // //     labels.push(th.innerText)
      //   })
      //   table.querySelectorAll('td').forEach(function(td, i){
      //     td.setAttribute('data-label',labels[i % labels.length)
      //   })

      // }
         
  
     
      

// pour chaque th je collecte les labels
// pour chaque td dans table
  // on recupère l'index du td
  // on va mettre le data-label qui correspond

      