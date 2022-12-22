import React from 'react'
import "../CSS/Footer.css"
function Footer() {
    return (
        <div id='Footer-section'>
            {/* <h2>I am Footer section</h2> */}
            <div className="main-footer">
                <div className="left-content-footer">
                    <h3>Branches in Hyderabad</h3>
                    <ul>
                        <li>JNTU</li>
                        <li>KPHB</li>
                        <li>Kukatpally</li>
                        <li>Jublie Hills</li>
                        <li>Banjara hills</li>
                    </ul>
                </div>
                <div className="middle-content-footer">
                    <h3>Foot Items</h3>
                    <ul>
                        <li>Chicken curry</li>
                        <li>Chicken Biriyani</li>
                        <li>Soups</li>
                        <li>staters</li>
                        <li>Desserts</li>
                        <li>Cool Drinks</li>
                    </ul>
                </div>
                <div className="right-content-footer">
                    <h3>About Us</h3>
                    <h5>Address</h5>
                    <p>Bachupally Road, <br />
                        Sangareddy, kompally 500087
                    </p>
                    <p>Email : food@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <h3>All right &copy; reserved by Food website</h3>
            </div>
        </div>
    )
}

export default Footer
