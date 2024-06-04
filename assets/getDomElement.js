export function getDomElement() {
    // блок для встраивания разметки при отсутствии дел
    const blockWithToDo = document.getElementById(
        'todo-without-or-with-things'
    );
    // инпут для добавления дела
    const inputForPushedToDo = document.getElementById('main-input');
    // кнопка для добавления создания и добавления дела
    const buttonCreate = document.getElementById('button-create-todo');
    // параграф с новым добавленным заданием
    const task = document.getElementById('task');
    return {
        blockWithToDo,
        inputForPushedToDo,
        buttonCreate,
        task,
    };
}
