import "@/css/styles.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function HomePageView() {
  const navigate = useNavigate();

  return (
    <main className="homepage">
      <div className="content"></div>
      <h1 className="header">PeerPrep</h1>
      <p className="description">
        Boost your skills and ace technical <br />
        interviews with real-time peer <br />
        collaboration.
      </p>
      <div className="button-container">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/create-account")}>
          Create Account
        </Button>
      </div>
    </main>
  );
}

export default HomePageView;
