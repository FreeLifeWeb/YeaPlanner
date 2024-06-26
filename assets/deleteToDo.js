import { DBToDo } from './DB.js';
import { saveinStore } from './setInLocalStore.js';

export function deleteToDo(id) {
    const index = DBToDo.findIndex((item) => item.id == id);
    if (index !== -1) {
        DBToDo.splice(index, 1);
        saveinStore(DBToDo);
    }
    return DBToDo;
}
