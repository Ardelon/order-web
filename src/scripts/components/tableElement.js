import createElement from "../utilities/createElement";
import { tableElementConfig } from '../../config/landingPageConfig'


const tableElement = () => {

    const {
        tableElementContainerConfig,
        tableElementHeaderConfig,
        tableElementPriceConfig,
        tableElementDateConfig,
        tableElementButtonConfig,
    } = tableElementConfig;
    
    const tableElementContainer = createElement(tableElementContainerConfig);
    const tableElementHeader = createElement(tableElementHeaderConfig);
    const tableElementPrice = createElement(tableElementPriceConfig);
    const tableElementDate = createElement(tableElementDateConfig);
    const tableElementButton = createElement(tableElementButtonConfig);

    tableElementContainer.appendChild(tableElementHeader);
    tableElementContainer.appendChild(tableElementPrice);
    tableElementContainer.appendChild(tableElementDate);
    tableElementContainer.appendChild(tableElementButton);

    return tableElementContainer;

}

export default tableElement