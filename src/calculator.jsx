import React,{Component} from 'react';

class CalcApp extends Component{
   constructor(props){
      super(props);
      this.state={
         inputString:"",
         evalOutput:0
      };
   }

   handleInputString = (i)=>{
      let inputString=this.state.inputString;
      inputString+=i;
      this.setState({inputString});
   }
   clearInputString=()=>{
      let inputString="";
      this.setState({inputString});
   }

   useAnswer=()=>{
      let inputString= this.state.evalOutput;
      this.setState({inputString});
   }
   evaluateExpression=()=>{
      let inputString=this.state.inputString;
      let evalOutput=eval(inputString);
      this.setState({evalOutput});
   }
   render(){
      return(
         <div id="app">
            <div id="wrapper">
            <div id="display">
               <div id="display_number">
                  {this.state.evalOutput}
               </div>
               <div id="display_function">
                  <span id="display_function_contex">{this.state.inputString}</span>
                  <div id="display_function_wrapper">
                     <div id="display_function_sys" onClick={this.clearInputString}>
                        CLEAR EVAL
                     </div>
                     <div id="display_function_sys" onClick={this.useAnswer}>
                        USE ANSWER
                     </div>
                  </div>
               </div>
            </div>
            <div className="button_row">
               <div className="button_item" onClick={()=>{this.handleInputString("1")}} >1</div>
               <div className="button_item" onClick={()=>{this.handleInputString("2")}} >2</div>
               <div className="button_item" onClick={()=>{this.handleInputString("3")}} >3</div>
               <div className="button_item double" onClick={()=>{this.handleInputString("/")}} >÷</div>
            </div>
            <div className="button_row">
               <div className="button_item" onClick={()=>{this.handleInputString("4")}} >4</div>
               <div className="button_item" onClick={()=>{this.handleInputString("5")}} >5</div>
               <div className="button_item" onClick={()=>{this.handleInputString("6")}} >6</div>
               <div className="button_item double" onClick={()=>{this.handleInputString("*")}} >×</div>
            </div>
            <div className="button_row">
               <div className="button_item" onClick={()=>{this.handleInputString("7")}} >7</div>
               <div className="button_item" onClick={()=>{this.handleInputString("8")}} >8</div>
               <div className="button_item" onClick={()=>{this.handleInputString("9")}} >9</div>
               <div className="button_item double" onClick={()=>{this.handleInputString("-")}} >-</div>
            </div>
            <div className="button_row">
               <div className="button_item" onClick={()=>{this.handleInputString("0")}} >0</div>
               <div className="button_item dot" onClick={()=>{this.handleInputString(".")}} >.</div>
               <div className="button_item double special" onClick={()=>{this.evaluateExpression()}} >=</div>
               <div className="button_item double" onClick={()=>{this.handleInputString("+")}} >+</div>
            </div>
         </div>
         </div>
         
      );
   }
}

export default CalcApp;