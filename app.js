const main = document.querySelector('.main')
const cardTemplate = document.querySelector('#cardTemplate').content
let fragment = document.createDocumentFragment()
const searchInput = document.querySelector('#searchInput')
const autoComplete = document.querySelector('.autocomplete')

const enableShower = () => {
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
}

const loadCatalog = (data) => {
    main.innerHTML = ''
    for (let i = 0; i < data.length; i++){        
        let cloneTemplate = cardTemplate.cloneNode(true)
        cloneTemplate.querySelector('.card__img').setAttribute('src', "./images/" + data[i].image)
        cloneTemplate.querySelector('.card__title').textContent =  data[i].title
        cloneTemplate.querySelector('.card__main-info__cat').textContent = data[i].category
        cloneTemplate.querySelector('.card__main-info__price').textContent = data[i].price
        cloneTemplate.querySelector('.card__description').textContent = data[i].description
        fragment.appendChild(cloneTemplate)
    }
    main.appendChild(fragment)
    fragment.innerHTML = ''
    enableShower()
}

const searchInCatalog = () => {
    let getSearch = searchInput.value
    let expression = new RegExp(`${getSearch}.*`, 'i')
    const catalogFiltered = catalog.filter(item => expression.test(item.title))     
    loadCatalog(catalogFiltered)
}

window.addEventListener('DOMContentLoaded', () => {
    loadCatalog(catalog)
})

searchInput.addEventListener('input', () => {
    searchInCatalog(catalog)
})