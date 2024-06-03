import { setToDo } from './assets/setToDo.js';
import { withoutToDo } from './blocks/withoutTodo.js';
import { getDomElement } from './assets/getDomElement.js';
import { DBToDo } from './assets/DB.js';
import { oneToDo } from './blocks/oneToDo.js';
import { getInLocalStore } from './assets/getInLocalStore.js';
import { deleteToDo } from './assets/deleteToDo.js';
import { saveinStore } from './assets/setInLocalStore.js';
// элементы
const domElements = getDomElement();

// загрузка контента из локального хранилища
const storedToDos = getInLocalStore();
if (storedToDos) {
    DBToDo.push(...storedToDos);
}

// функция автоматического встраивания контента при его наличии или отсутствии
export const loadContent = (content) => {
    domElements.blockWithToDo.innerHTML = content;
};

// слушатель на кнопку при добавлении дела
domElements.buttonCreate.addEventListener('click', () => {
    setToDo(domElements.inputForPushedToDo.value);
    domElements.inputForPushedToDo.value = '';
    renderContent();
});

// делегирование событий на родительский элемент для удаления дел
domElements.blockWithToDo.addEventListener('click', (event) => {
    if (event.target.classList.contains('trash-button')) {
        let id = event.target.id.split('-')[2];
        deleteToDo(id);
        renderContent();
    }
});

// динамическая отрисовка контента при его наличии
export function renderContent() {
    if (DBToDo.length === 0) {
        loadContent(withoutToDo);
    } else {
        let listToDos = '';
        DBToDo.forEach((item) => {
            listToDos += oneToDo(item);
        });
        loadContent(listToDos);
    }
}
renderContent();
