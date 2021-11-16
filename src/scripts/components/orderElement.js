import createElement from "../utilities/createElement";
import { orderElementConfig } from "../../config/tablePageConfig";

const orderElement = () => {

    const {
        orderElementContainerConfig,
        orderElementOrderNameConfig,
        orderElementPriceConfig,
        orderElementStatusConfig,
    } = orderElementConfig


    const orderElementContainer = createElement(orderElementContainerConfig);
    const orderElementOrderName = createElement(orderElementOrderNameConfig);
    const orderElementPrice = createElement(orderElementPriceConfig);
    const orderElementStatus = createElement(orderElementStatusConfig);

    orderElementContainer.appendChild(orderElementOrderName);
    orderElementContainer.appendChild(orderElementPrice);
    orderElementContainer.appendChild(orderElementStatus);
    
    return orderElementContainer
};

export default orderElement;
