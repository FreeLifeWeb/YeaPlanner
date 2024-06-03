import { DBToDo } from './DB.js';
import { saveinStore } from './setInLocalStore.js';
let db = DBToDo;
export function deleteToDo(id) {
    db = db.filter((item) => item.id !== id);
    saveinStore(db);
}
