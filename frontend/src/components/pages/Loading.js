import React from "react";
import loading from "../../assets/loading.gif";

function Loading() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column p-3">
      <img src={loading} alt="loading..." />
    </div>
  );
}

export default Loading;
