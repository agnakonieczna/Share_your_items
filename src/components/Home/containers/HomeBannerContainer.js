import {connect} from "react-redux";
import HomeBanner from "../components/HomeBanner";

function mapState(state) {
    return {
        authUser: state.user.authUser
    }
}

export default connect(mapState)(HomeBanner);
