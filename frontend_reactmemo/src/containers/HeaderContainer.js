import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as header from 'store/modules/header'
import Header from 'components/common/Header'


class HeaderContainer extends Component {

  toggleHamburgerModal = () => {
    const { header } = this.props
    header.toggleHamburgerModal()
  }

  changeSearchKeyword = (e) => {
    const { header } = this.props
    header.changeSearchKeyword(e.target.value)
  }

  render() {
    const { toggleHamburgerModal, changeSearchKeyword } = this
    const { keyword } = this.props.header
    return (
      <Header
        toggleHamburgerModal={toggleHamburgerModal}
        changeSearchKeyword={changeSearchKeyword}
        keyword={keyword}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    isHamburgerModalOn: state.header.isHamburgerModalOn,
    Keyword: state.header.keyword
  }
}

let mapDispatchToProps = dispatch => {
  return {
    header : bindActionCreators(header, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)