import { connect } from "react-redux";


const HomeInternal = ({ count }) => (
  <div>
    <h2>Home {count}</h2>
  </div>
);

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

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeInternal);

export default Home;
