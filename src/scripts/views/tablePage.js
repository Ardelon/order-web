// TODO table detail. Display tags and order

import createElement from '../utilities/createElement';
import { tablePageConfig } from '../../config/tablePageConfig';
import orderPage from './orderPage';
import { landingPageConfig } from '../../config/landingPageConfig';
import { getTagList } from '../../store/tagManagers';
import tagGroup from '../components/tagGroup';

const tablePage = (table) => {

    //#region //* Constants

    const {
        tablePageContainerConfig,
        tablePageHeaderConfig,
        tablePageBodyConfig,
        tablePageHeaderTextConfig,
        tablePageHeaderBacwardButtonConfig,
        tablePageHeaderAddOrderButtonConfig,
        tablePageHeaderStatusConfig,
        tablePageHeaderTotalPriceConfig,
        tablePageHeaderDateConfig,
    } = tablePageConfig;

    const tagList = getTagList();

    //#endregion

    //#region //* Create Elements

    const tablePageContainer = createElement(tablePageContainerConfig);
    const tablePageHeader = createElement(tablePageHeaderConfig);
    const tablePageBody = createElement(tablePageBodyConfig);
    const tablePageHeaderText = createElement(tablePageHeaderTextConfig);
    const tablePageHeaderBacwardButton = createElement(tablePageHeaderBacwardButtonConfig);
    const tablePageHeaderAddOrderButton = createElement(tablePageHeaderAddOrderButtonConfig);
    const tablePageHeaderStatus = createElement(tablePageHeaderStatusConfig);
    const tablePageHeaderTotalPrice = createElement(tablePageHeaderTotalPriceConfig);
    const tablePageHeaderDate = createElement(tablePageHeaderDateConfig);

    tablePageHeaderText.innerText = table.name;
    tablePageHeaderTotalPrice.innerText = table.price;
    tablePageHeaderDate.innerText = table.date;

    if (tagList) {
        tagList.forEach(tag => {
            tablePageBody.appendChild(tagGroup(table.orderList, tag))
        });
    }


    //#endregion

    //#region //* Append Event Listeners 

    tablePageHeaderBacwardButton.addEventListener('click', function(e) {
        e.preventDefault();
        const landingPageInstance = document.getElementById(landingPageConfig.landingPageContainerConfig.id);
        if (landingPageInstance) {
            landingPageInstance.classList.remove("hide");
        }
        tablePageContainer.remove();
        tablePageHeaderBacwardButton.removeEventListener('click', function(e) {
            e.preventDefault();
            const landingPageInstance = document.getElementById(landingPageConfig.landingPageContainerConfig.id);
            if (landingPageInstance) {
                landingPageInstance.classList.remove("hide");
            }
        });
    });

    tablePageHeaderAddOrderButton.addEventListener('click', function(e) {
        e.preventDefault();
        orderPage(table);
        tablePageContainer.classList.add("hide");
        tablePageHeaderAddOrderButton.removeEventListener('click', function(e) {
            e.preventDefault();
            orderPage(table);
            tablePageContainer.classList.add("hide");
        });
    });

    //#endregion

    //#region //* Append Elements

    tablePageHeader.appendChild(tablePageHeaderText);
    tablePageHeader.appendChild(tablePageHeaderBacwardButton);
    tablePageHeader.appendChild(tablePageHeaderAddOrderButton);
    tablePageHeader.appendChild(tablePageHeaderStatus);
    tablePageHeader.appendChild(tablePageHeaderTotalPrice);
    tablePageHeader.appendChild(tablePageHeaderDate);

    tablePageContainer.appendChild(tablePageHeader);
    tablePageContainer.appendChild(tablePageBody);

    //#endregion
    
    document.body.appendChild(tablePageContainer);

}

export default tablePage;