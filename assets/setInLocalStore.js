export function saveinStore(db) {
    localStorage.setItem('DBToDo', JSON.stringify(db));
}
