/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


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
};


/*==================== scroll reveal ====================*/


/*==================== typed js ====================*/