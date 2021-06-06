import React , {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    let income = 0
    let expense = 0
    transactions.forEach(transaction => {
        if (transaction.amount > 0) {
            income += Number(transaction.amount)
        } else {
            expense += Number(transaction.amount)
        }
        
    })
    return (
        <div className='row justify-content-around my-5'>
            <div className='border my-2 p-3 bg-primary text-white text-center rounded shadow col-sm-4'>
                <h4>Income</h4>
                <p>+{income}</p>
            </div>
            <div className='border my-2 p-3 bg-danger text-white text-center rounded shadow col-sm-4'>
                <h4>Expense</h4>
                <p>-{Math.abs(expense)}</p>
            </div>
        </div>
    )
}
