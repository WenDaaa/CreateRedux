import { connent } from "./redux";

const OneName = connent((state)=>{
  return {
    user:state.user
  }
})(({user}) => {
  console.log('oneName')
  return <div className="1">name:{user?.name}</div>;
});

export default OneName;
