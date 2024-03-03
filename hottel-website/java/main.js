// alert('wellcom vistors');
// console .log(123);
// alert ("Enter your name!");

// var userName = prompt ("please enter your name");
// var x = prompt ("how old are you?");
// alert ('Thankyou ' + confirm);


let nav = document.querySelector('navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}
//    navbar
let navBar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })

})
// counter decign

// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 obj.textContent = current;
//                 if(current == end){
//                     clearInterval(timer);

//                 }

//             }, step);
//     }
//     counter("Counter1", 0 , 1287, 3000);
//     counter("Counter2", 100 , 5786, 2500);
//     counter("Counter3", 0 , 1440, 3000);
//     counter("Counter4", 0 , 7110, 3000);

// })


// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 obj.textContent = current;
//                 if (current == end) {
//                     clearInterval(timer);
//                 }
//             }, step);


//     }
//     counter("Count1", 0, 1287, 3000);
//     counter("Count2", 100, 5786, 2500);
//     counter("Count3", 0, 1440, 3000);
//     counter("Count4", 0, 7110, 3000);

// });
document.addEventListener('DOMContentLoaded', () => {
    const counter = (id, start, end, duration) => {
        const obj = document.getElementById(id);
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const step = Math.abs(Math.floor(duration / range));

        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    };

    counter('Count1', 0, 1287, 3000);
    counter('Count2', 100, 5786, 2500);
    counter('Count3', 0, 1440, 3000);
    counter('Count4', 0, 7110, 3000);
});







var swiper = new swiper(".myswiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: "sweiper-pagination",
        clickable: true,

    },
    autoplay: {
        deley: 3500,
    },

});