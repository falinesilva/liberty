import "./index.css";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AuthForm from "./features/auth/AuthForm";
import DashboardContainer from "./features/dashboard/DashboardContainer";

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) return null; // or a Loader component

  return user ? <DashboardContainer user={user} /> : <AuthForm />;
}

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <div className="cursor-default min-h-screen bg-slate-950 text-slate-50 flex justify-center">
          <div className="w-full max-w-4xl text-slate-50 rounded-2xl text-lg">
            <AppContent />
          </div>
        </div>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
