const toDos = []

function createPage (toDoItems) {
    const root = document.getElementById('root')
    root.appendChild(createForm())

    const itemContainer = document.createElement('div')
    itemContainer.setAttribute('id', 'item_container')
    root.appendChild(itemContainer)

    toDoItems.forEach((element) => {
        const item = createItem(element)
        itemContainer.appendChild(item)
    })
}

getItemsFromLocalStorage()

function createForm() {
    const form = document.createElement('form')
    form.className = 'form'

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete All'
    deleteButton.setAttribute('type', 'reset')
    deleteButton.onclick = function() {
        const itemContainer = document.getElementById('item_container')
        itemContainer.innerHTML = ''

        toDos.length = 0
        localStorage.setItem('todos', JSON.stringify(toDos))
    }
    form.appendChild(deleteButton)

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    form.appendChild(input)

    const addButton = document.createElement('button')
    addButton.innerHTML = 'Add'
    addButton.setAttribute('type', 'reset')
    addButton.onclick = function() {
        let objectDate = new Date()
        let day = objectDate.getDate()
        let month = objectDate.getMonth() + 1
        if (month < 10) {
            month = '0' + month
        }
        const fullDate = day + "." + month

        const toDoItem = {
            id: getRandomId(),
            text: input.value.toString(),
            date: fullDate,
            isChecked: false
        }
        saveItemToLocalStorage(toDoItem)

        const newItem = createItem(toDoItem)
        const itemContainer = document.getElementById('item_container')
        itemContainer.appendChild(newItem)
    }
    form.appendChild(addButton)

    return form
}

function createItem (toDoItem) {
    const item = document.createElement('div')
    item.className = 'item'

    const itemBottomCross = document.createElement('button')
    itemBottomCross.className = 'item__button-cross'
    itemBottomCross.innerHTML = '&#215;'
    itemBottomCross.onclick = function() {
        console.log('Delete local')

        /* Delete from arrray */
        const objWithIdIndex = toDos.findIndex((obj) => obj.id === toDoItem.id)
        if (objWithIdIndex > -1) {
            toDos.splice(objWithIdIndex, 1)
        }

        /* Save updated array to Local Storage */
        localStorage.setItem('todos', JSON.stringify(toDos))

        const itemContainer = document.getElementById('item_container')
        itemContainer.removeChild(item)
    }
    item.appendChild(itemBottomCross)

    const itemBottomMark = document.createElement('button')
    itemBottomMark.className = 'item__button-mark'
    itemBottomMark.innerHTML = '&#10003;'
    itemBottomMark.onclick = function() {
        console.log('Modify CSS')

        const objWithIdIndex = toDos.findIndex((obj) => obj.id === toDoItem.id)
        toDos[objWithIdIndex].isChecked = !toDoItem.isChecked
        localStorage.setItem('todos', JSON.stringify(toDos))

        if (itemText.className === 'item__text-modified') {
            console.log('White text')
            itemText.className = 'item__text'
        } else {
            console.log('Red text and crossed')
            itemText.className = 'item__text-modified'
        }
    }
    item.appendChild(itemBottomMark)

    const itemText = document.createElement('p')

    if (!toDoItem.isChecked) {
        console.log('White text')
        itemText.className = 'item__text'
    } else {
        console.log('Red text and crossed')
        itemText.className = 'item__text-modified'
    }

    itemText.setAttribute('id', 'item_text')
    itemText.innerHTML = toDoItem.text
    item.appendChild(itemText)

    const itemDate = document.createElement('p')
    itemDate.className = 'item__date'
    itemDate.innerHTML = toDoItem.date
    item.appendChild(itemDate)

    console.log('Text: ' + toDoItem.text + ', date: ' + toDoItem.date)
 
    return item
}

function getRandomId() {
    const randomID = Math.floor(Math.random() * Date.now()).toString(16)
    console.log(randomID)
    return randomID
}

function saveItemToLocalStorage(toDoItem) {
    console.log("Text: " + toDoItem.text)
    toDos.push(toDoItem)
    console.log('All card: ' + toDos)
    localStorage.setItem('todos', JSON.stringify(toDos))
}

function getItemsFromLocalStorage() {
    console.log('Restore from Local Storage')
    let row = localStorage.getItem('todos')
    const localStorageToDos = JSON.parse(row)
    localStorageToDos.forEach((element) => {
        toDos.push(element)
    })
    console.log(toDos)
    createPage(toDos)
}
