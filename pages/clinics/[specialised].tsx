import Image from 'next/image'
import Wrapper from '../../Components/Wrapper'
import s from "../../styles/Clinics.module.css";
import Link from 'next/link';

const Specialised = () => {
    return ( 
        <Wrapper title={"Clinics"} login={true}>
        <div className={s.subclinic}>
            <h1>Subclicnic</h1>
        </div>
    </Wrapper>
     );
}
 
export default Specialised;