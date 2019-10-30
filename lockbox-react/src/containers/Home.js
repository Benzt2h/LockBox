import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { lockerFetchs } from '../actions';
import Locker from './lockers/Locker';

class Home extends Component {

    componentDidMount() {
        this.props.lockerFetchs()
        this.lockerDeposit = this.lockerDeposit.bind(this)
        this.lockerWithdraw = this.lockerWithdraw.bind(this)
    }

    showLockers(size) {
        if (this.props.locker && this.props.locker.length > 0) {
            return this.props.locker.map(locker => {
                if (locker.size == size) {
                    return <Locker key={locker.id} {...locker} lockerSize={size} onLockerDeposit={this.lockerDeposit} onLockerWithdraw={this.lockerWithdraw} />
                }
            })
        }
    }

    lockerDeposit(id) {
        this.props.history.push('deposit/' + id);
    }
    lockerWithdraw(id) {
        this.props.history.push('withdraw/' + id);
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <div className="container">
                    <div className="text-center mb-3">
                        <Link to="/howitwork" >ราคาและวิธีใช้งาน</Link>
                    </div>
                    <div className="row justify-content-center">
                        {this.showLockers("M")}
                    </div>
                    <div className="row justify-content-center mt-3">
                        {this.showLockers("L")}
                    </div>
                    <div className="row justify-content-center mt-3">
                        {this.showLockers("XL")}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ locker }) {
    return { locker: locker }
}

export default withRouter(connect(mapStateToProps, { lockerFetchs })(Home))