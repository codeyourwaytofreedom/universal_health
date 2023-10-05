import c from "../styles/Clinics.module.css";
import Image from 'next/image'
import Link from 'next/link';

const Clinic_holder = ({service,key}:{service:any, key:number}) => {
    return ( 
    <div className={c.clinics_kernel_clinic} key={key}>
        <div id={c.image}>
            <Image alt={service.alt} src={service.url} priority={key === 0 ? true : false} placeholder={"blur"}/>
        </div>
        <div id={c.text}>
            <div>
                <h1>
                    <Link href={`/clinics/${service.seviceName}`}>{service.seviceName}</Link>
                    <span id={c.line}></span>
                    <span id={c.icon}>&#128064;</span>
                </h1>
                {
                    service.h2.map((h2:any,iindex:any)=>
                    <h2 key={iindex}>✔ {h2}</h2>
                    )
                }
            </div>
        </div>
    </div>
     );
}
 
export default Clinic_holder;