import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className=" container">
                <header className="blog-header py-2">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="text-center btn-block">
                            <Link className="blog-header-logo text-muted h3" to="/">LockBox</Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}

export default withRouter(Header)