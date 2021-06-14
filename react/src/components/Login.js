import React from 'react';
import { connect } from "react-redux";
import { action } from '../Redux/Action';

function mapStateToProps(state) {
    return {
        newUser: state.UserReducer.newUser,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addU: (u) => {dispatch(action.addUser(u));console.log(u);}
      
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const user = { ...props.newUser };


    return (
        <div>
            <br />
            <form className="inner" >
                <h3>Register</h3>
                <label>mame:<input onChange={(e) => { user.name = (e.target.value) }} /></label>
                <br />
                <label>age:<input onChange={(e) => { user.age = (e.target.value) }} /></label>
                <br />
                <label>city:<input onChange={(e) => { user.city = (e.target.value) }} /></label>
                <br />
                <label>email:<input onChange={(e) => { user.email = (e.target.value) }} /></label>
                <br />
                <label>phone:<input onChange={(e) => { user.phone = (e.target.value) }} /></label>
                <br />
                <button onClick={props.addU(user)}>click here to register</button>
            </form>
            <br />
        </div>
    );
}
);
