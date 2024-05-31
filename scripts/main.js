import { oneToDo } from '../blocks/oneToDo.js';
import { withoutToDo } from '../blocks/withoutTodo.js';

const blockWithToDo = document.getElementById('todo-without-or-with-things');

const loadContent = (content) => {
    blockWithToDo.innerHTML = content;
};

loadContent(withoutToDo);
