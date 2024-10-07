import { Request, Response } from 'express';
import { db, auth } from "../config/firebaseConfig.js";


interface User {
    uid: string;
    email: string;
    displayName?: string;
    role?: string;
  }

// Fetch all users from Firebase Authentication
export const getUsers = async (req: Request, res: Response) => {
    try {
      const listUsersResult = await auth.listUsers(); // Use the auth instance to list users
      const users = listUsersResult.users.map(user => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'No Name',
      }));
      res.json(users); // Send the users as a JSON response
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Error fetching users');
    }
  };

// Function to list all users in Firebase Authentication
export const listAllUsers = async (): Promise<User[]> => {
    try {
      const listUsersResult = await auth.listUsers();
      const users: User[] = listUsersResult.users.map(userRecord => ({
        uid: userRecord.uid,
        email: userRecord.email || '',
        displayName: userRecord.displayName || '',
      }));
  
      return users;
    } catch (error) {
      console.error('Error listing users:', error);
      throw error;
    }
  };

export const listUsersPaginated = async (nextPageToken?: string): Promise<User[]> => {
    const users: User[] = [];
  
    // Continue listing users until all are retrieved
    try {
      let result;
      do {
        result = await auth.listUsers(1000, nextPageToken);
        result.users.forEach(userRecord => {
          users.push({
            uid: userRecord.uid,
            email: userRecord.email || '',
            displayName: userRecord.displayName || '',
          });
        });
        nextPageToken = result.pageToken;
      } while (nextPageToken);
  
      return users;
    } catch (error) {
      console.error('Error listing users:', error);
      throw error;
    }
  };

