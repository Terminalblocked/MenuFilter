function app () {
    const buttons = document.querySelectorAll('.filter-btn')
    const cards = document.querySelectorAll('.menu-item')
    const bigBlock = document.querySelector('.section-center')

    function filter (category, items) {
        for(let i = 0; i < items.length; i++) {
            const isItemFiltered = !items[i].classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if(isItemFiltered && !isShowAll) {
                items[i].classList.add('hide')
            } else {
                items[i].classList.remove('hide')
            }
        }
    }


    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const currentCategory = buttons[i].dataset.id
            filter(currentCategory, cards)
        })
    }
}

app()