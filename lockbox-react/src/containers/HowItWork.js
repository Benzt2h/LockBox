import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HowItWork extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <div className=" container-fluid">
                    <div className="row">
                        <div className="col-4 text-center">
                            <h3 className="text-muted ">ราคา</h3>
                            <p className="text-muted ">ขนาด M 1ชม./30 บาท<span className="text-danger">*</span></p>
                            <p className="text-muted ">ขนาด L 1ชม./40 บาท<span className="text-danger">*</span></p>
                            <p className="text-muted ">ขนาด XL 1ชม./50 บาท<span className="text-danger">*</span></p>
                            <p className="text-muted "><span className="text-danger">*</span>เศษนาทีคิดเต็มเป็น 1 ชม.</p>
                        </div>
                        <div className="col-8">
                            <h3 className="text-center text-muted ">วิธีใช้งาน</h3>
                            <div className="row">
                                <div className="col-5 text-muted">
                                    <h4>การฝากของ</h4>
                                    <p>1.เลือกล็อกเกอร์ที่ต้องการ โดยล็อกเกอร์ที่ว่างจะเป็นสีฟ้า</p>
                                    <p>2.ตั้งรหัสผ่าน</p>
                                    <p>3.เดินไปที่ตู้ แล้วเก็บของได้เลย</p>
                                </div>
                                <div className="col text-muted">
                                    <h4>การรับของ</h4>
                                    <p>1.เลือกล็อกเกอร์ที่ทำงานฝากไว้ โดยล็อกเกอร์ที่มีการฝากไว้แล้วจะเป็นสีแดง</p>
                                    <p>2.ใส่เงินตามจำนวนที่แสดง และใส่รหัสผ่าน</p>
                                    <p>3.เดินไปที่ตู้ แล้วรับของได้เลย</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HowItWork