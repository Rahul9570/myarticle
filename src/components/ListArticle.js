import React, { Component } from 'react'

export class ListArticle extends Component {
  render() {
// passing props to use value
    let {title,abstract,imageUrl,newsUrl} = this.props;
    return (
    
       <div className="card" style={{width: "18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read</a>
      </div>
    </div> 
    )
  }
}

export default ListArticle