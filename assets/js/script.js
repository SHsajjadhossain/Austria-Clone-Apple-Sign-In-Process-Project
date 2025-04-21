// -------------------------------------
//     header sticky nav js start
// -------------------------------------

document.addEventListener('scroll', () => {
    let headerSticky = document.getElementById('header-sticky-part');
    if(window.scrollY > 0) {
        headerSticky.classList.remove('d-none');
    }
    else{
        headerSticky.classList.add('d-none');
    }
})

document.addEventListener('scroll', () => {
    let headerNav = document.getElementById('header-part');
    if(window.scrollY > 0) {
        headerNav.classList.add('d-none');
    }
    else{
        headerNav.classList.remove('d-none');
    }
})

// document.addEventListener('mouseover', () => {
//     let navItem = document.getElementsByClassName('nav-item');
//     if(window.mouse > 0) {
//         headerSticky.classList.remove('d-none');
//     }
//     else{
//         headerSticky.classList.add('d-none');
//     }
// })

// $(document).ready(function () {
//     $('.nav-item').mousemove(function (e) { 
//         $('#mega-menu').removeClass('d-none');
//     });
// });

// -------------------------------------
//     header sticky nav js end
// -------------------------------------

// -------------------------------------
//     form-input js start
// -------------------------------------

$(document).ready(function () {
   
    const email_phone_val = document.getElementById('email-phone-input');
    const submit_val = document.getElementById('submit-btn');

    email_phone_val.addEventListener("keyup", (e) =>{
        const email_phone_current_val = e.currentTarget.value;

        if (email_phone_current_val == "") {
            submit_val.disabled = true;
        } else {
            submit_val.disabled = false;
        }
    });

});

// -------------------------------------
//     form-input js end
// -------------------------------------