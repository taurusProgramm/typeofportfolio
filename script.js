let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // console.log(window.scrollY);
        
        if(top>=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contacts form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right', });

const typed = new Typed('.multiple-text', {
    strings: [ 'Warden of the North',' King in the North', 'Daenerys Targaryen\'s fucker', 'Lord Commander'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});






// Array.prototype.myMap = function(callback){
//     const result = [];
    
//     for (let i = 0; i<this.length; i++){
//         let res = callback(this[i], i, this);
//         result.push(res);
//     }
//     return result;
// };

// let user = {
//     name: 'John',
//     somefn(){
//         console.log('this of that obj: '+ this);
//         console.log('name: '+ this.name);
//     }
// }

// setTimeout(function(){
//     console.log(this)
//     user.somefn()
// }, 1000);


