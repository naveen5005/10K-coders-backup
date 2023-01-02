import React from 'react'
import "../CSS/Footer.css"
function Footer() {
  return (
    <div id='footer-section'>
        <div className="headings">
            <div className="top-heading heading-1">
                <h3>Information</h3>
                <ul>
                    <li>Our Company</li>
                    <li>Data</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="top-heading heading-2" id='application-list'>
                <h3>Application</h3>
                <ul>
                    <li>Download</li>
                    <li>How to Use</li>
                    <li>Content Provider</li>
                </ul>
            </div>
            <div className="top-heading heading-3">
                <h3>API</h3>
                <ul>
                    <li>Documentation</li>
                    <li>Credentials</li>
                    <li>Developer Info</li>
                </ul>
            </div>
            <div className="top-heading heading-4">
                <h3>ReactJS content</h3>
                <p>Copyright 2022 All rights reserved | This template is <br />made with ❤️ by Naveen</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
