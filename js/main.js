document.addEventListener('DOMContentLoaded',()=>{

const head_nav_bgr_btn = document.querySelector('.header_nav_sec3');
const head_nav_bgr_clsbtn = document.querySelector('.header_nav_sec4');

const header_sec = document.querySelector('.header_sec');
const header_nav = document.querySelector('.header_nav');
const header_nav_br_btn = document.querySelector('.header_nav_br_btn');

const header_nav_options = document.querySelector('.header_nav_options');
const header_nav_options_br_btn = document.querySelector('.header_nav_options_br_btn');

const head_nav_bgr_cls_btn = document.querySelector('.header_nav_sec4_shrt');






head_nav_bgr_btn.addEventListener('click',()=>{
    header_nav.classList.add('header_nav_br_btn');
})

head_nav_bgr_btn.addEventListener('click',()=>{
    header_nav.classList.add('header_nav_br_btn');
})

head_nav_bgr_btn.addEventListener('click',()=>{
    header_nav_options.classList.add('header_nav_options_br_btn');
})

head_nav_bgr_btn.addEventListener('click',()=>{
    head_nav_bgr_btn.classList.add('d-none');
})

head_nav_bgr_clsbtn.addEventListener('click',()=>{
    head_nav_bgr_btn.classList.remove('d-none');
})
head_nav_bgr_clsbtn.addEventListener('click',()=>{
    header_nav.classList.remove('header_nav_br_btn');
})

head_nav_bgr_clsbtn.addEventListener('click',()=>{
    header_nav_options.classList.remove('header_nav_options_br_btn');
})

head_nav_bgr_clsbtn.addEventListener('click',()=>{
    header_nav_options.classList.remove('header_nav_options_br_btn');
})

head_nav_bgr_btn.addEventListener('click',()=>{
    head_nav_bgr_clsbtn.classList.remove('d-none');
})

head_nav_bgr_clsbtn.addEventListener('click',()=>{
    head_nav_bgr_clsbtn.classList.add('d-none')
})

const login_btn = document.querySelector('.login_btn');
const login_page = document.querySelector('.login_page');
const open_login_page = document.querySelector('.open_login_page');
const login_page_shrt_scrn = document.querySelector('.login_page_shrt_scrn');

const header = document.querySelector('.header');
const header_shrt_scrn = document.querySelector('.header_shrt_scrn');

const login_pg_cls_btn = document.querySelector('.login_pg_cls_btn');
const head_nav_sign_up_btn = document.querySelector('.head_nav_sign_up_btn');
const signup_pg_cls_btn = document.querySelector('.signup_pg_cls_btn');
const  login_pg_link = document.querySelector('.login_pg_link');
const signup_page_link = document.querySelector('.signup_page_link');
const signup_page = document.querySelector('.signup_page');
const open_signup_page =document.querySelector('.open_signup_page');


// head_nav_bgr_btn.addEventListener('click',()=>{
//     header.classList.add('header_shrt_scrn');
//     login_page.classList.add('login_page_shrt_scrn');
// })

// head_nav_bgr_clsbtn.addEventListener('click',()=>{
//     header.classList.remove('header_shrt_scrn');
// })

login_btn.addEventListener('click',()=>{
    login_page.classList.add('open_login_page');
})

// login_pg_link.addEventListener('click',()=>{
//     login_page.classList.add('open_login_page');
// })

login_btn.addEventListener('click',()=>{
    header_sec.classList.add('d-none');
    header_nav.classList.add('d-none');
})

login_pg_cls_btn.addEventListener('click',()=>{
    header_sec.classList.remove('d-none');
    header_nav.classList.remove('d-none');
    login_page.classList.remove('open_login_page');

})


head_nav_sign_up_btn.addEventListener('click',()=>{
    open_signup_page
    signup_page.classList.add('open_signup_page');
    header_sec.classList.add('d-none');
    header_nav.classList.add('d-none');
})


signup_pg_cls_btn.addEventListener('click',()=>{
    signup_page.classList.remove('open_signup_page');
    header_sec.classList.remove('d-none');
    header_nav.classList.remove('d-none');
    login_page.classList.remove('open_login_page');
})

login_pg_link .addEventListener('click',()=>{
    signup_page.classList.remove('open_signup_page');
    login_page.classList.add('open_login_page');

})

signup_page_link.addEventListener('click',()=>{
    signup_page.classList.add('open_signup_page');
    header_sec.classList.add('d-none');
    header_nav.classList.add('d-none');
})

});


