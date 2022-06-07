const buttonOpen = document.querySelector(".header-right > a");
console.log(buttonOpen);
const buttonClose = document.querySelector(".close");
const hamburgerMenu = document.querySelector(".hamburger-menu");


buttonOpen.addEventListener('click',

    function(){

        hamburgerMenu.classList.add("active");
        
    }

)

buttonClose.addEventListener('click',

    function(){

        hamburgerMenu.classList.remove("active");
        
    }

)

