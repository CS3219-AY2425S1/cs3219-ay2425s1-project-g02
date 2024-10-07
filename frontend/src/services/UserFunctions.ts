import { Firestore, getDocs, collection, query, where } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

interface User {
    uid: string;
    email: string;
    displayName?: string;
    role?: string;
  }

// Define a function to decode the Firebase token and extract claims
const decodeAuthToken = (token: string) => {
  try {
    const base64Url = token.split('.')[1];  // JWT payload
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Error decoding auth token:", e);
    return null;
  }
};

// Function to list all users in Firebase Authentication
export const listAllUsers = async (): Promise<User[]> => {
    try {
      const listUsersResult = await admin.auth().listUsers();
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
        result = await admin.auth().listUsers(1000, nextPageToken);
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

