import { Outlet } from "react-router-dom";
import GetPremium from "../components/GetPremium";
import { useAuth } from "../contexts/AuthContext";

export default function ProRoute({ component: Component, ...rest }) {
  const { userData } = useAuth();

  return userData.premium ? <Outlet /> : <GetPremium />;
}
