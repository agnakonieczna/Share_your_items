import {connect} from "react-redux";
import Form from "../components/Form";

function mapState(state) {
    return {
        user: state.user.authUser,
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

export default connect(mapState)(Form);