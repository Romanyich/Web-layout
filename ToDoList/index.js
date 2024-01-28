import { getItemsFromLocalStorage } from './localStorage.js'
import { createPage } from './createLayout.js'

const toDos = getItemsFromLocalStorage()

createPage(toDos)
