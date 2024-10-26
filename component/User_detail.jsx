import React from "react";

class User_detail extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
    }

    render(){
        return(
            <div className="Details">
            <h1>Name: {this.props.name}</h1>
            <h2>Location:{this.props.Location}</h2>
            <h2>Contact:Restaurant9921@restaurant.com</h2>
            </div>
        )
    }
}
export default User_detail;




