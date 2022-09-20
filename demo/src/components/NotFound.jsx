import { useHistory } from "react-router";

export default function NotFound() {
  const { goBack } = useHistory();
  return (
    <div>
      <img
        onClick={goBack}
        src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-11.png"
      />

      <h1>
        <b>404</b> <b style={{ color: "red" }}> Not Found</b>
      </h1>
    </div>
  );
}
