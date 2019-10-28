import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { lockerFetch, lockerUpdate } from '../../actions';
import { connect } from 'react-redux';
import LockerDeposit from './LockerDeposit';
import LockerWithdraw from './LockerWithdraw';

class LockerDetail extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.lockerFetch(this.props.match.params.id)
        }
    }

    render() {
        const { formValues, locker, lockerUpdate, match } = this.props
        return (
            <div>
                <Header />
                <hr />
                <div className="container col-md-5 mt-3">
                    {match.path.indexOf("deposit") > 0 && (
                        <LockerDeposit onLockerSubmit={() => lockerUpdate(locker.id, formValues)} />
                    )}
                    {match.path.indexOf("withdraw") > 0 && (
                        <LockerWithdraw onLockerSubmit={() => lockerUpdate(locker.id, formValues)} />
                    )}

                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ form, locker }) {
    return { formValues: form.lockerform ? form.lockerform.values : null, locker }
}

export default connect(mapStateToProps, { lockerFetch, lockerUpdate })(LockerDetail)