import React from 'react'
// import HubspotForm from 'react-hubspot-form'

const Popup7 = ({ popup }) => {

    return (
    	<>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="contenttag">FREE RESOURCE</div>
                    <div className="content-title-1">
                        A Complete Guide to Decoding and Driving Employee Engagement
                    </div>
                    <div className="content-desc-1">
                        Download our step-by-step guide to devise an effective strategy to ensure a happier and productive workforce.
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                            {/* <HubspotForm
                                portalId='6153052'
                                formId='33341868-5fad-4f06-9381-d737cc73d7a4'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            /> */}
                            <div className="transform">
                                <a className="btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-decoding-and-driving-employee-engagement/" target="_blank">
                                   <span>Download now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 exit_popup_book">
                <div className="image_wrapper-1">
                    <img loading="lazy" className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200,e_trim/vantagecms/uploads/2020/02/ebook-employee-engagement-guide.png" alt="A Complete Guide to Decoding and Driving Employee Engagement" />
                </div>
                
                <img loading="lazy" className="vc_fl_abs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2020/01/vantage-circle-symbol-white.png" alt="vc flower pattern" />
            </div>
		</>         
    );
}

export default Popup7
