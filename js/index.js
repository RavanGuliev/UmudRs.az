 const submit = document.getElementById("submit")

 function gonder(){
    alert("Diqqət! Sistem hal-hazırda aktiv deyil, zəhmət olmasa əlaqə nömrələri və yaxut mail ile müraciət edin. Diqqətiniz üçün təşəkkürlər")
 }


document.addEventListener("DOMContentLoaded", function () {
   const scrollToTopBtn = document.getElementById("scrollToTop");

   window.addEventListener("scroll", () => {
       if (window.scrollY > 200) {
           scrollToTopBtn.classList.remove("hidden", "fade-out");
           scrollToTopBtn.classList.add("fade-in", "opacity-100");
       } else {
           scrollToTopBtn.classList.remove("fade-in", "opacity-100");
           scrollToTopBtn.classList.add("fade-out", "hidden");
       }
   });

   scrollToTopBtn.addEventListener("click", () => {
       window.scrollTo({ top: 0, behavior: "smooth" });
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const scrollToTopBtn = document.getElementById("scrollTowp");

   window.addEventListener("scroll", () => {
       if (window.scrollY > 200) {
           scrollToTopBtn.classList.remove("hidden", "fade-out");
           scrollToTopBtn.classList.add("fade-in", "opacity-100");
       } else {
           scrollToTopBtn.classList.remove("fade-in", "opacity-100");
           scrollToTopBtn.classList.add("fade-out", "hidden");
       }
    
   });

  
});

