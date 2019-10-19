import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { lockerFetchs } from '../actions';

class Home extends Component {

    componentDidMount() {
        this.props.lockerFetchs()
    }

    render() {
        return (
            <div>
                <Header />

                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ locker }) {
    return { locker: locker }
}

export default withRouter(connect(mapStateToProps, { lockerFetchs })(Home))