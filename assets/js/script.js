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
for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
}
for (let i = 0; i < totalNavList; i++) {

    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section")
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn()
        }
    })
}

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