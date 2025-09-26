class AddItems extends HTMLElement {
    constructor(){
        super()

        let addAddItems = `
        <form action="" id="item-form">
        <input type="text">
        <button>Add item</button>
        </form>`

        this.innerHTML = addAddItems
    }
}

window.customElements.define("add-items", AddItems)



let itemButton = document.querySelector('#item-form button')
let itemInput = document.querySelector('#item-form input')
let searchInput = document.querySelector('#search')
let list = document.querySelector('#list')
let itemText;
let seatch;



itemInput.addEventListener('test', (e) => {itemText = e.target.value})


itemInput.addEventListener('input', () => {

    itemInput.dispatchEvent(
        new CustomEvent("test", {})
    )

})



itemButton.addEventListener('click', addItem)

searchInput.addEventListener('input', search)

function search(e) {
    let searchText = e.target.value
    let ulContent = Array.from(list.children)

    ulContent.forEach(li => {
        let liText = li.firstChild.textContent
        if (liText.includes(searchText)) {
            li.style.opacity = "100%"
        } else {
            li.style.opacity = "20%"
        }

    });
}

function deleteItem(e){
    e.target.parentElement.setAttribute("class", "GONE")
}

function addItem(e) {
    e.preventDefault()
    
    let newLi = document.createElement('li')
    newLi.setAttribute("class", "display")
    let paragraph = document.createElement('p')
    paragraph.style.margin = '0'
    let deleteButton = document.createElement('button')

    deleteButton.innerText = "X"
    paragraph.innerHTML = itemText
    
    newLi.appendChild(paragraph)
    newLi.appendChild(deleteButton)
    list.appendChild(newLi)
    
    deleteButton.addEventListener('click', deleteItem)
}
