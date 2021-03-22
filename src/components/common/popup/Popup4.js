import React from 'react'
// import HubspotForm from 'react-hubspot-form'

const Popup4 = ({ popup }) => {

    return (
    	<>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 exit_popup_details">
                <div className="content_wrapper-1">
                    <div className="contenttag">FREE RESOURCE</div>
                    <div className="content-title-1">
                        Work-From-Home: A Definitive Guide For Managers
                    </div>
                    <div className="content-desc-1">
                        This is a step-by-step guide for managers, HR professionals and business owners to design, implement, and improve working-from-home practices for their employees.
                    </div>
                    <div className="sidebar">
                        <div className="subscribe_wrapper">
                            {/* <HubspotForm
                                portalId='6153052'
                                formId='d371a027-c481-4a5b-942c-d6ee9412bb37'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            /> */}
                            <div className="transform">
                                <a className="btn_get btn-meta btn_hover" href="https://www.vantagecircle.com/resources/free-ebook-work-from-home-a-definitive-guide-for-managers/" target="_blank">
                                   <span>Download now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 exit_popup_book">
                <div className="image_wrapper-1">
                    <img loading="lazy" className="img-responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300,e_trim/vantagecms/uploads/2020/05/ebook-banner-wfh.png" alt="A Definitive Guide For Managers" />
                </div>
                
                <img loading="lazy" className="vc_fl_abs" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/vantagecms/uploads/2020/01/vantage-circle-symbol-white.png" alt="vc flower pattern" />
            </div>
		</>         
    );
}

export default Popup4
