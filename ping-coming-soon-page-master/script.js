let email = document.querySelector("#email");
let form = document.querySelector("#form");
let error = document.querySelector("#error");

form.addEventListener("submit",
function(e){
    e.preventDefault()
    
    let emailValue = email.value.trim();
    
    if(emailValue === ""){
        error.innerHTML = "Whoops! It looks like you forgot to add your email"
    }
    else if(!isEmail(emailValue)){
        error.innerHTML = "Please provide an valid email address"
    }else{
        error.innerHTML = ""
    }

})

function isEmail(input){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}