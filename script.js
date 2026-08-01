document.addEventListener("DOMContentLoaded", () =>{
    const menuBtn=
    document.getElementById("menu-btn");
    const menu=
    document.getElementById("menu");
    if (menuBtn && menu){
        menuBtn.addEventListener("click", () =>
            {
    menu.classList.toggle("active");
             if
     (menu.classList.contains("active"))  {
        menuBtn.innerHTML = "X";
     } else{
        menuBtn.innerHTML = "";
     }     
      });

      const menuLinks =
        menu.querySelectorAll("a")
        menuLinks.forEach(link => {
    link.addEventListener("click", () =>{
    menu.classList.remove("active");
menuBtn.innerHTML = "";
    });
 });  
}

const form =
    document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event){
            event.preventDefault();
            const name =
    form.querySelector(
                'input[type="text"]'
            ).value.trim();
            const email =
    form.querySelector(
        'input[type="email"]'
           ).ariaValueMax.trim();
           const message =
           form.querySelector(
            "textarea"
           ).value.trim();
           if (name=== "" || email === "" || message === ""){
            alert("Please complete all fields.");
            return;
           }
           alert("Thank you, " + name + "! Your message has been received.");
           form.reset();
        });
    }

    const sections =  
    document.querySelector("section");

    const revealSections = () => {
        sections.forEach(section =>{

            const sectionTop

            section.getBoundingClientRect().top;

            const windowHeight =
            window.innerHeight;

            if (sectionTop <
            windowHeight - 100){

                section.classList.add("show");
            }
        });

        };
        window.addEventListener("scroll",
        revealSections);

        revealSections();

        const footerText = 
        document.querySelector("footer p");

        if (footerText) {

            const currentYear = new
            Date().getFullYear();

            footerText.innerHTML =
            "&copy" +
            currentYear +
            "KLCOE College of Education. All Rights Reserved."
        }

        const backToTop =
        document.createElement("button");

    backToTop.innerHTML = "";

    backToTop.id = "backToTop";

    document.body.appendChild(backToTop);

   backToTop.addEventListener("click",
       () =>{

          window.scrollTo({
               top:0,
               behavior:"smooth"
            })
        });

        window.addEventListener("scroll",
            () => {
                

               if (window.scrollY > 400) {

                backToTop.classList.add("visible");
               }else {
                  
                backToTop.classList.remove("visible");
               }
            });   
});