import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { findDOMNode } from 'react-dom'

import './InfiniteScroll.css'

class InfiniteScroll extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lastCheck: new Date().getTime()
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.check()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const { lastCheck } = this.state
    const currentTime = new Date().getTime()

    // Should avoid multiple checks
    if (Math.abs(lastCheck - currentTime) > 100 ) {
      this.setState({
        lastCheck: currentTime
      }, this.check)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.hasMore && this.props.hasMore) {
      this.check()
    }
  }

  check = () => {
    const { hasMore, threshold } = this.props

    if (!hasMore) {
      return
    }
      
    // Check element's distance from bottom
    const container = findDOMNode(this.refs.container)
    const containerRect = container.getBoundingClientRect()
    const bottomDistance = window.innerHeight - containerRect.bottom

    if (bottomDistance > -(threshold)) {
      this.props.loadMore()
    }
  }

  render() {
    const { className } = this.props

    return (
      <div ref='container' className={className}>
        {this.props.children}
      </div>
    )
  }
}


InfiniteScroll.propTypes = {}
export default InfiniteScroll
