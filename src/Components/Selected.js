import React from 'react'


function Selected(props){
  if(!props.selectedWords.length){
    return <div></div>
  }


  const selectedWords = props.selectedWords.map((item, index) => {
    return <li key={index}>{item} x</li>
  })

  return(
    <ul className="selected-items">
     {selectedWords}
    </ul>
  )
}

export default Selected