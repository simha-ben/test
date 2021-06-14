import React, { createRef, useRef, useState } from 'react';
import { connect } from "react-redux";
import { actions } from '../Redux/Action';


function mapStateToProps(state) {
    return {
        users: state.UserReducer.newUsers,
    };
}


export default connect(mapStateToProps)(function ShowUsers(props) {
    return (
        <>
            <h2>all the users are:</h2>
            {props.users && props.users.map((item, index) => (

                <div key={index}>
                    <h4>name:{item.name}</h4>
                    <span>email:{item.email}</span>

                </div>
            ))}
        </>
    );
}
)