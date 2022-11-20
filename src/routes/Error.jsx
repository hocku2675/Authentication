import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Error() {
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);
  const navigate = useNavigate();
  const goToStart = () => {
    navigate(`/`);
  };
  return (
    <div className="text-center text-lg">
      {" "}
      404
      <div className="text-center text-5xl">Page not found</div>
      <div className="text-center text-lg">
        Go
        <div classname="text-blue-600" onClick={goToStart}>
          Home
        </div>
      </div>
    </div>
  );
}
