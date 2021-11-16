// TODO list all tables and general information. Add table functionality

import createElement from '../utilities/createElement'
import { landingPageConfig } from '../../config/landingPageConfig'; 
import createTableWidget from '../components/createTableWidget';
import tableElement from '../components/tableElement';

const landingPage = () => {

    const {
        landingPageContainerConfig,
        landingPageHeaderConfig,
        landingPageBodyConfig,
        landingPageBodyHeaderConfig,
        landingPageBodyTableListConfig,
    } = landingPageConfig;


    const landingPageContainer = createElement(landingPageContainerConfig);
    const landingPageHeader = createElement(landingPageHeaderConfig);
    const landingPageBody = createElement(landingPageBodyConfig);
    const landingPageBodyHeader = createElement(landingPageBodyHeaderConfig);
    const landingPageBodyTableList = createElement(landingPageBodyTableListConfig);




    landingPageBody.appendChild(landingPageBodyHeader);
    landingPageBody.appendChild(landingPageBodyTableList);

    landingPageContainer.appendChild(landingPageHeader);
    landingPageContainer.appendChild(landingPageBody);




}

export default landingPage