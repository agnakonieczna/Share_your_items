const USER_LOGGED = "USER_LOGGED";
const USER_LOGGED_OUT = "USER_LOGGED_OUT"

function userLogged(email) {
    return {
        type: USER_LOGGED,
        payload: email
    }
}

function userLoggedOut() {
    return {
        type: USER_LOGGED_OUT,
    }
}

export {USER_LOGGED, USER_LOGGED_OUT, userLogged, userLoggedOut}