import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    let tagurl = `/tag/`
    let tagname = ``
    const url = `/${post.slug}/`
    if(post.tags.length>0){
        tagurl+= `${post.tags[0].slug}/` 
        tagname = post.tags[0].name
    }
    // const tagurl = `/tag/${post.tags[0].slug}/`
    const readingTime = readingTimeHelper(post)
    // console.log(post)
    return (
        <article className="post">
            <div className="post-inner-content">
                <div className="img-holder">
                    <a href={url} className="featured-image" title={ post.title}>
                        <img loading="lazy" width="340" height="191" className="img-responsive" src={ post.feature_image } alt={ post.title}/>
                    </a>
                </div>

                <div className="inner">
                    {post.tags && <div className="tags"><a href={ tagurl }>{tagname}</a></div>}
                    <h2 className="post-title"><a href={url} title={ post.title }> { post.title }</a></h2> 
                    <a href={url} className="excerpt" title={ post.title }>
                        { post.excerpt }
                    </a>
                    <div className="readmore flw100">
                        <a href={url} title={ post.title }> Read Now > </a>
                    </div>
                    {/*<div className="readtime_wrapper hidden-sm hidden-xs">
                        <div className="readtime">{ readingTime }</div>
                    </div>*/}
                </div>

            </div>
        </article>           
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
