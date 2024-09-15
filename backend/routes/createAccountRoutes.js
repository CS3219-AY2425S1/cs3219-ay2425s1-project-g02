import express from 'express';
import {createAccountHandler } from '../controllers/createAccountController';

const router = express.Router();

// Route for creating a new account
router.post('/register', createAccountHandler);

module.exports = router;
