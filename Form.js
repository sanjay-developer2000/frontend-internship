/*import "./form.css";
import React from "react";


export class Form extends React.Component {

    state = {
        userInfo: {
            Username: "",
    Password:''
            
            


        },
fixedInfo:[{
   Username:'sanjay',
    Password:'SSAAAD'

}] 
    }
    addNameInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //console.log('hello name',e.target.value);

        this.setState({
            userInfo: {
                ...this.state.userInfo, [name]: value
            },
        
        })
    }



    buttonSubmit = () => {
        console.log('touch me', this.state.userInfo);
        this.state.fixedInfo.push(this.state.userInfo)
        this.setState({fixedInfo:this.state.fixedInfo})
        


    }



    render() {
        return (
            <div className="card    ">
          <div className="container">
            <div className="ssss"> 
            <h2>Login</h2>
            <form className="table"> 
                <div class='user-box-1'>
                    
                    <label>Username
                        <div><input type='text' name="" required=''/></div>

                    </label>
                </div>
                <div class='user-box'>
                    
                    <label>Password
                  <div>  <input type='password' name='' required=''/></div>
                    </label>

                </div>
                <div class='button-forms'>
                    <button className="submit " onChange={this.state.userInfo}>Submit</button>
                    <div class="register">
                        <div className="display-2">Don't have an account?</div>
                        <button class="register" href="#" >Register</button>
                    </div>
                </div>
            </form>
            </div>

          </div>
          </div>
                       
                            

        );
    };
};
export default Form*/