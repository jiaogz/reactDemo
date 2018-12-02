/**
 * 缓存数据到localStorage模块
 * @type {{set(*=, *=): void, get(*=): *, remove(*=): void}}
 */

var storage={


    set(key,value){

        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){

        return JSON.parse(localStorage.getItem(key));

    },remove(key){

        localStorage.removeItem(key)
    }
};

export default storage;