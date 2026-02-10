import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center bg-background py-20">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold font-heading text-primary">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Oops! Page not found</p>
          <p className="mb-8 text-muted-foreground">The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Home className="mr-2 w-4 h-4" /> Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
