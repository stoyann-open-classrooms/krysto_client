import React from 'react'

function TitlePage({icone , title}) {
  return (
    <div className="title-page">
    <h1>{title}</h1>
    <img src={icone} alt="" />
   </div>
  )
}

export default TitlePage