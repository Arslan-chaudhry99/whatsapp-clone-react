
// close aside
document.getElementById("close").addEventListener("click", ()=>{
           document.getElementById("aside").style.display="none"
         
          
})
// to open asside
document.getElementById("open-user").addEventListener("click",()=>{
           document.getElementById("aside").classList.add("asside_animation-open")
           document.getElementById("aside").style.display="block"
          
})
console.log("working");
