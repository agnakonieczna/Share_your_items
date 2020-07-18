import {connect} from "react-redux";
import Summary from "../components/Summary";

function mapState(state) {
    return {
        type: state.form.type,
        bags: state.form.bags,
        helpGroups: state.form.helpGroups,
        localization: state.form.localization,
        localizationSpecific: state.form.localizationSpecific,
        street: state.form.addressAndTime.street,
        city: state.form.addressAndTime.city,
        postCode: state.form.addressAndTime.postCode,
        phone: state.form.addressAndTime.phone,
        date: state.form.addressAndTime.date,
        hour: state.form.addressAndTime.hour,
        notes: state.form.addressAndTime.note
    }
}

export default connect(mapState)(Summary);

// let globalState = {
//     user: {
//         authUser: ""
//     },
//     form: {
//         type: "",
//         bags: "",
//         localization: "",
//         helpGroups: [],
//         localizationSpecific: "",
//         addressAndTime: {
//             street: "",
//             city: "",
//             postCode: "",
//             phone:"",
//             date:"",
//             hour: "",
//             note:""
//         }
//     }
// }