import { DBToDo } from './DB.js';
import { saveinStore } from './setInLocalStore.js';

export function updateStatus(id) {
    const index = DBToDo.findIndex((el) => el.id === id);
    if (index !== -1) {
        DBToDo[index].status = !DBToDo[index].status;
        saveinStore(DBToDo);
    }
}
