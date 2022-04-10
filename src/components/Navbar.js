import React, { Component } from "react";

export class Navbar extends Component {
     
   constructor(){
       super();
       this.state = {
        results: [],
       }
   }
    
   search(key){
     fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=PgPhwIR5Fp2gzdZJI6LTa0egpwLWteeC" + key).then((data)=>{
       data.json().then((resp)=>{
         console.warn("resp",resp)
         this.setState({results:resp})
       })
     })
   }
    
    render()
    {
        return (
          // line 24 to 41 copied navbar code from bootstrap.
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">NytimesArticle</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>

      </ul>
      {/* search function which works on onChange  */}
        <input className="form-control me-2" type="text" onChange={(event)=>this.search(event.target.url)} placeholder="Search" aria-label="Search" />
       {/* this.search(event.target.url)---to hit the uniquen id of json file of api */}
        <div>
          {/* if the value in results array is present it will show data otherwise print no data */}
          {     
            this.state.results?
            <div>
              {
                this.state.results.map((item)=>
                <div>{item.title}</div>
                )
              }
            </div>
            :"nodata"
            
          }
        </div>
      
    </div>
  </div>
</nav>
            </div>
        )
    }
}
