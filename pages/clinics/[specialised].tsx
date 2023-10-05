import Image from 'next/image'
import Wrapper from '../../Components/Wrapper'
import s from "../../styles/Clinics.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Specialised = () => {
    const router = useRouter();
    const { name } = router.query; 
    return ( 
        <Wrapper title={"Clinics"} login={true}>
        <div className={s.subclinic} style={{height:"100vh", background:"black", display:"flex",justifyContent:"center",alignItems:"center"}}>   
            <h1 style={{color:"whitesmoke"}}>{name}</h1>
        </div>
    </Wrapper>
     );
}
 
export default Specialised;