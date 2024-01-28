import { saveItemToLocalStorage } from './localStorage.js'
import { getRandomId, generateDate } from './generator.js'

const toDos = []

/* Root and Page */
export function createPage(toDosArr) {
    const root = document.getElementById('root')
    root.appendChild(createForm())

    const itemContainer = document.createElement('div')
    itemContainer.setAttribute('id', 'item_container')
    root.appendChild(itemContainer)


    toDos.push(...toDosArr)

    toDosArr.forEach((element) => {
        const item = createItem(element)
        itemContainer.appendChild(item)
    })
}



/* Title(form) */
function createForm() {
    const form = document.createElement('form')
    form.className = 'form'

    /* Delete button */
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete All'
    deleteButton.setAttribute('type', 'reset')
    /* Delete button event */
    deleteButton.onclick = function() {
        const itemContainer = document.getElementById('item_container')
        itemContainer.innerHTML = ''

        toDos.length = 0
        saveItemToLocalStorage(toDos)
    }
    form.appendChild(deleteButton)

    /* Input */
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    form.appendChild(input)

    /* Add button */
    const addButton = document.createElement('button')
    addButton.innerHTML = 'Add'
    addButton.setAttribute('type', 'reset')
    /* Add button event */
    addButton.onclick = function() {
        const toDoItem = {
            id: getRandomId(),
            text: input.value.toString(),
            date: generateDate(),
            isChecked: false
        }

        toDos.push(toDoItem)
        saveItemToLocalStorage(toDos)

        /* Item container */
        const newItem = createItem(toDoItem)
        const itemContainer = document.getElementById('item_container')
        itemContainer.appendChild(newItem)
    }
    form.appendChild(addButton)

    return form
}



/* Item */
function createItem (toDoItem) {
    const item = document.createElement('div')
    item.className = 'item'

    /* Delete local button */
    const itemBottomCross = document.createElement('button')
    itemBottomCross.className = 'item__button-cross'
    itemBottomCross.innerHTML = '&#215;'
    /* Delete local button event */
    itemBottomCross.onclick = function() {

        const objWithIdIndex = toDos.findIndex((obj) => obj.id === toDoItem.id)
        if (objWithIdIndex > -1) {
            toDos.splice(objWithIdIndex, 1)
        }

        localStorage.setItem('todos', JSON.stringify(toDos))

        const itemContainer = document.getElementById('item_container')
        itemContainer.removeChild(item)
    }
    item.appendChild(itemBottomCross)

    /* Check button */
    const itemBottomMark = document.createElement('button')
    itemBottomMark.className = 'item__button-mark'
    itemBottomMark.innerHTML = '&#10003;'
    /* Check button event */
    itemBottomMark.onclick = function() {
        const objWithIdIndex = toDos.findIndex((obj) => obj.id === toDoItem.id)
        toDos[objWithIdIndex].isChecked = !toDoItem.isChecked
        localStorage.setItem('todos', JSON.stringify(toDos))

        if (itemText.className === 'item__text-modified') {
            itemText.className = 'item__text'
        } else {
            itemText.className = 'item__text-modified'
        }
    }
    item.appendChild(itemBottomMark)

    const itemText = document.createElement('p')
    if (!toDoItem.isChecked) {
        itemText.className = 'item__text'
    } else {
        itemText.className = 'item__text-modified'
    }
    itemText.setAttribute('id', 'item_text')
    itemText.innerHTML = toDoItem.text
    item.appendChild(itemText)

    const itemDate = document.createElement('p')
    itemDate.className = 'item__date'
    itemDate.innerHTML = toDoItem.date
    item.appendChild(itemDate)
 
    return item
}