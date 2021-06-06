import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? "-" : "+";
    let badgeClass = "badge p-2 badge-pill"
    if (transaction.amount > 0) {
        badgeClass += " badge-primary"
    } else {
        badgeClass += " badge-danger"
    }
        
        
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
            <span className='font-weight-bold mr-4'>{transaction.text}</span>
            <span className={badgeClass}>{sign}{Math.abs(transaction.amount)}</span>

            </div>
            <div>
            <span><i className='fa fa-trash' onClick={() => deleteTransaction(transaction.id)}></i></span>

            </div>
           
        </li>
        
            // <li className="{transaction.amount < 0 ? 'minus' : 'plus'} list-group-item">
            // {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span> <i className='fa fa-trash' onClick={() => deleteTransaction(transaction.id)}></i>
            // </li>
        
    )
}
