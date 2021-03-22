import React from 'react'
import PropTypes from 'prop-types'


const Cta9 = ({ cta }) => {

    return (
    	<>
        <div className="downloadsection">
	        <h4>The Ultimate Guide to Employee Rewards and Recognition</h4>
	         <p>Find out how to shape a culture that attracts, engages, and retains your top employees. 
	        </p>
	        <div>
	            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/h_299/vantagecms/uploads/2020/10/rnr2020-ebook-mockup.png" alt="The Ultimate Guide to Employee Rewards and Recognition" className="img-responsive" />
	        </div>
	        <div className="transform">
	            <a className="download_cta_banner_popup menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-rewards-recognition/" target="_blank">
	               <span>Download Now</span>
	            </a>
	        </div>
	    </div> 
	    </>        
    );
}

export default Cta9
