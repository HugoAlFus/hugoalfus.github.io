/* ================================== Portfolio Info ================================== */
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.portfolio-overlay').style.opacity = '1';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.portfolio-overlay').style.opacity = '0';
    });
});
/* ================================== Typing Animation ================================== */
var typed = new Typed(".typing", {
    strings: ["", "Desarrollador de Aplicaciones", "Desarrollador Junior"],
    typeSpeed: 100,
    BackSpeed: 40,
    loop: true
});
/* ================================== Aside ================================== */
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

let currentActive = document.querySelector('.section.active'); // Guardar sección activa inicial

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function(e) {
        e.preventDefault();

        // Remover clases activas
        navlist.forEach(item => item.querySelector("a").classList.remove("active"));
        allSection.forEach(section => {
            section.classList.remove("active", "back-section");
        });

        // Nueva sección activa
        this.classList.add("active");
        const target = this.getAttribute("href").substring(1);
        const newActive = document.getElementById(target);

        // Manejar back-section
        if(currentActive && currentActive !== newActive) {
            currentActive.classList.add("back-section");
        }

        newActive.classList.add("active");
        currentActive = newActive; // Actualizar referencia

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

// Resto del código sin cambios...

function showSection(element) {

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn()
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}