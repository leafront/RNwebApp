import React, {
    AsyncStorage
}from 'react-native';

class Storage {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     */

    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value)
            return jsonValue;
        })
    }


    /**
     * 设置
     * @param key
     * @param value
     * @returns {*}
     */
    static set(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value))
    }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value))
        })
    }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static remove(key) {
        return AsyncStorage.removeItem(key)
    }
    /**
     * 清除所有方法
     * @param key
     * @return {*}
    */

    static clear(){

      return AsyncStorage.clear()
    }
}

export default Storage
