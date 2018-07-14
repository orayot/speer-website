import React from 'react'

const Tags = ({ tagList }) => {
  return (
    <div>
      {tagList.map(t => (
        <div className="light-blue b dib mr4 pointer dim">{`#${t}`}</div>
      ))}
    </div>
  )
}

export default Tags
