import Wrapper from "../Components/Wrapper";
import my from "../styles/Clinics.module.css";

const Appointment = () => {
    return ( 
        <Wrapper title={"Make an appointment"} login={false}>
            <div id={my.appointment}>
                <h1>for <strong>PATIENTS</strong> only</h1>
            </div>
        </Wrapper>
     );
}
 
export default Appointment;