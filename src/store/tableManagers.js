/*
tableList = ["tableId", "tableId"]

table = {id, name, orderList, tagList}
*/

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

export const addNewOrderToTable = (tableId, orderId) => {
    const table = getTable(tableId);
    console.log(table);
    console.log(table.orderList.includes(orderId));
    if (table.orderList.includes(orderId)) {
        return
    } else {
        table.orderList.push(orderId);
        localStorage.setItem(tableId, JSON.stringify(table));
    }
}

export const getTable = (tableId) => {
    return JSON.parse(localStorage.getItem(tableId));
}