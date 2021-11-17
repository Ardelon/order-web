// TODO add/update form of the order

import createElement from "../utilities/createElement";
import { orderPageConfig } from "../../config/orderPageConfig";
import { tablePageConfig } from "../../config/tablePageConfig";
import { idGenerator } from "../utilities/idGenerator";
import { addOrder } from "../../store/orderManagers";
const orderPage = (table, order = {}) => {

    //#region //* Constants

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

    //#endregion

    //#region //* Create Elements
    const orderPageContainer = createElement(orderPageContainerConfig);
    const orderPageHeader = createElement(orderPageHeaderConfig);
    const orderPageHeaderBackwardButton = createElement(orderPageHeaderBackwardButtonConfig);
    const orderPageBody = createElement(orderPageBodyConfig);
    const orderPageNameInput = createElement(orderPageNameInputConfig);
    const orderPageBodyPriceInput = createElement(orderPageBodyPriceInputConfig);
    const orderPageBodyTagInput = createElement(orderPageBodyTagInputConfig);
    const orderPageBodyUpdateOrderButton = createElement(orderPageBodyUpdateOrderButtonConfig);

    orderPageNameInput.value = order.name || '';
    orderPageBodyPriceInput.value = order.price || 0;
    orderPageBodyTagInput.value = order.tag || '';

    //#endregion

    //#region //* Append Event Listeners

    orderPageHeaderBackwardButton.addEventListener('click', function(e) {
        e.preventDefault();
        const tablePageInstance = document.getElementById(tablePageConfig.tablePageContainerConfig.id);
        if (tablePageInstance) {
            tablePageInstance.classList.remove("hide");
        }
        orderPageContainer.classList.add("hide");
        orderPageHeaderBackwardButton.removeEventListener('click', function(e) {
            e.preventDefault();
            const tablePageInstance = document.getElementById(tablePageConfig.tablePageContainerConfig.id);
            if (tablePageInstance) {
                tablePageInstance.classList.remove("hide");
            }
            orderPageContainer.classList.add("hide");
        });
    });

    
    orderPageBodyUpdateOrderButton.addEventListener('click', function(e) {
        e.preventDefault();

        const name = orderPageNameInput.value;
        const price = Number(orderPageBodyPriceInput.value);
        const tag = orderPageBodyTagInput.value;

        if (name && price && tag && typeof(price) === 'number') {
            const id = idGenerator()
            const model = {
                id,
                name,
                price,
                tag,
                createDate : Date.now(),
                updateDate : Date.now(),                
            }
            const tableId = table.id;
            addOrder(tableId, model);
            
            orderPageContainer.remove();
            const tablePageInstance = document.getElementById(tablePageConfig.tablePageContainerConfig.id);
            if (tablePageInstance) {
                tablePageInstance.classList.remove("hide");
            }
            orderPageContainer.classList.add("hide");
        }
        orderPageBodyUpdateOrderButton.removeEventListener('click', function(e) {
            e.preventDefault();
           
        });
    });

    //#region //* Append Elements
    
    orderPageHeader.appendChild(orderPageHeaderBackwardButton);

    orderPageBody.appendChild(orderPageNameInput);
    orderPageBody.appendChild(orderPageBodyPriceInput);
    orderPageBody.appendChild(orderPageBodyTagInput);
    orderPageBody.appendChild(orderPageBodyUpdateOrderButton);

    orderPageContainer.appendChild(orderPageHeader);
    orderPageContainer.appendChild(orderPageBody)

    //#endregion

    document.body.appendChild(orderPageContainer);
}

export default orderPage;