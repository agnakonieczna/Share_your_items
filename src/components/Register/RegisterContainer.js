import {connect} from "react-redux";
import {userLogged, userLoggedOut} from '../../redux/actions';
import Register from "./Register";

function mapDispatch(dispatch) {
    return {
        userLoggedIn: (authUser) => dispatch(userLogged(authUser)),
        userLoggedOut: () => dispatch(userLoggedOut())
    }
}

export default connect(null, mapDispatch)(Register);