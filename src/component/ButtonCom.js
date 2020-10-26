import { bindActionCreators } from '@reduxjs/toolkit'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/postAction'


class ButtonCom extends Component {
    render() {
        return (
            <div className="buttoncom">
                <button onClick={() => this.props.fetchPost()}>ClickME</button>
            </div>
        )
    }
}

function matchDispatchProps(dispatch) {
    return bindActionCreators({ fetchPost: fetchPost }, dispatch)
}
export default connect(null, matchDispatchProps)(ButtonCom)