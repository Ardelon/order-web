/*
tableList = ["tableId", "tableId"]

table = {id, name, orderList, tagList}
*/

import { getOrder } from "./orderManagers";

export const getTableList = () => {
    return JSON.parse(localStorage.getItem('tableList')) || [];
}

export const addNewTable = (table) => {
    let tableList = JSON.parse(localStorage.getItem("tableList"));
    if (tableList && tableList.length) {
        if (tableList.includes(table.id)) {
            return
        } else {
            tableList.push(table.id);
            localStorage.setItem("tableList", JSON.stringify(tableList));
            localStorage.setItem(table.id, JSON.stringify(table));
        }
    } else {
        tableList = [];
        tableList.push(table.id);
        localStorage.setItem("tableList", JSON.stringify(tableList));
        localStorage.setItem(table.id, JSON.stringify(table));
    }
}

export const addNewOrderToTable = (tableId, orderId, tag) => {
    const table = getTable(tableId);
    console.log(table);
    console.log(table.orderList.includes(orderId));
    if (table.orderList.includes(orderId)) {
        return
    } else {
        table.orderList.push(orderId);
        if (!table.tagList.includes(tag)) {
            table.tagList.push(tag)
        }
        localStorage.setItem(tableId, JSON.stringify(table));
    }
}

export const candelOrderFromTable = (tableId, orderId) => {
    const table = getTable(tableId);
    if (!table.orderList.includes(orderId)) {
        return 
    } else {
        const filteredOrderList = table.orderList.filter(id => {
            return id !== orderId
        })
        table.orderList = filteredOrderList
        localStorage.setItem(tableId, JSON.stringify(table));
    }
    
}

export const getTable = (tableId) => {
    return JSON.parse(localStorage.getItem(tableId));
}

export const removeOrderlessTags = (tableId) => {
    const table = getTable(tableId);
    const {orderList} = table;
    const newTagList = [];
    if (!orderList || !orderList.length) {
        table.tagList = []
    } else {

        orderList.forEach(orderId => {
            const order = getOrder(orderId);
            console.log(order.tag, newTagList);
            if (newTagList.includes(order.tag)) {
                return
            } else {
                newTagList.push(order.tag)
            }
            table.tagList = newTagList;
        })
    }
    localStorage.setItem(tableId, JSON.stringify(table));

}