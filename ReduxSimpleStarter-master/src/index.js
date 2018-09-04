import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  GenerateForm from './components/FormGenerate'
class WelcomePage extends Component
{
  constructor(props){
    super(props);
    this.GenerateFormFun = this.GenerateFormFun.bind(this);
    this.BackButton =  this.BackButton.bind(this);
    this.state={
      buttonVal :false
    }
  }

GenerateFormFun(){
  this.setState({buttonVal :true})
  }
BackButton(){
      this.setState({buttonVal : false})
  }
render(){
let {buttonVal}=this.state
console.log(buttonVal)
if(buttonVal)
{
return(
  <div>
  <button  onClick ={this.BackButton} >Back Button</button>
  <GenerateForm/>
  </div>
)
}
return (
  <div>
  <p>Welcome Page </p>
<button onClick = {this.GenerateFormFun} >Like Your Comments </button>
  </div>
)

}


}
ReactDOM.render(
  <WelcomePage/>
  , document.querySelector('.container'));
