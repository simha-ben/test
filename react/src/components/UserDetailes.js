import React from 'react';
import { connect } from "react-redux";
import { actions } from '../Redux/Action';
function mapStateToProps(state) {
    return {
        newUser: state.UserReducer.newUser,
    };
}
export default connect(mapStateToProps)(function UserDetailes(props) {
    return (
        <div>
            <br />
                <h3>user detailes</h3>
                <h5>name: {props.newUser.name}</h5>
                <h5>{props.newUser.age} years old</h5>
                <h5>live in: {props.newUser.name}</h5>
                <h5>email: {props.newUser.email}</h5>
                <h5>phone: {props.newUser.phone}</h5>
          
            <br />
        </div>
    );
}
);
