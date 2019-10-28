import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import FormField from './FormField';
import { DepositField } from './LockerFormField';

class LockerDeposit extends Component {

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
                <h3>ฝากของ</h3>
                <form onSubmit={this.props.handleSubmit(onLockerSubmit)}>
                    {this.renderFields(DepositField)}
                    <button className="btn btn-block btn-info" type="submit">ยืนยัน</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    if (values["password"] != values["p-password"]) {
        errors["password"] = "รหัสผ่านไม่ตรงกัน"
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

LockerDeposit = reduxForm({ validate, form: "lockerform" })(LockerDeposit)

export default connect(mapStateToProps)(LockerDeposit)