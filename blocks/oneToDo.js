export function oneToDo(todo) {
    return `
        <div class="element-of-list" id="${todo.id}">
            <div class="checkbox-container">
                <input type="checkbox" id="round-checkbox-${
                    todo.id
                }" class="round-checkbox" ${todo.status ? 'checked' : ''} />
                <label for="round-checkbox-${
                    todo.id
                }" class="round-checkbox-label"></label>
            </div>
            <div>
                <p id="task-${todo.id}" class="task ${
        todo.status ? 'completed' : ''
    }">${todo.name}</p>
            </div>
            <div>
                <img id="trash-button-${
                    todo.id
                }" class="trash-button" src="./img/trash.svg" alt="trash" />
            </div>
        </div>
    `;
}
