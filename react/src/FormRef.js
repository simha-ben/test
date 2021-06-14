import React, { useRef } from "react";

export default function FormRef() {
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const ageRef = useRef(null);
function submitIt(){
    console.log(nameRef.current.value);
    if(nameRef.current.value===''){
        nameRef.current.style.borderColor ='red';
    }
    if(passwordRef.current.value===''){
        passwordRef.current.style.borderColor ='red';
    }
}
    return (
        <>
            <form>
                <label>user neme</label><input  ref={nameRef} />
                <br/>
                <label>user password</label><input  ref={passwordRef}/>
                <br/>
                <label>age </label><input ref={ageRef}/>
                <br/>
                <button onClick={()=>{submitIt()}}>submit my</button>
            </form>

        </>
    );
}


