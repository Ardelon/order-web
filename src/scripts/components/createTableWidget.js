import createElement from "../utilities/createElement";
import { createTableWidgetConfig } from '../../config/landingPageConfig';

const createTableWidget = () => {

    const {
        createTableContainerConfig,
        createTableHeaderConfig,
        createTableInputConfig,
        createTableSubmitButtonConfig,
    } = createTableWidgetConfig;

    const createTableContainer = createElement(createTableContainerConfig);
    const createTableHeader = createElement(createTableHeaderConfig);
    const createTableInput = createElement(createTableInputConfig);
    const createTableSubmitButton = createElement(createTableSubmitButtonConfig);

    createTableContainer.appendChild(createTableHeader);
    createTableContainer.appendChild(createTableInput);
    createTableContainer.appendChild(createTableSubmitButton);

    return createTableContainer;

};

export default createTableWidget