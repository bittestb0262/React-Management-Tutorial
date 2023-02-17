import React from "react";

class Customer extends React.Component {
    render(){
        return(        
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.num}</p>
            <p>{this.props.job}</p>
            <p>{this.props.addr}</p>
        </div>
)
    }
}

export default Customer