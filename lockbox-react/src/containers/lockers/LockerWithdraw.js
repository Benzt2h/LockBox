import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import FormField from './FormField';
import { WithdrawField } from './LockerFormField';

class LockerWithdraw extends Component {

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
            <div>
                <h3>รับของ</h3>
                <form onSubmit={this.props.handleSubmit(onLockerSubmit)}>
                    {this.renderFields(WithdrawField)}
                    <button className="btn btn-block btn-info" type="submit">ยืนยัน</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    if (values["p-password"] != values["password"]) {
        errors["p-password"] = "รหัสผ่านไม่ถูกต้อง"
    } if (values["p-price"] < values["price"]) {
        errors["p-price"] = "กรุณาใส่เงินเพิ่ม"
    }

    return errors
}

function mapStateToProps({ locker }) {
    if (locker && locker.id) {
        return { initialValues: locker }
    } else {
        return {}
    }
}

LockerWithdraw = reduxForm({ validate, form: "lockerform" })(LockerWithdraw)

export default connect(mapStateToProps)(LockerWithdraw)