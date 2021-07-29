import Increment from "../components/increments";
import { connect } from "react-redux";

import { actionIncrement } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(actionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Increment);
