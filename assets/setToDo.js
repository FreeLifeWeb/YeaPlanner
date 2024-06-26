import { DBToDo } from './DB.js';
import { saveinStore } from './setInLocalStore.js';

export function setToDo(value) {
    const oneToDoObject = {
        id: `${DBToDo.length + 1}`,
        name: value,
        status: false,
    };
    DBToDo.push(oneToDoObject);
    saveinStore(DBToDo);
    return DBToDo;
}
