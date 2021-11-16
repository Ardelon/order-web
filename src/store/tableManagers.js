/*
tableList = ["tableId", "tableId"]

table = {id, name, orderList, tagList}
*/

export const getTableList = () => {
    return JSON.parse(localStorage.getItem('tableList'));
}

export const addNewTable = (table) => {
    const tableList = JSON.parse(localStorage.getItem("tableList"));

    if (tableList && table.length) {
        if (tableList.includes(table.id)) {
            return
        } else {
            tableList.push(table.id);
            localStorage.setItem("tableList", JSON.stringify(tableList));
            localStorage.setItem(table.id, table);
        }
    }
}

export const getTable = (tableId) => {
    return JSON.parse(localStorage.getItem(tableId));
}