import {connect} from "react-redux";
import HomeAboutApp from "../components/HomeAboutApp";

function mapState(state) {
    return {
        authUser: state.user.authUser
    }
}

export default connect(mapState)(HomeAboutApp);