import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './main.css'
import SearchForm from './Components/SearchForm'
import Selected from './Components/Selected'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      predictions: null,
      selected: []
    }
  }

  displayPredictions = (e) => {
    let fetched = []
    if (e.target.value === ""){
      this.setState({ predictions: null })
    }else{
      fetched = this.ingredients.filter((item) => {
        return item.search("^" + e.target.value) !== -1
      })
    }
    this.setState({ predictions: fetched })
  }

  displaySelected = (e) => {
    const selectedWord = e.target.innerHTML
    this.state.selected.push(selectedWord)
    // this.setState({ selected: currentSelected.push(selectedWord) })
    this.setState({ predictions: null })
  }

  ingredients=['きゅうり','にんじん','しいたけ','豚肉','きくらげ','にんにく']

  render(){
    return(
      <div className="ui container">
        <div className="search-form">
          <div className="tag-list">
            <Selected selectedWords={this.state.selected} />
            <SearchForm display={this.displayPredictions} predictions={this.state.predictions} displaySelected={this.displaySelected} />
          </div>
          <button type="submit" className="submit-button">検索する</button> 
        </div>
      </div>
    )
  }
}


export default App