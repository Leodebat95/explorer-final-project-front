import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";


export function ProtectedRoute({ children, adminOnly = false }) {

  const { user, isCheckingAuth, isAdmin } = useAuth();

  // Enquanto verifica a autenticação, não renderiza nada
  if(isCheckingAuth) {

    return null;
  };

  // Se não tem usuário logado, redireciona para a página inicial (login)
  if(!user) {

    return <Navigate to="/" replace />
  };

  // Se a rota requer admin mas o usuário não é admin, redireciona
  if(adminOnly && !isAdmin()) {

    return <Navigate to="/" replace />
  };

  // Se passou por todas as verificações, renderiza a página
  return children;
};
