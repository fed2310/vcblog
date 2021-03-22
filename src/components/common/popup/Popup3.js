import React from 'react'
// import HubspotForm from 'react-hubspot-form'

const Popup3 = ({ popup }) => {

    return (
    	<>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="contenttag">FREE RESOURCE</div>
                    <div className="content-title-1">
                        A Complete Guide to Rewards and Recognition
                    </div>
                    <div className="content-desc-1">
                        Find out why your organization needs an employee reward and recognition scheme, as well as how to create an effective one.
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                            {/* <HubspotForm
                                portalId='6153052'
                                formId='5ff64ac3-2af2-4e37-940e-346d1a0bd6fb'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            /> */}
                            <div className="transform">
                                <a className="btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-rewards-recognition/" target="_blank">
                                   <span>Download now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 exit_popup_book">
                <div className="image_wrapper-1">
                    <img loading="lazy" className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/h_299/vantagecms/uploads/2020/10/rnr2020-ebook-mockup.png" alt="A Complete Guide to Rewards and Recognition" />
                </div>
                
                <img loading="lazy" className="vc_fl_abs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2020/01/vantage-circle-symbol-white.png" alt="vc flower pattern" />
            </div>
		</>         
    );
}

export default Popup3
