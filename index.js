function selectedCard(selectedItem){
    const slides = document.querySelectorAll('.slide')

    slides[selectedItem].classList.add('active')

    for(const slide of slides){
        slide.addEventListener('click', () => {
            clearAciveClasses()
    
            slide.classList.add('active')
        })
        
        function clearAciveClasses(){
            slides.forEach((slide) => {
                slide.classList.remove('active')
            })
        }
    }    
}

selectedCard(2)