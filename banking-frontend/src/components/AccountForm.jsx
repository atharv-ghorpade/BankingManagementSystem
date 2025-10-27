// src/components/AccountForm.jsx

import React, { useState } from 'react';
import { createAccount } from '../services/AccountService';

const AccountForm = ({ onAccountAdded }) => {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = { accountHolderName, balance: parseFloat(balance) };

        createAccount(newAccount)
            .then(response => {
                // Clear the form
                setAccountHolderName('');
                setBalance('');
                // Notify the parent component that an account was added
                onAccountAdded(response.data);
            })
            .catch(error => {
                console.error('There was an error creating the account!', error);
            });
    };

    return (
        <div className="form-container">
            <h2>Create New Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Initial Balance:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">Create Account</button>
            </form>
        </div>
    );
};

export default AccountForm;