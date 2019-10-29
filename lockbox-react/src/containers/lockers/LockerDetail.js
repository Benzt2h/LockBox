import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { lockerFetch, lockerUpdate } from '../../actions';
import { connect } from 'react-redux';
import LockerDeposit from './LockerDeposit';
import LockerWithdraw from './LockerWithdraw';
import { Redirect } from 'react-router-dom';

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
                        <div>
                            <h3>ฝากของ</h3>
                            {locker.saved && (
                                alert(locker.msg),
                                <Redirect to="/" />
                            )
                            }
                            <LockerDeposit lockerPassword={locker.password} onLockerSubmit={() => lockerUpdate(locker.id, formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("withdraw") > 0 && (
                        <div>
                            <h3>รับของ</h3>
                            {locker.saved && (
                                alert(locker.msg),
                                <Redirect to="/" />
                            )
                            }
                            <LockerWithdraw lockerPassword={locker.password} onLockerSubmit={() => lockerUpdate(locker.id, formValues)} />
                        </div>
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