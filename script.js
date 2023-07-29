// let cursor = document.querySelector(".cursor");
// let cursorBlur = document.querySelector(".cursor-blur");

// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.x + "px";
//     cursor.style.top = e.y + "px";
//     cursorBlur.style.left = e.x - 250 + "px";
//     cursorBlur.style.top = e.y - 250 + "px";
// });



// gsap.to("#nav", {
//     backgroundColor: "#000",
//     duration: 0.5,
//     height: "110px",
//     scrollTrigger: {
//         trigger: "#nav",
//         scroller: "body",
//         // markers:true,
//         start: "top -10%",
//         end: "top -11%",
//         scrub: 1,
//     },
// });

// gsap.to(".main", {
//     backgroundColor: "#000",
//     scrollTrigger: {
//         trigger: "#main",
//         scroller: "body",
//         start: "top -25%",
//         end: "top -70%",
//         scrub: 2,
//     },
// });
// Check the screen width and height
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const minScreenWidth = 600;
const minScreenHeight = 600;

// Check if the screen dimensions are greater than or equal to the minimum values
if (screenWidth >= minScreenWidth && screenHeight >= minScreenHeight) {
    // If the screen size is within the allowed range, enable the GSAP animations
    gsap.to("#nav", {
        backgroundColor: "#000",
        duration: 0.5,
        height: "110px",
        scrollTrigger: {
            trigger: "#nav",
            scroller: "body",
            // markers:true,
            start: "top -10%",
            end: "top -11%",
            scrub: 1,
        },
    });

    gsap.to(".main", {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: "#main",
            scroller: "body",
            start: "top -25%",
            end: "top -70%",
            scrub: 2,
        },
    });
}
