import { createAccount } from '../service/firebaseService';

export async function createAccountHandler(req, res) {
    const { email, password } = req.body;

    try {
        const user = await createAccount(email, password);

        // success
        return res.status(201).json({
            message: "Account created successfully", 
            user 
        });
    } catch (error) {
        return res.status(400).json({ 
            message: "Error creating account", 
            error: error.message 
        });
    }
}
