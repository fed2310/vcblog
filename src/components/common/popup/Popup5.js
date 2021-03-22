import React from 'react'
// import HubspotForm from 'react-hubspot-form'

const Popup5 = ({ popup }) => {

    return (
    	<>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="contenttag">FREE RESOURCE</div>
                    <div className="content-title-1">
                        25 Leadership Qualities that Makes You a Great Leader
                    </div>
                    <div className="content-desc-1">
                        This all in one guide is designed for leaders, and managers to delve more into what it takes to be a great leader for driving effective teamwork within the organization.
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                            {/* <HubspotForm
                                portalId='6153052'
                                formId='8f09c030-10b9-4456-83e1-e1b6c6b8eb46'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            /> */}
                            <div className="transform">
                                <a className="btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/leadership-qualities-that-makes-you-great-leader/" target="_blank">
                                   <span>Download now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 exit_popup_book">
                <div className="image_wrapper-1">
                    <img loading="lazy" className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/v1601381705/vantagecms/uploads/2020/09/ebook-Leadership-min.png" alt="25 Leadership Qualities that Makes You a Great Leader" />
                </div>
                
                <img loading="lazy" className="vc_fl_abs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2020/01/vantage-circle-symbol-white.png" alt="vc flower pattern" />
            </div>
		</>         
    );
}

export default Popup5
