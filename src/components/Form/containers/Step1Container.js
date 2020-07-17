import {connect} from "react-redux";
import { addType } from "../../../redux/actions";
import Step1 from "../components/Step1";

function mapDispatch(dispatch) {
    return {
        addType: (type) => dispatch(addType(type)),
    }
}

export default connect(null, mapDispatch)(Step1);