let button = document.querySelector("button")
let flag = false

button.addEventListener("click",()=>{

    if(flag === false){
        button.innerHTML = "Following"
        flag = true
    }
    
   
})