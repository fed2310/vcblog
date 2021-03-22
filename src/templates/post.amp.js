import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MetaData } from '../components/common/meta'
import _ from 'lodash';

const Post = (postData) => {
    const { data, location } = postData
    const post = data.ghostPost
    const isamp = true
    // const html = JSON.stringify(post.html)
    // const html = post.html
    // console.log('amp',postData)

    return (
        <>
            <MetaData
                data={data}
                location={location}
                amp={postData.pageContext.amp}
                type="article"
                isamp = {isamp}
            />
            {!postData.pageContext.amp && 
            <Helmet>
                <style amp-custom>{`
                body{color:#2c2d4f;font-family:'PT Sans',sans-serif;counter-reset:quotes-counter;font-size:15px;line-height:1.8}.amp-img-container{position:relative;height:248px;margin:5vmin 0;float:left;width:100%}amp-img{height:100%;width:100%;max-width:100%;max-height:100%}amp-img img{-o-object-fit:contain;object-fit:contain}p{margin-bottom:0}.content{max-width:680px;margin:0 auto;padding:5px;}header.content{padding:20px 0;text-align:center}a{color:#5b3b97}h1,h2,h3,h4,h5,h6{margin:0;font-weight:700}h1{letter-spacing:.3px;font-size:1.8rem;line-height: 1.4;}h2{font-size:1.6rem;line-height:1.2em}h3{font-size:1.4rem;line-height:1.1em}h4{font-size:1.2rem;line-height:1em}.post-header{text-align:center}.content-title{margin-bottom:.5em}.author-detail a,.author-detail p,.post-full-content li,p{font-size:1rem}.content-body>*+*{margin-top:1.5em;margin-bottom:15px}.content-body ul{padding-left:15px}.post-full-published-date{margin:1rem 0 0 0;text-transform:uppercase;color:#738a94;font-weight:500;font-size:.9rem}blockquote{box-shadow:none;border-radius:0;margin:50px 0 0;padding:20px 40px 20px 35px;background-color:rgb(241 81 98 / .05)}blockquote p{font-size:1rem;margin-top:0;margin-bottom:0}.post-full-content ul li{list-style:none;}.post-full-content li{position:relative;padding:0;margin-bottom:15px;margin-left:10px}.post-full-content ol{padding-left:10px;}.post-full-content ul li::before{content:"";display:block;width:6px;height:6px;background:#5b3b97;position:absolute;top:.8333333333335em;left:-15px;margin-top:-2px;border-radius:50%}.page-footer{padding:60px 5vmin 30px;margin:60px auto 0;text-align:center;background-color:#f8f8f8;}.page-footer h3{line-height:1.3;margin-bottom:20px}.page-footer p{max-width:500px;margin:1rem auto 1.5rem;font-size:1rem;line-height:1.5em;color:rgba(0,0,0,.6)}.page-footer p a{font-weight:500}.cta-banner img{width:100%}.main-container-pdn1{margin-top:0}.author-detail amp-img{width:75px;margin-right:15px}.author-detail .single-author-wrapper{display:flex}.author-detail p{line-height:1.6;}.author-detail{border-top:1px solid #ccc;}.content_c {position: relative;padding: 40px;float: left;width: 100%;margin: 40px 0;font-size: 15px;overflow: hidden;border-radius: 15px;background-color: #f4f7ff;}.content_c .table_heading {text-align: left;color: #5b3b97;font-size: 18px;line-height: 20px;letter-spacing: 2px;margin-bottom: 10px;text-transform: uppercase;font-weight: 700;}.content_c ol {margin-left: 0;padding-left: 0;counter-reset: item;list-style: none;}.content_c ol li:before{counter-increment: item;content: counter(item)". ";margin-right: 10px;font-weight: 700;}.editor-content .content_c ol li {padding-left: 0;color: #5b3b97;font-weight: 400;}.content_c ol li ol {margin-top: 5px;}.content_c ol li li {padding-left: 30px;}.content_c ol li{margin-bottom:5px;color: #5b3b97;}.content_c ol li li:before {content: counters(item,".") " ";}.hrmstitle_wrapper{float:left;width:100%;margin-top:40px;margin-bottom:10px}.hrmstitle_wrapper h2{margin-top:0;margin-bottom:0;margin-right:10px}.hrmstitle_wrapper .col-8{display:flex;align-items:center}.hrmstitle_wrapper img{max-width:70px;margin-right:10px;float:left;margin-top:2px}.hrmstitle_wrapper .fluidbox__ghost{position:relative;float:left;width:0}.hrmstitle_wrapper .content-inner .editor-content ol{padding-left:1em}.hrmstitle_wrapper .learnmore-btn{padding-right:0;margin:23px auto 10px}.hrmstitle_wrapper .download_cta_banner_popup.ghost-btn{border:1px solid #2c2d4f;background-color:transparent;color:#2c2d4f;float:right;transition:all .3s ease}.hrmstitle_wrapper .download_cta_banner_popup.ghost-btn:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.Stars{--percent:calc(var(--rating) / 5 * 100%);display:inline-block;font-size:var(--star-size);font-family:Times;line-height:1}.Stars::before{content:'★★★★★';letter-spacing:3px;background:linear-gradient(90deg,var(--star-background) var(--percent),var(--star-color) var(--percent));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.starrate{font-size:13px}.starrate span{font-size:15px;font-weight:500}.star-rating-table{width:auto;margin:0 auto 20px}.star-rating-table thead>tr{background-color:#f6f9fb}.star-rating-table thead>tr>th{border-bottom:0;text-transform:uppercase;vertical-align:middle;font-weight:700;font-size:16px;padding:10px 20px;color:#2c2d4f}.star-rating-table tbody>tr>td{vertical-align:middle;font-size:16px}.star-rating-table.no-stars tbody>tr>td{font-weight:300;color:#2c2d4f}.table-bordered td,.table-bordered th{border:1px solid #e7ebef}.special-blocks{padding:1rem 1rem 1rem 2rem;margin:1.5rem .75rem;position:relative;background-color:#f8f9fa;width:100%}.special-blocks p,blockquote p{margin-bottom:0}.special-blocks:before,blockquote:before{width:1.875rem;height:1.875rem;left:-.825rem;top:1.25rem;border-radius:100%;content:'';position:absolute}.special-blocks:after,blockquote:after{content:'';position:absolute;background-image:url(https://res.cloudinary.com/vantagecircle/image/upload/v1598953025/blog_images/sprite-blog-new.png);background-repeat:no-repeat;margin-right:15px;background-size:auto;display:inline-block;left:-1rem;top:15px;border-radius:0}.special-blocks p:before{display:inline;font-weight:700}.block-tip:after{width:40px;height:42px;background-position:0 -340px}.block-tip:before{background-color:#e5fff8}.block-tip p:before{content:'Tip: '}.block-note:after{width:40px;height:42px;background-position:0 -695px}.block-note:before{background-color:#ebe6f4}.block-note p:before{content:'Note: '}.block-important:after{width:40px;height:42px;background-position:0 -746px}.block-important:before{background-color:#e0f4ff}.block-important p:before{content:'Important: '}.block-warning:after{width:40px;height:42px;background-position:0 -201px}.block-warning:before{background-color:#fad2ca}.block-warning p:before{content:'Warning: '}.block-questions:after{width:45px;height:42px;background-position:0 -290px}.block-questions:before{background-color:#ffe7cd}.block-questions p:before{content:'Have any questions? '}.special-blocks.block-questions{background-color:#fff;border:2px solid #f6f6f6}blockquote{padding:1.5rem 1.5rem 1.5rem 2.5rem;margin:1.5rem .75rem;position:relative;background-color:#f8f9fa;margin-inline-start:0;display:flex}blockquote span{display:block;margin-top:10px;font-weight:400}.editor-content blockquote p{line-height:1.6;font-size:18px;font-weight:500}blockquote:before{background-color:#ebe6f4;z-index:2}blockquote:after{width:45px;height:42px;background-position:0 -381px;z-index:3}blockquote.block-multiquote{background-color:#fff;border:2px solid #f6f6f6}.block-multiquote:before{width:2rem;height:2rem;left:-.9rem;top:1.2rem}.block-multiquote:after{counter-increment:quotes-counter;content:counter(quotes-counter,decimal-leading-zero);left:-9px;top:22px;font-weight:700;opacity:1;font-size:18px;background-image:none}.result_box{background:#f5f5fa;margin-top:-3px;line-height:1.4;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;width:85%;text-align:center;color:#212529;float:left;margin-right:5px}.attrition-rate-calc{border:2px solid rgb(91 59 151 / 30%);max-width:550px;margin:50px auto;padding-bottom:30px;position:relative;padding-top:30px;border-radius:6px}.attrition-rate-calc .form-control{text-align:center;border-radius:0;margin-bottom:0;border:2px solid rgb(91 59 151 / 30%);transition:all .3s ease}.attrition-rate-calc .form-control:focus{background:#f5f5fa;box-shadow:0 0 0 .2rem rgb(91 59 150 / 15%)}.attrition-rate-calc .control-label{margin-bottom:0}.attrition-rate-calc .control-label,.form-group.d-flex{color:#212529}.form-group.d-flex{margin-bottom:10px}.pc_sym{margin-top:4px;float:left}.result-title{width:110px;height:28px;background-color:#5b3b97;margin-top:40px;float:left;color:#fff;padding-left:31px;line-height:1.8;font-size:17px;font-weight:400;border-radius:4px 4px 0 0}.result-title-hr{border-bottom:2px solid #5b3b97;float:left;width:100%;margin-bottom:20px}.calc-box-title{margin-top:-60px;background:#fff;width:max-content;padding:5px 10px;margin-bottom:25px;position:absolute;left:4%}.calc-box-title h3{margin:0}
                .categories_filtertags{display:none}.all .hrmstitle_wrapper{float:none}.all h4{margin-top:20px}.all .hrmstitle_wrapper .learnmore-btn{margin-top:0px}.all .hrmstitle_wrapper .download_cta_banner_popup.ghost-btn{padding:3px;text-decoration:none}
                `}</style>
                <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
            </Helmet> }
            <header className="text-center content">
                <Link to="/" className="navbar-brand sticky_logo">
                    <amp-img width="220" height="45" alt="Vantage Circle" class="stick_logo" src="https://www.vantagecircle.com/wp-content/uploads/2020/02/vantage-circle-logo-1.png" />
                </Link>
            </header>
            <main className="content" role="main">
                <div className="container">
                    <article className="content">
                        
                        <div className="post-header">
                            <h1 className="content-title">{ post.title }</h1>
                            
                            <div className="post-full-published-date">
                                { post.created_at_pretty }
                            </div>
                        </div>
                        { post.feature_image && location ?
                            <figure className="amp-img-container featured-image">
                                <amp-img width="680" height="248" src={ post.feature_image } class="contain" layout="responsive" alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />                          
                        </section>
                    </article>
                </div>
            </main>
            <footer className="page-footer">
                <Link to="/" className="site-icon">
                    <amp-img width="300" height="50" alt="Vantage Circle" class="stick_logo" src="https://www.vantagecircle.com/wp-content/uploads/2020/02/vantage-circle-logo-1.png" />
                </Link>
                <h3>Vantage Circle - Nurture an Engaged and Satisfied Workforce | Vantage Circle HR Blog</h3>
                <p>Collaborate with us to provide your employees an engaging and rewarding experience.</p>
                <p>
                    <Link to="/">
                        Go to Homepage
                    </Link>
                </p>
            </footer>  
 
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
    amp: PropTypes.bool,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`