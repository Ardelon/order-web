import createElement from "../utilities/createElement";
import { landingPageConfig, tableElementConfig } from '../../config/landingPageConfig'
import tablePage from '../views/tablePage';

const tableElement = (table) => {
    console.log(table);

    //#region //* Constants

    const {
        tableElementContainerConfig,
        tableElementHeaderConfig,
        tableElementPriceConfig,
        tableElementDateConfig,
        tableElementButtonConfig,
    } = tableElementConfig;
    
    //#endregion

    //#region //* Create Elements

    const tableElementContainer = createElement(tableElementContainerConfig);
    const tableElementHeader = createElement(tableElementHeaderConfig);
    const tableElementPrice = createElement(tableElementPriceConfig);
    const tableElementDate = createElement(tableElementDateConfig);
    const tableElementButton = createElement(tableElementButtonConfig);

    tableElementHeader.innerText = table.name;
    tableElementPrice.innerText = table.price;
    tableElementDate.innerText = table.date;
    tableElementButton.innerText = 'Güncelle'

    //#endregion
    
    //#region //* Append Event Listener

    tableElementButton.addEventListener('click', function(e) {
        e.preventDefault();
        const landingPageInstance = document.getElementById(landingPageConfig.landingPageContainerConfig.id);
        if (landingPageInstance) {
            landingPageInstance.classList.add("hide");
        }
        tablePage(table);
        tableElementButton.removeEventListener('click', function(e) {
            e.preventDefault();
            tablePage(table)
        });
    });

    //#endregion

    //#region //* Append Elements

    tableElementContainer.appendChild(tableElementHeader);
    tableElementContainer.appendChild(tableElementPrice);
    tableElementContainer.appendChild(tableElementDate);
    tableElementContainer.appendChild(tableElementButton);

    //#endregion

    return tableElementContainer;

}

export default tableElement