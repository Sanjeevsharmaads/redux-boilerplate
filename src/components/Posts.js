import React from 'react'
import PropTypes from 'prop-types'
import { getPosts } from '../actions/post'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

const Posts = ({ posts, getPosts }) => {
    console.log("posts are", posts)
    return (
        <div>
            <h1> Posts </h1>
            <br/>
            <h3> Click the below button to get all posts </h3>
            <input type="submit" value="GET POSTS" onClick={getPosts} />
           { posts?.data?.map((post)=>(
               <div>
                   <h5>{post?.id} &nbsp;&nbsp; {post?.title}</h5>
                    <p>{post?.body}</p>
               </div>
           ))}
        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    posts: state.postReducer
})


  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getPosts }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(Posts)