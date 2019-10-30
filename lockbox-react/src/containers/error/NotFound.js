import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {
    return (
        <div>
            <Header />
            <hr />
            <div className="container col-md-8 text-center">
                <h1 className="mt-5" style={{ fontSize: 120 }}>404</h1>
                <h2 className="mb-4">Not Found</h2>
                <p className="title mb-5">ไม่พบหน้าที่คุณค้นหา</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound