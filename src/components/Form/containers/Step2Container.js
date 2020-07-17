import {connect} from "react-redux";
import { addBags } from "../../../redux/actions";
import Step2 from "../components/Step2";

function mapDispatch(dispatch) {
    return {
        addBags: (bags) => dispatch(addBags(bags)),
    }
}

export default connect(null, mapDispatch)(Step2);