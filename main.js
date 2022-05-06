const buttonOpen = document.querySelector(".fa-bars");
const buttonClose = document.querySelector(".fa-times");
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

