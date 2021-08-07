import { useHistory } from "react-router-dom";

const BackBtn = () => {
  const history = useHistory();

  return (
    <button
      className="back-btn btn btn-transparent semi-med"
      onClick={() => history.go(-1)}
    >
      <i className="material-icons semi-med">chevron_left</i>
      Back
    </button>
  );
};

export default BackBtn;
