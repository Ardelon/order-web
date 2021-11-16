// TODO add/update form of the order

import createElement from "../utilities/createElement";
import { orderPageConfig } from "../../config/orderPageConfig";
const orderPage = () => {

    const {
        orderPageContainerConfig,
        orderPageHeaderConfig,
        orderPageHeaderBackwardButtonConfig,
        orderPageBodyConfig,
        orderPageNameInputConfig,
        orderPageBodyPriceInputConfig,
        orderPageBodyTagInputConfig,
        orderPageBodyUpdateOrderButtonConfig,
    } = orderPageConfig;

    const orderPageContainer = createElement(orderPageContainerConfig);
    const orderPageHeader = createElement(orderPageHeaderConfig);
    const orderPageHeaderBackwardButton = createElement(orderPageHeaderBackwardButtonConfig);
    const orderPageBody = createElement(orderPageBodyConfig);
    const orderPageNameInput = createElement(orderPageNameInputConfig);
    const orderPageBodyPriceInput = createElement(orderPageBodyPriceInputConfig);
    const orderPageBodyTagInput = createElement(orderPageBodyTagInputConfig);
    const orderPageBodyUpdateOrderButton = createElement(orderPageBodyUpdateOrderButtonConfig);

    
    orderPageHeader.appendChild(orderPageHeaderBackwardButton);

    orderPageBody.appendChild(orderPageNameInput);
    orderPageBody.appendChild(orderPageBodyPriceInput);
    orderPageBody.appendChild(orderPageBodyTagInput);
    orderPageBody.appendChild(orderPageBodyUpdateOrderButton);

    orderPageContainer.appendChild(orderPageHeader);
    orderPageContainer.appendChild(orderPageBody)

    

}

export default orderPage;