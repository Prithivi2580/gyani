import { Navigate, Outlet } from "react-router-dom";
import { authClient } from "@/lib/auth-client";
import { CustomSpinner } from "@/components/ui/spinner";

export default function ProtectedRoute() {
  const { data: session, isPending, error } = authClient.useSession();

  if (isPending) {
    return <CustomSpinner />;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
