let download_resume = document.querySelector(".hero .hero-text .hero-text-content .resume-button");
download_resume.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1iMCd3pnco5XrdyBPANwymZ2LkqTi-Ffs/view?usp=drive_link", "_BLANK")
})

let leetcode = document.querySelector('.coding-profiles .coding-profiles-btns #leetcode');
leetcode.addEventListener("click", () => {
    window.open("https://leetcode.com/u/yashuk_23/");
})

let gfg = document.querySelector('.coding-profiles .coding-profiles-btns #gfg');
gfg.addEventListener("click", () => {
    window.open("https://www.geeksforgeeks.org/profile/yashuk23?tab=activity");
})

let weatherApp_github = document.querySelector('.projects .project-box-container .project-box .project-box-btns #p1-github');
weatherApp_github.addEventListener("click", () => {
    window.open("https://github.com/yashuk23/Weather_Widget_AppReact");
})


let weatherApp_demo = document.querySelector('.projects .project-box-container .project-box .project-box-btns #p1-livedemo');
weatherApp_demo.addEventListener("click", () => {
    window.open("https://yashuk23.github.io/Weather_Widget_AppReact/");
})


let portfolio_github = document.querySelector('.projects .project-box-container .project-box .project-box-btns #p2-github');
portfolio_github.addEventListener("click", () => {
    window.open("https://github.com/yashuk23/Portfolio_Website");
})


let portfolio_demo = document.querySelector('.projects .project-box-container .project-box .project-box-btns #p2-livedemo');
portfolio_demo.addEventListener("click", () => {
    window.open("https://yashuk23.github.io/Portfolio_Website/");
})

let brandpage_github = document.querySelector('.projects .project-box-container .project-box .project-box-btns #p3-github');
brandpage_github.addEventListener("click", () => {
    window.open("https://github.com/yashuk23/Brand_Page-Website-React");
})

let brandpage_demo = document.querySelector('.projects .project-box-container .project-box .project-box-btns #p3-livedemo');
brandpage_demo.addEventListener("click", () => {
    window.open("https://yashuk23.github.io/Brand_Page-Website-React/");
})

let connect_mail = document.querySelector('.lets-connect .email-section');
connect_mail.addEventListener("click", () => {
     window.location.href ="mailto:yashkanawade66@gmail.com.com?subject=Contact from Portfolio&body=Hello Yash, I visited your portfolio!";
});

let connect_github = document.querySelector('#github');
connect_github.addEventListener("click", () => {
    window.open("https://github.com/yashuk23");
})

let connect_linkedin = document.querySelector('#linkedin');
connect_linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/yashuk23");
})

let message = document.querySelector('.lets-connect #gmail');
message.addEventListener("click", () => {
    window.location.href = "mailto:yashkanawade66@gmail.com"
});

