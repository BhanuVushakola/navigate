import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  // if (!authenticated) {
  //   // Redirect
  //   return <Navigate replace to="/login" />;
  // } else {
  return (
    <div>
      <p>Welcome to your Dashboard</p>
      <button onClick={() => navigate("/Home")}>Go To Home</button>
    </div>
  );
  // }
};
export default Dashboard;
