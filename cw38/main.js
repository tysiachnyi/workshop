window.addEventListener("DOMContentLoaded", function(){
    let change = document.getElementById("change"),
    body = document.getElementsByTagName("body")[0];

    change.addEventListener("click", function(){
        if(localStorage.getItem('bg') === "black"){
            localStorage.setItem('bg', 'white');
            body.style.backgroundColor = "white";
        }else{
            localStorage.setItem('bg', 'black');
            body.style.backgroundColor = "black";
        }
    });

    if(localStorage.getItem('bg') === "black"){
        body.style.backgroundColor = "black";
    }else{
        body.style.backgroundColor = "white";
    }

})