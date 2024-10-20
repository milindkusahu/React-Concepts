import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      404 Not Found!
      <Link to="/">Home from Link</Link> {/* Recommended */}
      {/* <a href="/">Home from A</a> */}
    </div>
  );
};

export default NotFoundPage;
