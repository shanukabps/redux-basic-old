import { bindActionCreators } from '@reduxjs/toolkit'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPost } from '../actions/postAction'


class PostList extends Component {




    render() {
        if (!this.props.AllPost) {
            return <h2>Click the button first</h2>
        }
        return (
            <div className="postlist">
                <ul>
                    {this.props.AllPost.map((post) => (
                        <li key={post.id} onClick={() => this.props.selectPost(post)}>{post.title}<hr />{post.body}</li>
                    ))

                    }
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        AllPost: state.AllPost
    }
}

function matchdispatchToProps(dispatch) {
    return bindActionCreators({ selectPost: selectPost }, dispatch)
}


export default connect(mapStateToProps, matchdispatchToProps)(PostList)

