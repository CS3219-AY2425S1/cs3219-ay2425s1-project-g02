import { UserCredential } from "firebase/auth"; // Import UserCredential type
import { SuccessObject, callUserFunction } from "@/lib/utils";

export async function addToUserCollection(userCredential: UserCredential, username: string): Promise<SuccessObject> {
    const { uid, email } = userCredential.user;
    // Prepare the data to send in the request body
    const userData = {
        uid,
        email,
        username: username,
    };
    
    const res = await callUserFunction("user/addToUserCollection", "POST", userData);

    return res;
}

export const fetchAdminStatus = async () => {
        const res = await callUserFunction("admin/checkAdminStatus", "GET");
        return res
}

export const doesUserExist = async (username: string) => {
    try {
      const result = await callUserFunction(`check-username?username=${encodeURIComponent(username)}`);
      
      if (result.success) {
        return result.data.exists; // returns true if username is taken
      } else {
        throw new Error('Failed to check username');
      }
    } catch (error) {
      console.error("Error checking username:", error);
      throw error; // rethrow the error for further handling
    }
  };

export async function getUsernameByUid(uid: string) {
    try {
        const result = await callUserFunction(`user/username/${uid}`)
        if (result.success) {
            return result.data;
        } else {
            throw new Error(result.error || "Unable to fetch username");
        }
    } catch (error) {
        console.error("Error checking uid for username:", error);
        throw error; // rethrow the error for further handling
    }
}