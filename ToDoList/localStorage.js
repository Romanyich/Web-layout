function saveItemToLocalStorage(toDos) {
    localStorage.setItem('todos', JSON.stringify(toDos))
}

function getItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos') || '[]')
}

export { saveItemToLocalStorage, getItemsFromLocalStorage }