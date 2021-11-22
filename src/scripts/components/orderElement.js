import createElement from "../utilities/createElement";
import { orderElementConfig } from "../../config/tablePageConfig";
import orderPage from "../views/orderPage";
import { cancelOrder, updateOrder } from "../../store/orderManagers";
import { removeOrderlessTags } from "../../store/tableManagers";

const orderElement = (table,order) => {

    //#region //* Constants 

    const {
        orderElementContainerConfig,
        orderElementOrderNameConfig,
        orderElementPriceConfig,
        orderElementStatusConfig,
        orderElementUpdateOrderButtonConfig,
        orderElementPayOrderButtonConfig,
        orderElementCancelOrderButtonConfig,
    } = orderElementConfig

    //#endregion

    //#region //* Create Elements
    const orderElementContainer = createElement(orderElementContainerConfig);
    const orderElementOrderName = createElement(orderElementOrderNameConfig);
    const orderElementPrice = createElement(orderElementPriceConfig);
    const orderElementStatus = createElement(orderElementStatusConfig);
    const orderElementUpdateOrderButton = createElement(orderElementUpdateOrderButtonConfig);
    const orderElementPayOrderButton = createElement(orderElementPayOrderButtonConfig);
    const orderElementCancelOrderButton = createElement(orderElementCancelOrderButtonConfig);

    //#endregion

    //#region //* Load Information

    orderElementOrderName.innerText = order.name
    orderElementPrice.innerText = order.price
    orderElementStatus.innerText = order.status || 'status'

    //#endregion

    //#region //* Append Events

    orderElementUpdateOrderButton.addEventListener('click', function(e) {
        e.preventDefault();
        orderPage(table, order);
        orderElementUpdateOrderButton.removeEventListener('click', function(e) {
            e.preventDefault();
        })
    })

    orderElementPayOrderButton.addEventListener('click', function(e) {
        e.preventDefault();
        const model = order;
        model.status = 'paid';
        updateOrder(model);
        removeOrderlessTags(table.id)
        orderElementPayOrderButton.removeEventListener('click', function(e) {
            e.preventDefault();
        })
    });

    orderElementCancelOrderButton.addEventListener('click', function(e) {
        e.preventDefault();
      
        cancelOrder(table.id, order);
        removeOrderlessTags(table.id);
        orderElementCancelOrderButton.removeEventListener('click', function(e) {
            e.preventDefault();
        })
    });

    cancelOrder
    //#endregion


    //#region //* Append Elements

    orderElementContainer.appendChild(orderElementOrderName);
    orderElementContainer.appendChild(orderElementPrice);
    orderElementContainer.appendChild(orderElementStatus);
    orderElementContainer.appendChild(orderElementUpdateOrderButton);
    orderElementContainer.appendChild(orderElementPayOrderButton);
    orderElementContainer.appendChild(orderElementCancelOrderButton);
   
    //#endregion
    return orderElementContainer
};

export default orderElement;
