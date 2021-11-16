// TODO table detail. Display tags and order

import createElement from '../utilities/createElement';
import { tablePageConfig } from '../../config/tablePageConfig';

const tablePage = () => {

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

    const tablePageContainer = createElement(tablePageContainerConfig);
    const tablePageHeader = createElement(tablePageHeaderConfig);
    const tablePageBody = createElement(tablePageBodyConfig);
    const tablePageHeaderText = createElement(tablePageHeaderTextConfig);
    const tablePageHeaderBacwardButton = createElement(tablePageHeaderBacwardButtonConfig);
    const tablePageHeaderAddOrderButton = createElement(tablePageHeaderAddOrderButtonConfig);
    const tablePageHeaderStatus = createElement(tablePageHeaderStatusConfig);
    const tablePageHeaderTotalPrice = createElement(tablePageHeaderTotalPriceConfig);
    const tablePageHeaderDate = createElement(tablePageHeaderDateConfig);


    tablePageHeader.appendChild(tablePageHeaderText);
    tablePageHeader.appendChild(tablePageHeaderBacwardButton);
    tablePageHeader.appendChild(tablePageHeaderAddOrderButton);
    tablePageHeader.appendChild(tablePageHeaderStatus);
    tablePageHeader.appendChild(tablePageHeaderTotalPrice);
    tablePageHeader.appendChild(tablePageHeaderDate);

    tablePageContainer.appendChild(tablePageHeader);
    tablePageContainer.appendChild(tablePageBody);


    

}

export default tablePage;