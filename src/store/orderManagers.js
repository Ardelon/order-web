/*
id,
name,
price
createDate,
updateDate,
tag,


*/

import {addNewOrderToTable, getTable} from './tableManagers';
import { addNewTag } from './tagManagers';

export const addOrder = (tableId, model ) => {
    
    addNewOrderToTable(tableId, model.id)
    localStorage.setItem(model.id, JSON.stringify(model));
    addNewTag(model.tag);

}

export const getOrder = (orderId) => {
    return JSON.parse(localStorage.getItem(orderId));
}