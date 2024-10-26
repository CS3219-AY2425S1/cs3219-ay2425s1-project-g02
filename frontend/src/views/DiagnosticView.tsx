import React, { useEffect, useState } from "react";
import { fetchAdminStatus } from "@/services/UserFunctions"; // Adjust path as necessary

const DiagnosticView: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  interface FirebaseIDToken {
    email?: string;
    user_id?: string;
    exp: number;
  }

  const decodeToken = (token: string): FirebaseIDToken | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload) as FirebaseIDToken;
    } catch (e) {
      return null;
    }
};

  // Read the authToken from session storage
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  // Fetch user data and admin status
  useEffect(() => {
    const fetchData = async () => {
      if (authToken) {
        try {
          // Fetch the user data from Firestore
          const decoded = decodeToken(authToken);
          if (decoded && decoded.email) {
            setUserData(decoded);  // Show the user's email
          }

          // Check admin status
          const adminResponse = await fetchAdminStatus();
          setIsAdmin(adminResponse.data.isAdmin);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [authToken]);

  return (
    <div className="p-6">
      <h1>Diagnostic View</h1>

      <section className="mt-4">
        <h2>Auth Token</h2>
        <p>{authToken ? authToken : "No auth token found."}</p>
      </section>

      <section className="mt-4">
        <h2>User Data</h2>
        {userData ? (
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        ) : (
          <p>Loading user data...</p>
        )}
      </section>

      {isAdmin !== null && (
        <section className="mt-4">
          <h2>Conditional Rendering</h2>
          {isAdmin ? (
            <div className="admin-only">
              <p>This section is visible only to admins.</p>
            </div>
          ) : (
            <div className="non-admin-only">
              <p>This section is visible only to non-admin users.</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default DiagnosticView;
