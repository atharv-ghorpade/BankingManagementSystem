// src/components/AccountList.jsx

import React from 'react';
import { deposit, withdraw, deleteAccount as removeAccount } from '../services/AccountService';

const AccountList = ({ accounts, refreshAccounts }) => {

    const handleDeposit = (id) => {
        const amount = parseFloat(prompt("Enter amount to deposit:"));
        if (!isNaN(amount) && amount > 0) {
            deposit(id, amount)
                .then(() => refreshAccounts())
                .catch(error => console.error('Error depositing:', error));
        } else {
            alert("Please enter a valid amount.");
        }
    };

    const handleWithdraw = (id) => {
        const amount = parseFloat(prompt("Enter amount to withdraw:"));
        if (!isNaN(amount) && amount > 0) {
            withdraw(id, amount)
                .then(() => refreshAccounts())
                .catch(error => alert(error.response.data.message || 'Error withdrawing!'));
        } else {
            alert("Please enter a valid amount.");
        }
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this account?")) {
            removeAccount(id)
                .then(() => refreshAccounts())
                .catch(error => console.error('Error deleting account:', error));
        }
    };

    return (
        <div className="list-container">
            <h2>All Accounts</h2>
            <table className="accounts-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Holder</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.accountHolderName}</td>
                            <td>${account.balance.toFixed(2)}</td>
                            <td>
                                <button className="btn-action btn-deposit" onClick={() => handleDeposit(account.id)}>Deposit</button>
                                <button className="btn-action btn-withdraw" onClick={() => handleWithdraw(account.id)}>Withdraw</button>
                                <button className="btn-action btn-delete" onClick={() => handleDelete(account.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountList;