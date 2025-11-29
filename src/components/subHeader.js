import React from 'react'

const dotStyle = {
  height: 12,
  width: 12,
  borderRadius: '100%',
}

const SubHeader = ({ title }) => (
  <div className="f4 f3-ns tc">
    <div className="bg-light-blue dib" style={dotStyle} />
    <span className="ph3">{title}</span>
    <div className="bg-light-blue dib" style={dotStyle} />
  </div>
)

export default SubHeader
