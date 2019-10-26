import React, { Component } from 'react';

class Locker extends Component {

    renderLockerSize(size) {
        if (size == "M") {
            if (this.props.start == null) {
                return (
                    <div className="col-2">
                        <button className=" btn btn-outline-primary btn-block" onClick={() => this.props.onLockerDeposit(this.props.id)}>M</button>
                    </div>
                )
            } else {
                return (
                    <div className="col-2">
                        <button className=" btn btn-outline-danger btn-block" onClick={() => this.props.onLockerWithdraw(this.props.id)}>M</button>
                    </div>
                )
            }
        } else if (size == "L") {
            if (this.props.start == null) {
                return (
                    <div className="col-3">
                        <button className="btn btn-outline-primary btn-block" style={{ height: 100 }} onClick={() => this.props.onLockerDeposit(this.props.id)}>L</button>
                    </div>
                )
            } else {
                return (
                    <div className="col-3">
                        <button className="btn btn-outline-danger btn-block" style={{ height: 100 }} onClick={() => this.props.onLockerWithdraw(this.props.id)}>L</button>
                    </div>
                )
            }
        } else if (size == "XL") {
            if (this.props.start == null) {
                return (
                    <div className="col-5">
                        <button className="btn btn-outline-primary btn-block" style={{ height: 200 }} onClick={() => this.props.onLockerDeposit(this.props.id)}>XL</button>
                    </div>
                )
            } else {
                return (
                    <div className="col-5">
                        <button className="btn btn-outline-danger btn-block" style={{ height: 200 }} onClick={() => this.props.onLockerWithdraw(this.props.id)}>XL</button>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            this.renderLockerSize(this.props.lockerSize)
        )
    }
}

export default Locker