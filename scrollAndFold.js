const toggleButton = document.querySelector('.navToggleButton');
const image = document.querySelector('.navImage');
const menu = document.querySelector('.navMenu');

toggleButton.addEventListener('click',()=>{
    menu.classList.toggle('active');
    image.classList.toggle('active');
    toggleButton.classList.toggle('unfolded')
});

// function goToMainTitle() {
//     var elmnt = document.getElementById("maintitle");
//     elmnt.scrollIntoView({
//         behavior:'smooth', 
//         block: 'center'
//     });
// }

function goToAnimation() {
  var elmnt = document.getElementById("img-sequence");
  elmnt.scrollIntoView({
      behavior:'smooth', 
      block: 'start'
  });
}

function goToWorks() {
    var elmnt = document.getElementById("works");
    elmnt.scrollIntoView({
        behavior:'smooth', 
        block: 'start'
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