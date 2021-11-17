import createElement from "../utilities/createElement";
import { createTableWidgetConfig } from '../../config/landingPageConfig';
import { addNewTable } from "../../store/tableManagers";
import { idGenerator } from "../utilities/idGenerator";

const createTableWidget = () => {


    //#region //* Constants

    const {
        createTableContainerConfig,
        createTableHeaderConfig,
        createTableInputConfig,
        createTableSubmitButtonConfig,
    } = createTableWidgetConfig;

    //#endregion

    //#region //* Create Elements

    const createTableContainer = createElement(createTableContainerConfig);
    const createTableHeader = createElement(createTableHeaderConfig);
    const createTableInput = createElement(createTableInputConfig);
    const createTableSubmitButton = createElement(createTableSubmitButtonConfig);

    //#endregion

    //#region //* Append Events

    createTableSubmitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const model = {
            id : idGenerator(),
            name : createTableInput.value,
            orderList : [],
            tagList : [],
            date : Date.now(),
            price : 0
        }
        if (createTableInput.value !== '') {
            addNewTable(model);
        }
        createTableSubmitButton.removeEventListener('click', function(e) {
            e.preventDefault();
        })
    })

    //#endregion

    //#region //* Append Elements

    createTableContainer.appendChild(createTableHeader);
    createTableContainer.appendChild(createTableInput);
    createTableContainer.appendChild(createTableSubmitButton);

    //#endregion

    return createTableContainer;

};

export default createTableWidget