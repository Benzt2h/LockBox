import React from 'react';
// meta :{error,touched}
export default ({ label, input, type, required, readonly, maxlength, ref, meta }) => {
    return (
        <div className="form-group">
            <label>{label}</label>

            <input className="form-control" required={required} readOnly={readonly} maxLength={maxlength} type={type} {...input} />
            {meta.error && meta.touched &&
                (
                    <div className="text-danger">{meta.error}</div>
                )
            }
        </div>
    )
}