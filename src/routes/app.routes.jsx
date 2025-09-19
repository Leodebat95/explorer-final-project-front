import { Routes, Route, Navigate } from "react-router-dom";

import { ProtectedRoute } from "../components/ProtectedRoute";

import { Home } from "../pages/Home"
import { CreateDish } from "../pages/CreateDish"
import { EditDish } from "../pages/EditDish"
import { DishPreview } from "../pages/DishPreview"


export function AppRoutes() {

  return(
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }/>

      <Route path="/new" element={
        <ProtectedRoute adminOnly={true}>
          <CreateDish />
        </ProtectedRoute>
      }/>

      <Route path="/edit/:id" element={
        <ProtectedRoute adminOnly={true}>
          <EditDish />
        </ProtectedRoute>
      }/>

      <Route path="/preview/:id" element={
        <ProtectedRoute>
          <DishPreview />
        </ProtectedRoute>
      }/>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
