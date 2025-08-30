import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { DishPreview } from "../pages/DishPreview"
import { CreateDish } from "../pages/CreateDish"
import { EditDish } from "../pages/EditDish"


export function AppRoutes() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<CreateDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/preview/:id" element={<DishPreview />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
