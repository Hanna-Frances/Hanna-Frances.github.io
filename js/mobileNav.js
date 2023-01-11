// sticky nav
window.onscroll = function () { stickyNav() };

let navbarDesktop = document.getElementById("navDesktop");
let stickyDesktop = navbarDesktop.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= stickyDesktop ) {
        navbarDesktop.classList.add("sticky");
    } else {
        navbarDesktop.classList.remove("sticky");
    }
}

// mobile nav
function navToggle() {
    let mobileNav = document.getElementById("navMobile");
    if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
        mobileNav.style.display = "block";
    }
    else {
        mobileNav.style.display = "none";
    }
}

