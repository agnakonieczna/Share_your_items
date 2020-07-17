import {connect} from "react-redux";
import { addLocalization, addHelpGroups } from "../../../redux/actions";
import Step3 from "../components/Step3";

function mapDispatch(dispatch) {
    return {
        addLocalization: (localization) => dispatch(addLocalization(localization)),
        addHelpGroups: (helpGroups) => dispatch(addHelpGroups(helpGroups))
    }
}

export default connect(null, mapDispatch)(Step3);