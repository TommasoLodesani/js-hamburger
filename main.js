const buttonOpen = document.querySelector(".header-right .fa-bars");
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

