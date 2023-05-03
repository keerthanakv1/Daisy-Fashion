let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.getElementById("form");

function validateInput(){
    //check username is empty
    if(userName.value.trim()===""){
       onError(userName," Enter Name");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Enter Email");
    }else{
        if(isValidEmail(email.value.trim())){
            onError(email,"Email is not valid"); 
        }else{
            onSuccess(email);
        }
            
        
    }

    //password
    if(pwd.value.trim()===""){
        onError(pwd," Enter password");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd," Enter password");
     }else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"password is not matching")
        }
        else
         onSuccess(conPwd);
     }
}
    


document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
   
});





function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
    window.location.href="project.html";
} 

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message; 
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.0)+[a-zA-Z]{2,}))$/.test(email);    
}
    
