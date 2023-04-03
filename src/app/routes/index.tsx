import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route path="/entrar" element={<Login />} />
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />

    </Switch>
    </BrowserRouter>
  );
}