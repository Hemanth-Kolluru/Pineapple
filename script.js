document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 

    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth;

    let timeoutId; 
    let autoplayInterval;

    const autoPlay = () => { 
        const totalCardWidth = carousel.scrollWidth;
        
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        if (carousel.scrollLeft >= maxScrollLeft) {
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += firstCardWidth;
        }
    }; 

    const startAutoPlay = () => {
        autoplayInterval = setInterval(autoPlay, 2750);
    };

    const stopAutoPlay = () => {
        clearInterval(autoplayInterval);
    };

    wrapper.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        stopAutoPlay();
    }); 
    
    wrapper.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(startAutoPlay, 1000);
    }); 

    
    arrowBtns.forEach(bt => { 
        bt.addEventListener("click", () => { 
            carousel.scrollLeft += bt.id === "left" ? 
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
    
    startAutoPlay();
});

