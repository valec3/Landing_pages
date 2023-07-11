function imgSlider(imgSrc){
    console.log(imgSrc)
    document.querySelector("#img-slide")["src"] = imgSrc;
}

function changeColor(color){
    const shape = document.querySelector(".shape");
    const btn = document.querySelector(".btn");
    const coca = document.querySelector("h2.header span");

    shape.style.backgroundColor=color;
    btn.style.backgroundColor=color;
    coca.style.color = color;
}