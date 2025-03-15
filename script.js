const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

document.addEventListener("DOMContentLoaded", function () {
    const text = "Hey there! I'm Jesselyn Vania Angelie";
    const speed = 100; // Typing speed in milliseconds
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("typewriter").innerHTML += '<span class="cursor"></span>'; 
        }
    }

    typeWriter();
});

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-transparent', 'shadow-sm', 'bg-opacity-50', 'backdrop-blur-lg',
            'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50',
            'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-transparent', 'shadow-sm', 'bg-opacity-50', 'backdrop-blur-lg',
            'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50',
            'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

//light mode and dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}

//flip image for about me
const flip = document.querySelector('.flip');

flip.addEventListener('mousedown', () => {
    flip.classList.add('clicked');
});

flip.addEventListener('mouseup', () => {
    flip.classList.remove('clicked');
});

flip.addEventListener('mouseleave', () => {
    flip.classList.remove('clicked');
});

//get user's name
function getName(event){
    if(event.key === "Enter"){
        let name = document.getElementById("username").value;
        document.getElementById("greet").innerText = "Hello, " + name + "!";
    }
}