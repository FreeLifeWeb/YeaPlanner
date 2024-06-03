export function getInLocalStore() {
    const data = localStorage.getItem('DBToDo');
    return data ? JSON.parse(data) : [];
}
