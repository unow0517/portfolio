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
<<<<<<< HEAD:scrollAndFold.js
        block: 'start'
=======
        block: 'end',
>>>>>>> 6c0b08c2b579585b35c9e205eaad39f89bf02669:scroll.js
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