import React, { useState, useEffect } from "react";
import MatchingOptions from "@/components/custom/MatchingOptions/MatchingOptions";
import QuestionTable from "@/components/custom/QuestionTable/QuestionTable";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/ui/title";
import profileIcon from "@/assets/profile.png"; // Adjust the path if necessary
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "@/css/styles.css";
import { getAuth, signOut } from "firebase/auth";

const QuestionPageView: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null)
  const navigate = useNavigate();

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

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setShowDropdown(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');  // Assuming 'id_token' is where it's stored
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.email) {
        setUser(decoded.email);  // Show the user's email
      }
    }
}, []);

  return (
    <main className="h-screen w-screen p-5">
      <div className="flex items-center justify-between mb-4">
        <Title title="Question Bank" />
        <div>
            {user ? (
                <p>Logged in as {user}</p>
            ) : (
                <p>Not logged in</p>
            )}
            </div>
        <div className="profile-icon-container">
          <img
            src={profileIcon}
            alt="Profile"
            className="profile-icon"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <Button
                variant="ghost"
                className="w-full text-left"
                onClick={() => {
                  const auth = getAuth();
                  signOut(auth)
                    .then(() => {
                      sessionStorage.removeItem("authToken");
                      sessionStorage.removeItem("uid");
                      handleNavigation("/"); // Navigate to the home page
                    })
                    .catch((error) => {
                      console.error("Error during sign out:", error);
                    });
                }}
              >
                Logout
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left text-red-500"
                onClick={() => handleNavigation("/delete-account")}
              >
                Delete Account
              </Button>
            </div>
          )}
        </div>
      </div>

      <Separator className="my-2" />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 p-4 rounded-lg shadow-lg">
          <QuestionTable />
        </div>

        <div className="col-span-1 p-4 rounded-lg shadow-lg">
          <MatchingOptions />
        </div>
      </div>
    </main>
  );
};

export default QuestionPageView;