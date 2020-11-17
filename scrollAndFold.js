const toggleButton = document.querySelector('.navToggleButton');
const image = document.querySelector('.navImage');
const menu = document.querySelector('.navMenu');

toggleButton.addEventListener('click',()=>{
    menu.classList.toggle('active');
    image.classList.toggle('active');
    toggleButton.classList.toggle('unfolded')
});

function goToWorks() {
    var elmnt = document.getElementById("works");
    elmnt.scrollIntoView({
        behavior:'smooth', 
<<<<<<< HEAD:scroll.js
        block: 'start',
=======
        block: 'start'
>>>>>>> a2745e11f2201ed097fac9bb8c7d8bed08baab20:scrollAndFold.js
    });
}
function goToSkills() {
    var elmnt = document.getElementById("skills");
    elmnt.scrollIntoView({
        behavior:'smooth',
        block: 'start'
    });
}
function goToLanguage() {
    var elmnt = document.getElementById("language");
    elmnt.scrollIntoView({
        behavior:'smooth',
        block: 'start'
    });
}
function goToContact() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({
        behavior:'smooth',
        block:'start'
    });
}