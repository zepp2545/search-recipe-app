import React from 'react'

const SearchForm = ({display,predictions,displaySelected}) => {
  if(!predictions){
    return(
      <form>
        <input type="text" placeholder="食材を入力してください" onChange={display} className="search-input"/>
      </form>
    )
  }


  return(
    <div className="search-wrapper">
      <form>
        <input type="text" placeholder="食材を入力してください" onChange={display} className="search-input"/>
        <div className="search-results">
          <ul>
            {predictions.map((item, index) => <li className="prediction-item" onClick={displaySelected} key={index}>{item}</li>)}
          </ul>
        </div>
      </form>
    </div>
  )
}

export default SearchForm