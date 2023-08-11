const laptopHero = document.querySelector("#laptop_hero");
const laptopsImg = document.querySelectorAll(".laptop_img");

laptopsImg.forEach(img=>{
    img.addEventListener("click",()=>{
        laptopHero.src = img.src;
    })
})