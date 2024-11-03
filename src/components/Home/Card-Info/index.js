import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";
const CardInfo = (props) => {
  return (
    <div>
      <h2>Card-Info {props.text5} </h2>
      <Evolution text6="By Nathan" />
      <TypeEffect text7="By Bela"  /> 
      <Logo text8="By Bela"/>
    </div>
  );
};
export default CardInfo;
