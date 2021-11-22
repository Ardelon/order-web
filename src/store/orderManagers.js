/*
id,
name,
price
createDate,
updateDate,
tag,
status


*/

import {addNewOrderToTable, candelOrderFromTable, getTable} from './tableManagers';
import { addNewTag } from './tagManagers';

export const addOrder = (tableId, order ) => {
    
    addNewOrderToTable(tableId, order.id, order.tag)
    localStorage.setItem(order.id, JSON.stringify(order));
    addNewTag(order.tag);

}

export const getOrder = (orderId) => {
    return JSON.parse(localStorage.getItem(orderId));
}

export const updateOrder = (order) => {
    localStorage.setItem(order.id, JSON.stringify(order));
}

export const cancelOrder = (tableId, order) => {
    candelOrderFromTable(tableId, order.id)
    localStorage.removeItem(order.id);

}