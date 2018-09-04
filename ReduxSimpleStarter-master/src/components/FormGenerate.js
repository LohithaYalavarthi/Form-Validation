import React,{Component} from 'react';
import "./style.css"
const divStyle = {
 border:'1px solid red '
};
class GenerateForm extends Component
{

  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state ={
      fields: {},
      errors: {},
      formIsTrue: false
    }
    }
    handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;

         //Name
         if(!fields["firstname"]){
            formIsValid = false;
            errors["firstname"] = "Cannot be empty";
         }

         if(typeof fields["firstname"] !== "undefined"){
            if(!fields["firstname"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["firstname"] = "Only letters";
            }
         }

         //Email
         if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
         }

         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }
        if(!fields["PhoneNum"]){
           formIsValid = false;
           errors["PhoneNum"] = "Cannot be empty";
        }
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
        if(!fields["comments"]){
          formIsValid = false;
          errors["comments"] = "Cannot be empty";
        }

        this.setState({errors: errors});
        console.log(formIsValid);
        return formIsValid;
    }

  onFormSubmit(event) {
    event.preventDefault();
    if(this.handleValidation()){
           alert("Form submitted");
           this.setState({formIsTrue : true});
        }else{
           alert("Form has errors.")
        }
  }
  handleChange(field ,e){
    console.log("Fields", field);
       let fields = this.state.fields;
       fields[field] = e.target.value;
       console.log("Val",fields)
       this.setState({fields});
   }

  render()
  {
    let {formIsTrue}=this.state
    let {firstname,PhoneNum} = this.state.fields
  console.log("Entered");
  if(formIsTrue){
    return (
      <div>
      Your FirstName : {firstname}
      Your PhoneNum : {PhoneNum}
      </div>
  )
  }
    return(

   <div>
   Form Validation
   <form className="input-group" onSubmit={this.onFormSubmit} >

   <input  value= {this.state.fields["firstname"]} name="FirstName" onChange={this.handleChange.bind(this, "firstname")} placeholder="FirstName" className="form-control"/>
    <span  className = {divStyle} style={{color: "red"}}>{this.state.errors["firstname"]}</span>

   <input value ={this.state.fields["Lastname"]} name="LastName" onChange={this.handleChange.bind(this, "Lastname")} placeholder="LastName" className="form-control"/>
   <span className = {divStyle} style={{color: "red"}}>{this.state.errors["Lastname"]}</span>

   <input value ={this.state.fields["PhoneNum"]} type="tel" onChange={this.handleChange.bind(this, "PhoneNum")} name="PhoneNumber" minLength="1" maxLength ="10" placeholder="PhoneNumber" className="form-control"/>
   <span className = {divStyle} style={{color: "red"}}>{this.state.errors["PhoneNum"]}</span>

   <input value ={this.state.fields["email"]}type="email"  onChange={this.handleChange.bind(this, "email")} name="email" placeholder="Email" className="form-control"/>
   <span className = {divStyle} style={{color: "red"}}>{this.state.errors["email"]}</span>

   <textarea value={this.state.fields["comments"]}   onChange={this.handleChange.bind(this, "comments")} rows="4" cols="50" placeholder="Comments" className="form-control"/>
   <span  className = {divStyle}  style={{color: "red"}}>{this.state.errors["comments"]}</span>

   <button type="submit" className="btn btn-secondary" >Submit</button>
   </form>
   </div>
  )
  }

}
export default GenerateForm;
