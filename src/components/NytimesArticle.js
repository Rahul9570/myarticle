// this is NytimesArticle page.here i used async await function to fetch data from NyTimes web API


import React, { Component } from 'react'
// imported ListArticle.js componenent file 
import ListArticle from './ListArticle'

export class NytimesArticle extends Component {
    constructor(){
        super();
        this.state ={
          // creating empty array to put new values
            results: [],
            loading: false
        }
    }
    // called componentDidMount() function to  fetch api data

async componentDidMount(){
    let url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=PgPhwIR5Fp2gzdZJI6LTa0egpwLWteeC";
    let data = await fetch(url);
    // all data of api through fetch method stored in parsedData in jason formate
    let parsedData = await data.json()
    console.log(parsedData);
    // changing state of results array
    this.setState({results: parsedData.results})
}

handlePreviousClick = async ()=>{
  let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=PgPhwIR5Fp2gzdZJI6LTa0egpwLWteeC&page=${this.state.page - 1}`;
    let data = await fetch(url);
    // all data of api through fetch method stored in parsedData in jason formate
    let parsedData = await data.json()
    console.log(parsedData);
    // changing state of results array
    this.setState({results: parsedData.results})
    this.setState({
      page: this.state.page - 1,
    })

}
// button onclick for next and previous page
handleNextClick = async ()=>{

  let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=PgPhwIR5Fp2gzdZJI6LTa0egpwLWteeC&page=${this.state.page + 1}`;
    let data = await fetch(url);
    // all data of api through fetch method stored in parsedData in jason formate
    let parsedData = await data.json()
    console.log(parsedData);
    // changing state of results array
    this.setState({results: parsedData.results})
    this.setState({
      page: this.state.page + 1,
    })
  
}



  render() {
    return (  
      <div className='container my-3'>
          <h1><b>MOSTVIEWED-NEWS ARTICLE</b></h1>
          <div className='row'>
            {/* below i am traversing the results array to get data present in jason file here unique is url because it is unique in every objects od jason file array */}
              {this.state.results.map((element)=>{
                  return <div className='col-md-4' key={element.url}>
          <ListArticle title={element.title} abstract={element.abstract}  newsUrl={element.url}/>
          </div>
              })}
      </div>
      <div className="container d-flex justify-content-between" >
      <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr;Previous</button>
      <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>

      </div>
      </div>
    )
  }
}

export default NytimesArticle