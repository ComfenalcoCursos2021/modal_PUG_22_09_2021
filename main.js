addEventListener("DOMContentLoaded", (e)=>{
    let modal = document.querySelector(".modal");
    document.querySelector(".btn").addEventListener("click", (e)=>{
        Object.assign(modal.style, {bottom: "20px"})
    })
    document.querySelector(".hide").addEventListener("click", (e)=>{
        Object.assign(modal.style, {bottom: "-300px"})
    })
})