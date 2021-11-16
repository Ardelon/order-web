import createElement from "../utilities/createElement";
import { tagGroupConfig } from "../../config/tablePageConfig";
const tagGroup = () => {

    const {
        tagGroupContainerConfig,
        tagGroupHeaderConfig,
        tagGroupHeaderTextConfig,
        tagGroupHeaderExpandConfig,
        tagGroupBodyConfig,

    } = tagGroupConfig


    const tagGroupContainer = createElement(tagGroupContainerConfig);
    const tagGroupHeader = createElement(tagGroupHeaderConfig);
    const tagGroupHeaderText = createElement(tagGroupHeaderTextConfig);
    const tagGroupHeaderExpand = createElement(tagGroupHeaderExpandConfig);
    const tagGroupBody = createElement(tagGroupBodyConfig);

    tagGroupHeader.appendChild(tagGroupHeaderText);
    tagGroupHeader.appendChild(tagGroupHeaderExpand);

    tagGroupContainer.appendChild(tagGroupHeader);
    tagGroupContainer.appendChild(tagGroupBody);

    return tagGroupContainer

}

export default tagGroup;