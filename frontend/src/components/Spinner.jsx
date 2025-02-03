import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);

    if (count === 0) {
      navigate("/LandingPageLogin");
    }

    return () => clearInterval(intervalRef.current);
  }, [count]); // Add the `count` state variable to the dependency array.

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">Unauthorized access</h1>

        <h1 className="Text-center">Redirecting to you in {count} seconds</h1>

        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
