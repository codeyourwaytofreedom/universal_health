import Image from 'next/image'
import Wrapper from '../../Components/Wrapper'
import c from "../../styles/Clinics.module.css";

const Clinics = () => {
    //const services = ["Dentistry", "Hair Transplant", "Laser Hair Removal","Plastic Surgery", "Weight Loss"];
    const services = [
        {
            seviceName:"Dental Clinics",
            url:"/dentistry.jpg",
            alt:"dentistry",
            h2:["✔ Orthodontics","✔ Oral and maxillofacial surgery","✔ Periodontics","✔ Endodontics"]
        },
        {
            seviceName:"Hair Transplant",
            url:"/hairtransplant.jpg",
            alt:"Hair Transplant",
            h2:["✔ Follicular Unit Transplantation","✔ Follicular Unit Extraction","✔ Robotic Hair Transplantation","✔ Scalp Micropigmentation (SMP)"]
        },
    ]
    return ( 
    <Wrapper title={"Clinics"} login={true}>
        <div className={c.clinics}>
            <div className={c.clinics_kernel}>
{/*                 <div>
                    {services.map((s,i)=> <button key={i}>{s}</button> )}
                </div> */}

                    { services.map((service,index)=>
                        <div className={c.clinics_kernel_clinic} key={index}>
                            <div id={c.image}>
                                <Image width={750} height={500} alt={service.alt} src={service.url} priority/>
                            </div>
                            <div id={c.text}>
                                <div>
                                    <h1>{service.seviceName}</h1>
                                    {
                                        service.h2.map((h2,iindex)=>
                                        <h2 key={iindex}>{h2}</h2>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )}                    

            </div>
        </div>
    </Wrapper>
     );
}
 
export default Clinics;