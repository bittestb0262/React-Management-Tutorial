import React from "react";

class Customer extends React.Component {
    render(){
        return(        
        <div>
          <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
          <CustomerInfo birthday={this.props.birthday} num={this.props.num} job={this.props.job}/>
        </div>
)
    }
}

class CustomerProfile extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render(){
        return(
            <div>
                <p>
                {this.props.birthday}
                </p>
                <p>
                {this.props.num}
                </p>
                <p>
                {this.props.job}
                </p>
            </div>
        )
    }
}

export default Customer