import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = (props) => {
    return(
        <div>
            <h1>
                Home {props.text3}
            </h1>
            <Search text4="By Nisa" />
            <CardInfo/>
        </div>
    )
}
export default Home;