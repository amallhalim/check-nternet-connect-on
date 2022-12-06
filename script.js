// put you hand in the html element
let title = document.querySelector(".title") 
let ul = document.querySelector("ul") 
let reload = document.querySelector(".reload") 

// static function
window.onload = function () {
    if (window.navigator.onLine) {
        online() 
    } else {
        offline()
    }
    
}

// contionus chec internet connection
window.addEventListener("online",function () {
    online();
});
// contionus chec internet connection
window.addEventListener("offline",function () {
    offline();
});

reload.onclick=function () {
    window.location.reload()
}

// function that work when you are has a internet connection
function online() {
    title.innerHTML=" you are online";
    title.style.color="#22da22";
    ul.style.color="#22da22";
    ul.classList.add("hide");
    reload.classList.add("hide");

    
}

// function that work when you are not has internet connection
function offline() {
    title.innerHTML=" you are offline";
    title.style.color="red";
    ul.classList.remove("hide");
    reload.classList.remove("hide");
    
}










