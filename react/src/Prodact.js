import React, { useState, useRef } from "react";
import _ from 'lodash'

export default function Prodact(props) {

    const [prodact, setprodact] = useState(props.prodact1);
    const nameRef = useRef(null);
    const amountRef = useRef(null);
    function deleteProdact(index) {
        prodact.splice(index, 1);
        console.log('i am sliced');
        setprodact([...prodact]);
        console.log(prodact);
    }
    function addProdact() {
        let nweObj = { 'name': nameRef.current.value, 'amount': parseInt(amountRef.current.value) };
        prodact.push(nweObj);
        setprodact([...prodact]);
        console.log('add it!!!!!', prodact);

    }
    function sortArray(){
        console.log('sorting////');
        prodact.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        console.log(prodact);
        setprodact([...prodact]);

    }
    return (
        <>
            <h2>ALL THE PRODACTS</h2>
            {
                prodact.map((val, k) => (
                    <div key={k}>
                        <input value={val.name} onChange={(e) => { prodact[k].name = e.target.value; setprodact([...prodact]) }} />
                        <input value={val.amount} onChange={(e) => { prodact[k].amount = e.target.value; setprodact([...prodact]) }} />
                        <button onClick={() => { deleteProdact(k) }}>delete</button>
                    </div>
                ))

            }
            <div>
                <h2>NEW PRODACT</h2>
                <label>name: </label><input ref={nameRef} />
                <br />
                <label>amount: </label><input ref={amountRef} />
                <br />
                <button onClick={() => { addProdact() }}>add it!</button>
            </div>
            <button onClick={()=>{sortArray()}}>surt my!!!</button>
        </>
    );
}


