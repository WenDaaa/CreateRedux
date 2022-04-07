import {connent} from "./redux";

const TwoInput = ({ state,dispath }) => {
    console.log('TwoInput')
    const handleChange = (e) => {
    dispath({
      type: "updateUser",
      payload: { name: e.target.value },
    });
  };
  return <input onChange={handleChange} value={state.user.name}/>;
};

export default connent()(TwoInput);
