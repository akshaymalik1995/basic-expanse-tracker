import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    let balance = 0
    transactions.forEach(transaction => {
        balance += Number(transaction.amount)
    })
    const sign = balance < 0 ? "-" : "+";
    return (
        <div className='row shadow border rounded p-3 bg-warning'>
            <div className="col-12">
            <h5>Your Balance</h5>
        <h2 id="balance">{sign}{Math.abs(balance)}</h2>
            </div>
       
        </div>
    )
}




