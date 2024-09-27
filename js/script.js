/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click",()=>{

    console.log("On a cliqué---");

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle('activeNav');
})


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    console.log("On scroll actuellement");

    sections.forEach(sec=>{

        let top= window.scrollY;

        let offsetTop= sec.offsetTop -150;

        let offsetHeight=sec.offsetHeight;

        let id= sec.getAttribute('id');
        console.log(top);
        console.log(sec.offsetHeight);

        if(top >= offsetTop && top <offsetTop+offsetHeight){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })

    menuIcon.classList.remove("bx-x");

    navbar.classList.remove("activeNav");
};


/*==================== scroll reveal ====================*/

ScrollReveal({ reset: true,distance:"80px",duration:2000,delay:200});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'})

ScrollReveal().reveal('.home-image,.about-img ,.about-content,.services-container,.portfolio-container,form',{origin:'bottom'})

/*==================== typed js ====================*/

const typed= new Typed(".multiple-text",{
    strings:["FullStack Web Developer","FullStack Mobile Developer","Videos Games Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
})
