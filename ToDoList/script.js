const toDos = [{toDoText:"Finish the Homework", date:"14.01"}, {toDoText:"Go to work", date:"15.01"}, {toDoText:"Go to the gym", date:"16.01"}]

function createPage (toDoItems) {
    const root = document.getElementById('root')
    root.appendChild(createForm())

    toDoItems.forEach((element) => {
        const item = createItem(element)
        root.appendChild(item)
    })
}

createPage(toDos)

function createForm() {
    const form = document.createElement('form')
    form.className = 'form'

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete All'
    deleteButton.setAttribute('type', 'button')
    form.appendChild(deleteButton)

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    form.appendChild(input)

    const addButton = document.createElement('button')
    addButton.innerHTML = 'Add'
    addButton.setAttribute('type', 'button')
    form.appendChild(addButton)

    return form
}

function createItem (element) {
    const item = document.createElement('div')
    item.className = 'item'

    const itemBottomCross = document.createElement('button')
    itemBottomCross.className = 'item__button-cross'
    itemBottomCross.innerHTML = '&#215;'
    item.appendChild(itemBottomCross)

    const itemBottomMark = document.createElement('button')
    itemBottomMark.className = 'item__button-mark'
    itemBottomMark.innerHTML = '&#10003;'
    item.appendChild(itemBottomMark)

    const itemText = document.createElement('p')
    itemText.className = 'item__text'
    itemText.innerHTML = element.toDoText
    item.appendChild(itemText)

    const itemDate = document.createElement('p')
    itemDate.className = 'item__date'
    itemDate.innerHTML = element.date
    item.appendChild(itemDate)

    return item
}
