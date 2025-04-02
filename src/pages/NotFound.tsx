
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "@/lib/scrollToTop";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleNavigateHome = () => {
    scrollToTop();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-wine-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          The page you're looking for cannot be found
        </p>
        <p className="text-gray-500 mb-8">
          The link you followed may be broken, or the page may have been removed
        </p>
        <Link 
          to="/" 
          onClick={handleNavigateHome}
          className="inline-flex items-center justify-center px-6 py-3 bg-wine-800 hover:bg-wine-700 text-white rounded-md transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
