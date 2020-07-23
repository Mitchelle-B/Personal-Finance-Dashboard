import React, { useContext, useEffect } from 'react';
import {Transaction} from './Transaction';
import { GlobalContext } from '../utils/context/ExpenseState';

export const Transactionlist = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </div>
  )
}