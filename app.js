const cardShower = document.querySelectorAll('.card__shower')

let clicked = false
for (let i = 0; i < cardShower.length; i++){
    cardShower[i].addEventListener('click', () => {
        clicked = !clicked
        if (clicked == true){
            cardShower[i].childNodes[1].textContent = "Ver menos"
        }else{
            cardShower[i].childNodes[1].textContent = "Ver más"
        }
        cardShower[i].previousElementSibling.classList.toggle('hidden')
    })
}