import { getTable } from "./tableManagers";

export const getTagList = () => {
    return JSON.parse(localStorage.getItem("tagList"));
}

export const addNewTag = (tagName) => {
    let tagList = JSON.parse(localStorage.getItem("tagList"));
    if (!tagList) {
        tagList = [];
    }

    if (!tagList.includes(tagName)) {
        tagList.push(tagName);
    }

    localStorage.setItem("tagList", JSON.stringify(tagList));
};

