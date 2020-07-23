import {connect} from "react-redux";
import { addAddressAndTime } from "../../../redux/actions";
import Step4 from "../components/Step4";

function mapState(state) {
    return {
        user: state.user.authUser
    }
}

function mapDispatch(dispatch) {
    return {
        addAddressAndTime: (address) => dispatch(addAddressAndTime(address)),
    }
}

export default connect(mapState, mapDispatch)(Step4);