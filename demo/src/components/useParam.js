import React from "react";
import { useHistory, useParams } from "react-router-dom";
export default function useParam() {
  const { id } = useParams();
  const { goBack } = useHistory();
  return (
    <div>
      <h1>Assalom alaykum {id}</h1>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </div>
  );
}
