import React, { useState, useEffect } from "react";
import MatchingOptions from "@/components/custom/MatchingOptions/MatchingOptions";
import QuestionTable from "@/components/custom/QuestionTable/QuestionTable";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/ui/title";
import profileIcon from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "@/css/styles.css";
import { fetchAdminStatus } from "@/services/UserFunctions";

const QuestionPageView: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setShowDropdown(false);
  };

  async function fetchStatus(): Promise<boolean> {

    const res = await fetchAdminStatus();
    if (!res.success) {
      console.error("Error fetching data", res.error);
      return false;
    }

    const isAdmin: boolean = res.data.isAdmin;
    return isAdmin;
  };


  useEffect(() => {
      
    async function updateStatus() {
      const result = await fetchStatus();
      setIsAdmin(result)
    }
    updateStatus();
    
  }, []);

  return (
    <main
      className="h-screen w-screen p-5"
      style={{ height: "100%", backgroundColor: "white" }}
    >
      <div className="flex items-center justify-between mb-4">
        <Title title="Question Bank" />
        <img
          src={profileIcon}
          alt="Profile"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleDropdown}
        />
        {showDropdown && (
          <div className="dropdown-menu">
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => {
                sessionStorage.removeItem("authToken");
                sessionStorage.removeItem("uid");
                handleNavigation("/");
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

      <Separator className="my-2" />

      <div className="grid grid-cols-3 gap-4">
        <div
          className="p-4 col-span-3 md:col-span-1 rounded-lg shadow-lg"
          style={{ height: "100vh" }}
        >
          <MatchingOptions />
        </div>
        <div className="p-4 col-span-3 md:col-span-2 rounded-lg shadow-lg">
          <QuestionTable isAdmin={isAdmin}/>
        </div>
      </div>
    </main>
  );
};

export default QuestionPageView;
