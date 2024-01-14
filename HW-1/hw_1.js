const arr = [{todoText:"Finish the Homework", date:"14.01"}, {todoText:"Go to work", date:"15.01"}, {todoText:"Go to the gym", date:"16.01"}]

function createPage (data) {
    const wrapper = createWrapper()
    const title = createTitle()
    wrapper.appendChild(title)
    for(let i = 0; i < arr.length; i++) {
        const cell = createCell(arr[i])
        wrapper.appendChild(cell)
    }
    return wrapper
}

window.onload = () => {
    const page = createPage(arr)
    document.body.appendChild(page)
}

function createWrapper () {
    const wrapper = document.createElement('section')
    wrapper.className = 'wrapper'
    return wrapper
}

function createTitle () {
    const title = document.createElement('form')
    title.className = 'title'
    title.innerHTML = '<button class="title__button">Delete All</button><div class="title__input"><input type="text"></div><button class="title__button">Add</button>' 
    return title
}

function createCell (element) {
    const cell = document.createElement('div')
    cell.className = 'cell'
    const cellBottomCross = document.createElement('button')
    cellBottomCross.className = 'cell__button-cross'
    cellBottomCross.innerHTML = '&#215;'
    cell.appendChild(cellBottomCross)
    const cellBottomMark = document.createElement('button')
    cellBottomMark.className = 'cell__button-mark'
    cellBottomMark.innerHTML = '&#10003;'
    cell.appendChild(cellBottomMark)
    const cellText = document.createElement('p')
    cellText.className = 'cell__text'
    cellText.innerHTML = element.todoText
    cell.appendChild(cellText)
    const cellDate = document.createElement('p')
    cellDate.className = 'cell__date'
    cellDate.innerHTML = element.date
    cell.appendChild(cellDate)
    return cell
}


