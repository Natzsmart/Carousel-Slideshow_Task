let carouselIndex = 1;
showCarousels(carouselIndex);

function plusCarousels(n) {
    showCarousels(carouselIndex += n);
}

function currentCarousel(n) {
    showCarousels(carouselIndex = n);
}

function showCarousels(n) {
    let i;
    let carousels = document.getElementsByClassName("carouselImages");
    let dots = document.getElementsByClassName("dot");

    if (n > carousels.length) {
        carouselIndex = 1
    }
    if (n < 1) {
        carouselIndex = carousels.length
    }

    for (i = 0; i < carousels.length; i++) {
        carousels[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    carousels[carouselIndex-1].style.display = "block";
    dots[carouselIndex-1].className += " active";
}
 