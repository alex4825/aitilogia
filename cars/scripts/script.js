document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

const buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if(document.getElementById("name").value === ""){
        alert("Поле \"" + document.getElementById("name").placeholder + "\" пустое")
    }else if(document.getElementById("phone").value === ""){
        alert("Поле \"" + document.getElementById("phone").placeholder + "\" пустое")
    }else if(document.getElementById("car").value === ""){
        alert("Поле \"" + document.getElementById("car").placeholder + "\" пустое")
    }else{
        alert("Спасибо за заявку, мы свяжемся с вами в близжайшее время");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.1 * window.pageYOffset) + 'px';
    })
});