let ls: Storage = localStorage;


// Сделать зависимости, при уходе со страницы из localstorage будут удалятьс

class TLStorage {
    public static isExist(key: string): boolean {
        if(ls.getItem(key) === undefined) {
            return false;
        }

        return true;
    }
    public static addItem<T>(key: string, body: T) {
        // If item exist in local storage, this function create new data in localstorage
        // We get you function update
        if(this.isExist(key)) {
            throw new Error('This key alredy existed in localstorage.')
        }
        const _item = {
            dependencies: 'working',
            data: body,
        }
        ls.setItem(key, JSON.stringify(_item));
    }
    
}
console.log('here')

TLStorage.addItem('ru', {art: 'bird'})
TLStorage.addItem('ru', {art: 'fly'})







export default TLStorage