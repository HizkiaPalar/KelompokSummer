import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";
const CardInfo = (props) => {
  return (
    <div>
      <h2>Card-Info {props.text5} </h2>
      <Evolution text6="By Nathan" />
      <TypeEffect /> 
      <Logo/>
    </div>
  );
};
export default CardInfo;
