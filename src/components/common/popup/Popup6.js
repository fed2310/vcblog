import React from 'react'
// import HubspotForm from 'react-hubspot-form'

const Popup6 = ({ popup }) => {

    return (
    	<>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="contenttag">FREE RESOURCE</div>
                    <div className="content-title-1">
                        The Post Lockdown Guide for Managers
                    </div>
                    <div className="content-desc-1">
                        This is an insightful mini-guide on how to ensure a safe, practical, and effective organizational reopening after the lockdown period ends.
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                            {/* <HubspotForm
                                portalId='6153052'
                                formId='5f326555-766a-45c9-b986-b7b393cbd851'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            /> */}
                            <div className="transform">
                                <a className="btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/post-lockdown-guide-for-managers/" target="_blank">
                                   <span>Download now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 exit_popup_book">
                <div className="image_wrapper-1">
                    <img loading="lazy" className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300/v1591345599/vantagecms/uploads/2020/06/ebook-banner-postlockdown.png" alt="The Post Lockdown Guide for Managers" />
                </div>
                
                <img loading="lazy" className="vc_fl_abs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2020/01/vantage-circle-symbol-white.png" alt="vc flower pattern" />
            </div>
		</>         
    );
}

export default Popup6
