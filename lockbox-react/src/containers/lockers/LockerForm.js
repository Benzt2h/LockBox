import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import FormField from './FormField';
import { DepositField, WithdrawField } from './LockerFormField';

class LockerForm extends Component {

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required, readonly, maxlength }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} readonly={readonly} maxlength={maxlength} component={FormField} />
            )
        })
    }

    timestamp() {
        const time = new Date().toLocaleTimeString();
        let timetext = document.getElementsByName('timestamp').value
        //timetext.value = time;
        console.log(timetext)
    }

    render() {
        const { onLockerSubmit, match } = this.props
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onLockerSubmit)}>
                    {match.path.indexOf("deposit") > 0 && (
                        this.renderFields(DepositField)
                    )}
                    {match.path.indexOf("withdraw") > 0 && (
                        this.renderFields(WithdrawField)
                    )}
                    {this.timestamp()}
                    <button className="btn btn-block btn-info" type="submit">ยืนยัน</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ locker }) {
    if (locker && locker.id) {
        return { initialValues: locker }
    } else {
        return {}
    }
}

LockerForm = reduxForm({ form: "lockerform" })(LockerForm)

export default connect(mapStateToProps)(LockerForm)