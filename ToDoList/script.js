const toDos = [{toDoText:"Finish the Homework", date:"14.01"}, {toDoText:"Go to work", date:"15.01"}, {toDoText:"Go to the gym", date:"16.01"}]

function createPage (toDoItems) {
    const root = document.getElementById('root')
    root.appendChild(createForm())

    const itemContainer = document.createElement('div')
    itemContainer.setAttribute('id', 'item_container')
    root.appendChild(itemContainer)

    toDoItems.forEach((element) => {
        const item = createItem(element.toDoText, element.date)
        itemContainer.appendChild(item)
    })
}

createPage(toDos)

function createForm() {
    const form = document.createElement('form')
    form.className = 'form'

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete All'
    deleteButton.setAttribute('type', 'reset')
    deleteButton.onclick = function() {
        const itemContainer = document.getElementById('item_container')
        itemContainer.innerHTML = ''
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
        
        const newItem = createItem(input.value, fullDate)
        const itemContainer = document.getElementById('item_container')
        itemContainer.appendChild(newItem)
    }
    form.appendChild(addButton)

    return form
}

function createItem (text, date) {
    const item = document.createElement('div')
    item.className = 'item'


    const itemBottomCross = document.createElement('button')
    itemBottomCross.className = 'item__button-cross'
    itemBottomCross.innerHTML = '&#215;'
    itemBottomCross.onclick = function() {
        console.log('Delete local')
        const itemContainer = document.getElementById('item_container')
        itemContainer.removeChild(item)
    }
    item.appendChild(itemBottomCross)

    const itemBottomMark = document.createElement('button')
    itemBottomMark.className = 'item__button-mark'
    itemBottomMark.innerHTML = '&#10003;'
    itemBottomMark.onclick = function() {
        console.log('Modify CSS')

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
    itemText.className = 'item__text'
    itemText.setAttribute('id', 'item_text')
    itemText.innerHTML = text
    item.appendChild(itemText)

    const itemDate = document.createElement('p')
    itemDate.className = 'item__date'
    itemDate.innerHTML = date
    item.appendChild(itemDate)

    return item
}
