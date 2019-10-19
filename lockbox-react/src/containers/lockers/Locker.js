import React, { Component } from 'react';

class Locker extends Component {

    renderLockerSize(size) {
        if (size == "M") {
            if (!this.props.status) {
                return (
                    <div className="col-2">
                        <button className=" btn btn-outline-primary btn-block">M</button>
                    </div>
                )
            } else {
                return (
                    <div className="col-2">
                        <button className=" btn btn-outline-danger btn-block">M</button>
                    </div>
                )
            }
        } else if (size == "L") {
            return (
                <div className="col-3">
                    <button className="btn btn-outline-primary btn-block" style={{ height: 100 }}>L</button>
                </div>
            )
        } else if (size == "XL") {
            return (
                <div className="col-5">
                    <button className="btn btn-outline-primary btn-block" style={{ height: 200 }}>XL</button>
                </div>
            )
        }
    }

    render() {
        return (
            this.renderLockerSize(this.props.lockerSize)
        )
    }
}

export default Locker