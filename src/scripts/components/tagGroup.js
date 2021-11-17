import createElement from "../utilities/createElement";
import { tagGroupConfig } from "../../config/tablePageConfig";
import orderElement from './orderElement';
import { getTableTagOrders } from "../../store/tagManagers";
import { getOrder } from "../../store/orderManagers";

const tagGroup = (orderList, tag) => {

    //#region //* Constants

    const {
        tagGroupContainerConfig,
        tagGroupHeaderConfig,
        tagGroupHeaderTextConfig,
        tagGroupBodyConfig,

    } = tagGroupConfig

    //#endregion

    //#region //* Create Elements

    const tagGroupContainer = createElement(tagGroupContainerConfig);
    const tagGroupHeader = createElement(tagGroupHeaderConfig);
    const tagGroupHeaderText = createElement(tagGroupHeaderTextConfig);    
    const tagGroupBody = createElement(tagGroupBodyConfig);

    tagGroupHeaderText.innerText = tag;

    if (orderList) {
        console.log(orderList);
        orderList.forEach(orderId => {
            const order = getOrder(orderId)
            if (tag === order.tag) {

                tagGroupBody.appendChild(orderElement(order));
            }
        });
    }
    //#endregion

    //#region //* Append Elements

    tagGroupHeader.appendChild(tagGroupHeaderText);

    tagGroupContainer.appendChild(tagGroupHeader);
    tagGroupContainer.appendChild(tagGroupBody);

    //#endregion
    return tagGroupContainer

}

export default tagGroup;