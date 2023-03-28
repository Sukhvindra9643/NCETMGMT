import { Component } from "react";
import "./destination.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className }>
            <div className="des-text">
            <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <p>{this.props.text1}</p>
          <p>{this.props.text2}</p>
          <p>{this.props.text3}</p>
            </div>
            <div className="image">
                <img alt="img" src={this.props.img1}/>
            </div>
         </div>
        );
    }
}

export default DestinationData;