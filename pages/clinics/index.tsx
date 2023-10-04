import Image from 'next/image'
import Wrapper from '../../Components/Wrapper'
import c from "../../styles/Clinics.module.css";
import dental from "../../public/dentistry.jpg";
import hairtransplant from "../../public/hairtransplant.jpg";
import plasticsurgery from "../../public/plasticsurgery.jpg";
import wloss from "../../public/wloss.jpg";


const Clinics = () => {
    //const services = ["Dentistry", "Hair Transplant", "Laser Hair Removal","Plastic Surgery", "Weight Loss"];
    const services = [
        {
            seviceName:"Dental Clinics",
            url:dental,
            alt:"dentistry",
            h2:["✔ Orthodontics","✔ Oral and maxillofacial surgery","✔ Periodontics","✔ Endodontics"]
        },
        {
            seviceName:"Hair Transplant",
            url:hairtransplant,
            alt:"Hair Transplant",
            h2:["✔ Follicular Unit Transplantation","✔ Follicular Unit Extraction","✔ Robotic Hair Transplantation","✔ Scalp Micropigmentation (SMP)"]
        },
        {
            seviceName:"Plastic Surgery",
            url:plasticsurgery,
            alt:"Plastic Surgery",
            h2:["✔ Rhinoplasty (Nose Reshaping)","✔ Breast Augmentation","✔ Liposuction","✔ Facelift (Rhytidectomy)"]
        },
        {
            seviceName:"Weight Loss",
            url:wloss,
            alt:"Weight Loss",
            h2:["✔ Personalized Nutrition Plans","✔ Customized Exercise Programs","✔ Medical Weight Loss Programs","✔ Behavioral and Lifestyle Coaching"]
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
                                <Image alt={service.alt} src={service.url} priority={index === 0 ? true : false}/>
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