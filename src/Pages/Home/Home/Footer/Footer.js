import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    {/* Comlumn-1  */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Smart Dignostic Center</h4>
                        <ul className="list-unstyled">
                            <li>Contuct with us</li>
                            <li>Email: smart.dignostic@gmail.com</li>
                            <li>FaceBook: SmartDiagnosticCenter</li>
                            <li>Phone: +8881490223474</li>
                        </ul>
                    </div>
                    {/* Comlumn-2  */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Smart Dignostic Center</h4>
                        <ul className="list-unstyled">
                            <li>Contuct with us</li>
                            <li>Email: smart.dignostic@gmail.com</li>
                            <li>FaceBook: SmartDiagnosticCenter</li>
                            <li>Phone: +8881490223474</li>
                        </ul>
                    </div>
                    {/* Comlumn-3  */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Smart Dignostic Center</h4>
                        <ul className="list-unstyled">
                            <li>Contuct with us</li>
                            <li>Email: smart.dignostic@gmail.com</li>
                            <li>FaceBook: SmartDiagnosticCenter</li>
                            <li>Phone: +8881490223474</li>
                        </ul>
                    </div>
                    {/* Comlumn-4  */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Smart Dignostic Center</h4>
                        <ul className="list-unstyled">
                            <li>Contuct with us</li>
                            <li>Email: smart.dignostic@gmail.com</li>
                            <li>FaceBook: SmartDiagnosticCenter</li>
                            <li>Phone: +8881490223474</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center text-center">
                        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;