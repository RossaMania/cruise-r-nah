import React from 'react'

const Card = ({result}) => {
  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.overview}</p>
    </div>
  )
}

export default Card

