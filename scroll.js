function goToWorks() {
    var elmnt = document.getElementById("works");
    elmnt.scrollIntoView({
        behavior:'smooth', 
        block: 'end',
    });
}
function goToSkills() {
    var elmnt = document.getElementById("skills");
    elmnt.scrollIntoView({
        behavior:'smooth',
        block: 'center'
    });
}
function goToLanguage() {
    var elmnt = document.getElementById("language");
    elmnt.scrollIntoView({
        behavior:'smooth',
        block: 'center'
    });
}
function goToContact() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({
        behavior:'smooth',
        block:'center'
    });
}