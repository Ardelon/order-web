// TODO list all tables and general information. Add table functionality

import createElement from '../utilities/createElement'
import { landingPageConfig } from '../../config/landingPageConfig'; 
import createTableWidget from '../components/createTableWidget';
import tableElement from '../components/tableElement';
import { getTable, getTableList } from '../../store/tableManagers';

const landingPage = () => {


    //#region //* Constants
    const {
        landingPageContainerConfig,
        landingPageHeaderConfig,
        landingPageBodyConfig,
        landingPageBodyHeaderConfig,
        landingPageBodyTableListConfig,
    } = landingPageConfig;

    //#endregion

    //#region //* Create Elements
    const landingPageContainer = createElement(landingPageContainerConfig);
    const landingPageHeader = createElement(landingPageHeaderConfig);
    const landingPageBody = createElement(landingPageBodyConfig);
    const landingPageBodyHeader = createElement(landingPageBodyHeaderConfig);
    const landingPageBodyTableList = createElement(landingPageBodyTableListConfig);

    //#endregion

    //#region //* Append Elements
    const tableList = getTableList();

    if (tableList && tableList.length) {
        tableList.forEach(tableId => {
            const table = getTable(tableId);
            landingPageBodyTableList.appendChild(tableElement(table));            
        });
    }

    landingPageHeader.appendChild(createTableWidget());

    landingPageBody.appendChild(landingPageBodyHeader);
    landingPageBody.appendChild(landingPageBodyTableList);

    landingPageContainer.appendChild(landingPageHeader);
    landingPageContainer.appendChild(landingPageBody);

    //#endregion

    document.body.appendChild(landingPageContainer);

}

export default landingPage