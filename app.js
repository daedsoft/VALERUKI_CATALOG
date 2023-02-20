// Elements ****************************************************

const main = document.querySelector('.main')
const cardTemplate = document.querySelector('#cardTemplate').content
let fragment = document.createDocumentFragment()
const searchInput = document.querySelector('#searchInput')
const autoComplete = document.querySelector('.autocomplete')
const filtersBtn = document.querySelector('#filtersBtn')
const filter = document.querySelector('.filter')
const closeFilterBtn = document.querySelector('#closeFilterBtn')
const filterItems = document.querySelectorAll('.filter__item')

// Functions ****************************************************


const enableShower = () => {
    const cardShower = document.querySelectorAll('.card__shower')
    for (let i = 0; i < cardShower.length; i++){
        cardShower[i].addEventListener('click', () => {
            cardShower[i].previousElementSibling.classList.toggle('hidden')
            cardShower[i].childNodes[1].classList.toggle('shower-indicator')
        })
    }
}

const loadCatalog = (data) => {
    main.innerHTML = ''
    for (let i = 0; i < data.length; i++){        
        let cloneTemplate = cardTemplate.cloneNode(true)
        
        for (let j = 0; j < data[i].image.length; j++){
            cloneTemplate.querySelector('.card__img__container').innerHTML += `<img class="card__img" src="./images/${data[i].image[j]}" alt="VALERUKI">`
        }
        
        cloneTemplate.querySelector('.card__title').textContent =  data[i].title
        cloneTemplate.querySelector('.card__main-info__cat').textContent = data[i].category
        cloneTemplate.querySelector('.card__main-info__price').textContent = data[i].price
        cloneTemplate.querySelector('.card__description').innerHTML = data[i].description + '<br><br>' + cuidados
        cloneTemplate.querySelector('.wa').setAttribute('href', 'https://wa.me/573113396584?text=' + 'Enlace al producto: http://192.68.20.65:5500/' + data[i].id)
        fragment.appendChild(cloneTemplate)
    }
    
    if (data.length == 0){
        main.innerHTML = `<h3 class='info'>Sin resultados</h3>`
    }else{
        main.appendChild(fragment)
    }    
    enableShower()
}

const searchInCatalog = () => {
    let getSearch = searchInput.value
    let expression = new RegExp(`${getSearch}.*`, 'i')
    const catalogFiltered = catalog.filter(item => expression.test(item.title))     
    loadCatalog(catalogFiltered)
}

const filterInCatalog = (selected) => {
    let getSearch = selected    

    if (getSearch == 'Ver todos'){
        loadCatalog(catalog)
    }else{
        let expression = new RegExp(`${getSearch}.*`, 'i')
        const catalogFiltered = catalog.filter(item => expression.test(item.category))     
        loadCatalog(catalogFiltered)
    }    
}

// Listeners *************************************************************

window.addEventListener('DOMContentLoaded', () => {
    catalog.reverse()
    loadCatalog(catalog)
})

searchInput.addEventListener('input', () => {
    searchInCatalog(catalog)
})

filtersBtn.addEventListener('click', () => {
    filter.classList.toggle('hidden-outside')
})

closeFilterBtn.addEventListener('click', () => {
    filter.classList.toggle('hidden-outside')
})

for (let i = 0; i < filterItems.length; i++){
    filterItems[i].addEventListener('click', () => {
        filterInCatalog(filterItems[i].textContent)
        filter.classList.add('hidden-outside')
    })
}