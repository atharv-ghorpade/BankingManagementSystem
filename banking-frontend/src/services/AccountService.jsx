// src/services/AccountService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/accounts';

// Function to get all accounts
export const getAllAccounts = () => {
    return axios.get(API_BASE_URL);
};

// Function to get a single account by ID
export const getAccountById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

// Function to create a new account
export const createAccount = (account) => {
    return axios.post(API_BASE_URL, account);
};

// Function to deposit money into an account
export const deposit = (id, amount) => {
    return axios.put(`${API_BASE_URL}/${id}/deposit`, { amount });
};

// Function to withdraw money from an account
export const withdraw = (id, amount) => {
    return axios.put(`${API_BASE_URL}/${id}/withdraw`, { amount });
};

// Function to delete an account
export const deleteAccount = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};