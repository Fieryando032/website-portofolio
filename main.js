/*== MENU SHOW ==*/
const showMenu =(toggleId,  navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*== Active And Remove Menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*== CONTACT EMAIL */
function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_pzh46l7", "template_mem2kc2", params).then(function  (res){
        alert("Submit Berhasil !" + res.status);
    })
}

/*== SCROLL REVEAL ANIMATION ==*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*== SCROLL HOME ==*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

/*== SCROLL ABOUT ==*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/*== SCROLL SKILLS ==*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 400})
sr.reveal('.skills__img',{delay: 400})

/*== SCROLL WORKS ==*/
sr.reveal('.work__img',{interval: 200})


/*== SCROLL CONTACT ==*/
sr.reveal('.contact__input',{interval: 200}) 