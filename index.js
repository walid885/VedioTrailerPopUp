const btnEL = document.querySelector(".btn");
const closeEL = document.querySelector(".close-icn");
const trailerContain = document.querySelector(".trailer-container");

btnEL.addEventListener("click",()=>{
    trailerContain.classList.remove("active");
})

btnEL.addEventListener("click",()=>{
    trailerContain.classList.add("active");
})