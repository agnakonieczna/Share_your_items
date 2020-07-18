import {connect} from "react-redux";
import { addAddressAndTime } from "../../../redux/actions";
import Step4 from "../components/Step4";

function mapDispatch(dispatch) {
    return {
        addAddressAndTime: (address) => dispatch(addAddressAndTime(address)),
    }
}

export default connect(null, mapDispatch)(Step4);