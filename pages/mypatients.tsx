import Wrapper from "../Components/Wrapper";
import my from "../styles/Clinics.module.css";

const Mypatients = () => {
    return ( 
        <Wrapper title={"My Patients"} login={false}>
            <div id={my.mypatients}>
                <h1>for <strong>DOCTORS</strong> only</h1>
            </div>
        </Wrapper>
     );
}
 
export default Mypatients;