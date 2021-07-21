const slides = document.querySelectorAll('.slide')

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