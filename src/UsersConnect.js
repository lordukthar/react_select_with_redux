import { connect } from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
  return {
    count: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
  };
};

const UsersConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersConnect;
