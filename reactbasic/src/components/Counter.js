import React from 'react';

class Counter extends React.Component{
    //Initial Mount phase
    constructor(props){
        super(props);
        console.log('constructor !!');
        this.state={
            count:0,
        }
    }

    //Component Lifecycle methods

    componentWillMount(){
    console.log('Inside Will Mount');
    }

    componentDidMount(){
        console.log('Inside Did Mount');
    }

    //Update

    componentWillReceiveProps(){

    }
    componentWillUpdate(){
        console.log('Inside Will Update');
    }
    componentDidUpdate(){
        console.log('Inside Did Update');
    }
    shouldComponentUpdate(){
        
        return true;
    }
    
    handleClickCount =() => {
    const {count} = this.state;
    this.setState ({
        count:count +1,
    });
  }

    handleClickDecrement =() => {
    const {count} = this.state;
    if(count===0) return;
    this.setState ({
    count:count -1,
    });
    }
    handleInput = (e)=>{
    console.log('value radio=', e.target.value);

    this.setState({
        name:e.target.value,
    });
  }
    render(){
        const{text,text1} = this.props;
        const{name,count} = this.state;
        console.log('Count is ' ,this.state.count);
        return(
            <div>
             <div>Count : {count}</div>
              <button name="Increment" onClick={this.handleClickCount}>{text}</button>
              <button name="Decrement" onClick={this.handleClickDecrement}>{text1}</button>
              <br/>
              <input type="text" onChange={this.handleInput}></input>
              <div>Name:{name}</div>
            </div>
        )
    }

} export default Counter;