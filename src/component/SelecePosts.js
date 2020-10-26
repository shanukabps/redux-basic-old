import React, { Component } from 'react'
import { connect } from 'react-redux';

class SelecePosts extends Component {
    render() {
        if (!this.props.SelectedPost) {
            return <h2>Selec a post</h2>

        }
        return (
            <div>
                <h1>TITLE:{this.props.SelectedPost.title}</h1>
                <h3>BODY:{this.props.SelectedPost.body}</h3>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        SelectedPost: state.SelectedPost
    }
}


export default connect(mapStateToProps)(SelecePosts)