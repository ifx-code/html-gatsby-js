import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SpeakersPage = () => (
	<>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<Layout>
			<h1 className="mt-4 mb-3">Contact 
      			<small> Subheading</small>
    		</h1>
			<ol className="breadcrumb">
      			<li className="breadcrumb-item">
					<Link to="/">Home</Link>
      			</li>
      			<li className="breadcrumb-item active">Contact</li>
			</ol>
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
                </div>
                <div className="col-lg-4 mb-4">
                    <h3>Contact Details</h3>
                    <p>5230 Newell Road<br/>Palo Alto</p>
                    <p>P : (123) 456-7890 </p>
                    <p>E : <a href="mailto:fadil@xcoder.developer">fadil@xcoder.developer</a></p>
                    <p>H : Monday - Friday: 9:00 AM to 5:00 PM</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <h3>Send us a Message</h3>
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Full Name:</label>
                                <input type="text" className="form-control" id="name" required />
                                <p className="help-block"></p>
                            </div>
                        </div>
                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Phone Number:</label>
                                <input type="tel" className="form-control" id="phone" required />
                            </div>
                        </div>
                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Email Address:</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                        </div>
                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Message:</label>
                                <textarea rows="10" cols="100" className="form-control" id="message" required style={{ resize: "none" }}></textarea>
                            </div>
                        </div>
                        <div id="success"></div>
                        <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
                    </form>
                </div>
            </div>
        </Layout>
	</>	
)

export default SpeakersPage
