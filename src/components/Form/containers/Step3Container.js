import {connect} from "react-redux";
import { addLocalization, addHelpGroups, addSpecificLocalization } from "../../../redux/actions";
import Step3 from "../components/Step3";

function mapDispatch(dispatch) {
    return {
        addLocalization: (localization) => dispatch(addLocalization(localization)),
        addHelpGroups: (helpGroups) => dispatch(addHelpGroups(helpGroups)),
        addSpecificLocalization: (localization) => dispatch(addSpecificLocalization(localization))
    }
}

export default connect(null, mapDispatch)(Step3);