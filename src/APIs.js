import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App8 extends Component{

   constructor(){
      super();
      this.state={
         data:[]
      }
      this.setStateHandler = this.setStateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   setStateHandler(){
      var item="setState..."
      var myArray=this.state.data.slice();
      myArray.push(item);
      this.setState({data:myArray})

   };
   findDomNodeHandler(){
      var myDiv=document.getElementById('mydiv');
      ReactDOM.findDOMNode(myDiv).style.color='red';
   }
   render(){
      return(

            <duv>
               <button onClick={this.setStateHandler}>set state </button>
               <button onClick={this.findDomNodeHandler}>Find Dom Node</button>
               <div id="mydiv">Node</div>
               <h4>state: {this.state.data }</h4>
            </duv>

      );
   }
}
export default App8;

