import React, { useContext } from 'react'
import {Transaction} from "../components/Transaction"
import {GlobalContext} from '../context/GlobalState'
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    return (
        <div className='row my-5'>
            <div className="col-12">
            
            <ul className='list-group'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
                
            </ul>
            </div>
            
            
        </div>
    )
}
