import React from 'react'
import PropTypes from 'prop-types'


const Cta4 = ({ cta }) => {

    return (
    	<>
        <div className="downloadsection">
	        <h4>Leadership Qualities that makes you a Great Leader</h4>
	        <p>Delve more into what it takes to be a great leader for driving effective teamwork within the organization.</p>
	        <div className="wfh-img-std">
	            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_174/v1601381705/vantagecms/uploads/2020/09/ebook-Leadership-min.png" alt="Work From Home Ebook" className="img-responsive" />
	        </div>
	        <div className="transform">
	            <a className="download_cta_banner_popup menu_cus btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/leadership-qualities-that-makes-you-great-leader/" target="_blank">
	               <span>Download Now</span>
	            </a>
	        </div>
	    </div> 
	    </>         
    );
}

export default Cta4
