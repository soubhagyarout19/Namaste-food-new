import React from "react";
let x;
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        };
    }
    
    componentDidMount(prevProps, prevState){
        x = setInterval(()=>{
            console.log("Set Interval");
        },1000)
    }

    componentWillUnmount(){
        clearInterval(x);
    }
    render(){
        return(
            <>
                <h1>This is Profile component</h1>
                {this.state.count}
                <button onClick={()=>
                {
                    this.setState({
                        count:5
                    })
                }
                }>OK</button>
            </>
        )
    }
}

export default Profile;