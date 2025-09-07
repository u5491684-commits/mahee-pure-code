import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center card max-w-md mx-4">
        <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mb-6 text-xl text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
