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

// -------------------------------------
//     header sticky nav js end
// -------------------------------------

// -------------------------------------
//     search-input js start
// -------------------------------------

$(document).ready(function () {

    $('.search-wrapper').hide();

    $('.search-icon-hover').click(function (e) { 
        e.preventDefault();
        $('.search-wrapper').slideDown('slow');
        $('.search-item-wrapper').mouseleave(function () { 
            $('.search-wrapper').slideUp('slow');
        });
    });
});

// -------------------------------------
//     search-input js start
// -------------------------------------

// -------------------------------------
//     form-input js start
// -------------------------------------

$(document).ready(function () {
   
    const email_phone_val = document.getElementById('email-phone-input');
    const pass_input_val = document.getElementById('pass-input-area');
    const email_submit_val = document.getElementById('email-submit-btn');
    const pass_submit_val = document.getElementById('pass-submit-btn');
    $(pass_input_val).hide();

    $(email_phone_val).keyup(function (e) { 
        const email_phone_current_val = e.currentTarget.value;

        if (email_phone_current_val == "") {
            email_submit_val.disabled = true;
        } else {
            email_submit_val.disabled = false;
                $(email_submit_val).click(function (e) { 
                e.preventDefault();

                $(email_submit_val).hide();
                $(pass_input_val).slideDown("slow");
                $('#email-phone-input').addClass('email-input');

                $(pass_input_val).keyup(function (e) { 
                    const pass_current_val = e.currentTarget.value;

                    if (pass_current_val == "") {
                        pass_submit_val.disabled = true;
                    } else {
                        pass_submit_val.disabled = false;
                        $(pass_submit_val).click(function (e) { 
                            e.preventDefault();
                            window.location.href = 'two-factor-sign-in.html';
                        });
                    }
                });
            });
        }
    });

});

// -------------------------------------
//     form-input js end
// -------------------------------------