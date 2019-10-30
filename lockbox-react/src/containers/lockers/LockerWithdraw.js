import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import FormField from './FormField';
import { WithdrawField } from './LockerFormField';

class LockerWithdraw extends Component {

    constructor(props) {
        super(props);
        this.refPassword = React.createRef();
    }

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required, readonly, maxlength }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} readonly={readonly} maxlength={maxlength} component={FormField} />
            )
        })
    }


    render() {
        const { onLockerSubmit } = this.props
        return (
            <form onSubmit={this.props.handleSubmit(onLockerSubmit)}>
                {this.renderFields(WithdrawField)}
                <button className="btn btn-block btn-info" type="submit">ยืนยัน</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    if (values["p-password"] != userPassword) {
        errors["p-password"] = "รหัสผ่านไม่ถูกต้อง"
    } if (values["p-price"] < values["price"]) {
        errors["p-price"] = "กรุณาใส่เงินเพิ่ม"
    }

    return errors
}

let userPassword = null

function mapStateToProps({ locker }) {
    if (locker && locker.id) {
        userPassword = locker.password
        return { initialValues: locker }
    } else {
        return {}
    }
}

LockerWithdraw = reduxForm({ validate, form: "lockerform" })(LockerWithdraw)

export default connect(mapStateToProps)(LockerWithdraw)