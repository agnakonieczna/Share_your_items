import {connect} from "react-redux";
import HomeNavigationAuth from "../components/HomeNavigationAuth";

function mapState(state) {
    return {
        authUser: state.user.authUser
    }
}

export default connect(mapState)(HomeNavigationAuth);