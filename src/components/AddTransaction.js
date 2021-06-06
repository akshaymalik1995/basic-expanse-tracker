import React, { useContext , useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {v4} from 'uuid'
export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const onSubmit = (event) => {
        event.preventDefault()
        const newTransaction = {
            id: v4(),
            text : text,
            amount : amount,
        }
        addTransaction(newTransaction)
        

    }
    return (
        <div className='row my-5'>
            <div className='col-12'>
            <h4 className='mb-3'>New Transaction</h4>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                    <input className='form-control' type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter text..." />
                    </div>
                    <div className="form-group">
                    <input className='form-control' type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount..." />
                    </div>
               
               
                <button className='btn btn-primary' type="submit" >Add Transaction</button>
                
            </form>
            </div>
            
        </div>
    )
}
