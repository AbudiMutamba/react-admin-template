import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "./helpers/functions";
function SignOut() {
  const navigate = useNavigate();
  React.useEffect(() => {
    signOut();
    navigate("/", { replace: true });
  }, []);
  return <div>You're signing out</div>;
}

export default SignOut;
