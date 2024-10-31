import Gen1 from './gen1';
import Gen2 from './gen2';
import Gen3 from './gen3';
import Gen4 from './gen4';

const Generation = (props) => {
    return (
        <div>
            <h1>Generation {props.name2} </h1>
            <Gen1 name3="By Afirst"/>
            <Gen2 name4="By Afirst"/>
            <Gen3 name5="By Afirst"/>
            <Gen4 name6="By Afirst"/>
        </div>

    )
}
export default Generation ;