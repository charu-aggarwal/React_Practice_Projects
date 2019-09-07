import React from 'react';
import {clickIncrement , clickDecrement} from '../actions/counter.action';
import { connect } from 'react-redux';



class Counter extends React.Component{
    //Initial Mount phase
    constructor(props){
        super(props);
        console.log('constructor !!');
        // this.state={
        //     count:0,
        // }
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
    
    

  clickIncrement=()=>{
      const { _clickIncrement } = this.props;
      _clickIncrement();
  }

  clickDecrement=()=>{
   const { _clickDecrement } =this.props;
   _clickDecrement();
}

  
//     handleInput = (e)=>{
//     console.log('value radio=', e.target.value);

//     // this.setState({
//     //     name:e.target.value,
//     // });
//   }
    render(){
        const{text,text1, countValue} = this.props;
        // const{name,count} = this.state;
        // console.log('Count is ' ,this.state.count);
        return(
            <div>
             <div>Count : {countValue}</div>
              <button name="Increment" onClick={this.clickIncrement}>{text}</button>
              <button name="Decrement" onClick={this.clickDecrement}>{text1}</button>
              <br/>
              {/* <input type="text" onChange={this.handleInput}></input>
              <div>Name:{name}</div> */}
            </div>
        )
    }
  
} 
const mapStoreToProps =(store)=>({
    countValue:store.counter.count,  
})

const mapDispatchToProps=(dispatch)=>({
 _clickIncrement : ()=>{
     dispatch(clickIncrement())
 },

 _clickDecrement : ()=>{
     dispatch(clickDecrement())
 },
});

export default connect(mapStoreToProps,mapDispatchToProps)(Counter) ;

