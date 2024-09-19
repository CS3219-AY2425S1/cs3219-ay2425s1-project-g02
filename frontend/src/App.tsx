import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePageView from "./views/HomePageView";
import LoginPage from "./views/LoginPageView";
import QuestionPageView from "./views/QuestionPageView";
import CreateAccountPageView from "./views/CreateAccountPageView";
import CollabPageView from "./views/CollabPageView";
import DeleteAccountPage from "./views/DeleteAccountPageView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/questions" element={<QuestionPageView />} />
        <Route path="/create-account" element={<CreateAccountPageView />} />
        <Route path="/collab" element={<CollabPageView />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="*" element={<p>404: Page Not Found!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
