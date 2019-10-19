import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div class=" container">
                <header class="blog-header py-2">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="text-center btn-block">
                            <Link class="blog-header-logo text-muted h3" to="/">LockBox</Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}

export default withRouter(Header)