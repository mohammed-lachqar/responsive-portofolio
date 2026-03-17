///navbar
const mobilebar = document.querySelector(".mobile-bar")
const menu =document.querySelector(".menu")
function showmobileBar(){
    mobilebar.style.display = 'block'
    menu.style.opacity= "0";
}
function hidemobileBar(){
    // you can change style whid this line
    mobilebar.style.display = 'none'
    menu.style.opacity= "1";
}
const home =document.getElementById('home');
const project =document.getElementById('projects');
const about =document.getElementById('about');
const skills =document.getElementById('skills');
const contact =document.getElementById('contact');

// function hideall(){
//     home.style.display = "none"
//     project.style.display = "none"
//     about.style.display = "none"
//     skills.style.display = "none"
//     contact.style.display = "none"
// }
function homepage(){
    home.style.display = 'flex';
    project.style.display = "none"
    about.style.display = "none"
    skills.style.display = "none"
    contact.style.display = "none"
}
function aboutpage(){
    about.style.display = 'flex';
    home.style.display = "none"
    project.style.display = "none"
    skills.style.display = "none"
    contact.style.display = "none"
}
function projectpage(){
    project.style.display = 'block';
    home.style.display = "none"
    about.style.display = "none"
    skills.style.display = "none"
    contact.style.display = "none"
}
function skillspage(){
    skills.style.display = 'block';
    home.style.display = "none"
    project.style.display = "none"
    about.style.display = "none"
    contact.style.display = "none"
}
function contactpage(){
    contact.style.display = 'flex';
    home.style.display = "none"
    project.style.display = "none"
    about.style.display = "none"
    skills.style.display = "none"
}

homepage();


