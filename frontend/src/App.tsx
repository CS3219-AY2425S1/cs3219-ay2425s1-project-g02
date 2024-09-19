import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePageView from "./views/HomePageView";
import LoginPage from "./views/LoginPageView";
import LoginSuccessPage from "./views/LoginSuccessPageView";
import QuestionPageView from "./views/QuestionPageView";
import CreateAccountPageView from "./views/CreateAccountPageView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-success" element={<LoginSuccessPage />} />
        <Route path="/questions" element={<QuestionPageView />} />
        <Route path="/create-account" element={<CreateAccountPageView />} />
        <Route path="*" element={<p>404: Page Not Found!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
