import React, {useContext} from 'react'
import {GlobalContext} from "../utils/context/ExpenseState";
import { numberWithCommas } from '../utils/format'
// import { Transaction } from './Transaction';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount <0 ? "-" : "+";
    return (
        <div>
            <li className={transaction.amount <0 ? "minus" : "plus"}>
                {transaction.text}<span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span> <button onClick={() => deleteTransaction (transaction._id)} className ="delete-btn">x</button>
            </li>
        </div>
    )
}
