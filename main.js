const popup = document.querySelector('.popup')
const images = document.querySelectorAll('.gallery .item img')

images.forEach(function(img){

    img.addEventListener('click', function() {
        const popupImg = document.createElement('img')
        popupImg.src = img.src
        popup.innerHTML = ''
        popup.appendChild(popupImg)
        popup.setAttribute('width', '80%')
        popup.style.transform = 'translateY(0)'
    })
})

popup.addEventListener('click', function(){
    popup.style.transform = 'translateY(-100%)'
    popup.src = ''
})