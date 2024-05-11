const navBarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
    navBarNav.classList.toggle("active");
    e.preventDefault();
}
document.querySelector("#shopping-cart").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
}

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#search").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
}

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search');
const sc = document.querySelector("#shopping-cart");

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navBarNav.contains(e.target)) {
        navBarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})


const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});

document.querySelector('.close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

window.onclick = (e) => {
    if (e.target == itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}