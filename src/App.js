import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './main.css'
import SearchForm from './Components/SearchForm'
import Selected from './Components/Selected'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      predictions: [],
      selected: [],
    }
  }

  displayPredictions = (e) => {
    let fetched = []
    const inputValue = e.target.value
  
    if (inputValue === ""){
      this.setState({ predictions: [] })
    }else{
      for (const item of this.ingredients){
        if (item.search("^" + inputValue) !== -1){
          fetched.push(item)
        }
      }
      setTimeout(() => this.setState({ predictions: fetched }),700)
    }
    
  }

  displaySelected = (e) => {
    const selectedWord = e.target.innerHTML
    this.state.selected.push(selectedWord)
    this.setState({ predictions: [] })
    document.getElementById('search').value = ""
  }

  ingredients=['きゅうり','にんじん','しいたけ','豚肉','きくらげ','にんにく','しらたき','しらうお','たまねぎ','ねぎ','ぴーまん','なす']

  render(){
    return(
      <div className="ui container">
        <div className="search-form">
          <div className="tag-list">
            <Selected selectedWords={this.state.selected} />
            <SearchForm display={(e) => this.displayPredictions(e)} predictions={this.state.predictions} displaySelected={(e) => this.displaySelected(e)} />
          </div>
          <button type="submit" className="submit-button">検索する</button> 
        </div>
      </div>
    )
  }
}


export default App