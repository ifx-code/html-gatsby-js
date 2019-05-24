import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = () => (
	<>
		<SEO title="Services" keywords={[`gatsby`, `application`, `react`]} />
		<Layout>
			<h1 className="mt-4 mb-3">Services 
      			<small> Subheading</small>
    		</h1>
			<ol className="breadcrumb">
      			<li className="breadcrumb-item">
					<Link to="/">Home</Link>
      			</li>
      			<li className="breadcrumb-item active">Services</li>
			</ol>
            <img className="img-fluid rounded mb-4" src="http://placehold.it/1200x300" alt=""></img>
			<div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header">Card Title</h4>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-primary" to="/">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header">Card Title</h4>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-primary" to="/">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header">Card Title</h4>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-primary" to="/">Learn More</Link>
                        </div>
                    </div>
                </div>
    		</div>
		</Layout>
	</>	
)

export default ServicePage
