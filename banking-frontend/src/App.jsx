// src/App.jsx

import React, { useState, useEffect } from 'react';
import AccountForm from './components/AccountForm';
import AccountList from './components/AccountList';
import { getAllAccounts } from './services/AccountService';
import './App.css';

function App() {
    const [accounts, setAccounts] = useState([]);

    const fetchAccounts = () => {
        getAllAccounts()
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the accounts!", error);
            });
    };

    // Fetch accounts when the component mounts
    useEffect(() => {
        fetchAccounts();
    }, []);

    // This function will be called by the form after a new account is added
    const handleAccountAdded = () => {
        fetchAccounts(); // Re-fetch the list of accounts
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Banking Management System</h1>
            </header>
            <main>
                <AccountForm onAccountAdded={handleAccountAdded} />
                <AccountList accounts={accounts} refreshAccounts={fetchAccounts} />
            </main>
        </div>
    );
}

export default App;