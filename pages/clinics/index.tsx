import Image from 'next/image'
import Wrapper from '../../Components/Wrapper'
import c from "../../styles/Clinics.module.css";
import dental from "../../public/dentistry.jpg";
import hairtransplant from "../../public/hairtransplant.jpg";
import plasticsurgery from "../../public/plasticsurgery.jpg";
import wloss from "../../public/wloss.jpg";
import medicine from "../../public/medicine.png";
import Link from 'next/link';
import { dental_clinics } from '../../dummy';
import { hair_transplant_clinics } from '../../dummy';
import { plastic_surgery_clinics } from '../../dummy';
import { wloss_clinics } from '../../dummy';
import { countries } from '../../dummy';
import { useState,ChangeEvent } from 'react';


const Clinics = () => {
    const services = [
        {
            seviceName:"Dental Services",
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
    const [selections, setSelections] = useState({service:"",speciality:"",country:""});

    const handleSelections = (event:ChangeEvent<HTMLSelectElement>,property:string) => {
        setSelections(prevSelections => ({
            ...prevSelections,
            [property]: event.target.value
          }));
    }
    return ( 
    <Wrapper title={"Clinics"} login={true}>
        <div className={c.filter}>
            <div className={c.filter_tabs}>
                <div className={c.filter_tabs_kernel}>
                <select onChange={(e)=>handleSelections(e,"service")}>
                    <option value="">Service Category</option>
                    {
                        services.map((service, index)=>
                        <option key={index} value={service.seviceName}>{service.seviceName}</option>
                        )
                    }
                </select>
                <select disabled={selections.service.length === 0 ? true : false } onChange={(e)=>handleSelections(e,"speciality")}>
                    <option value="">Speciality</option>
                    <option key={1} value={"all"}>All specialities</option>
                    {
                        services.find((s)=>s.seviceName === selections.service)?.h2.map((h2,i)=>
                        <option key={i} value={h2}>{h2}</option>
                        )
                    }
                </select>
                <select disabled={selections.speciality.length === 0 ? true : false } onChange={(e)=>handleSelections(e,"country")}>
                    <option value="">Country</option>
                    <option key={2} value={"all"}>All countries</option>
                    {
                        countries.map((country,i)=>
                        <option key={i} value={country}>{country}</option>
                        )
                    }
                </select>
                </div>
            </div>
        </div>
        <div className={c.clinics}>
            <div className={c.clinics_kernel}>
                <h1>{selections.service}</h1>
                <h1>{selections.speciality}</h1>
                <h1>{selections.country}</h1>
                    { services.map((service,index)=>
                        <div className={c.clinics_kernel_clinic} key={index}>
                            <div id={c.image}>
                                <Image alt={service.alt} src={service.url} priority={index === 0 ? true : false} placeholder={"blur"}/>
                            </div>
                            <div id={c.text}>
                                <div>
                                    <h1>
                                        <Link href={`/clinics/${service.seviceName}`}>{service.seviceName}</Link>
                                        <span id={c.line}></span>
                                        <span id={c.icon}>&#128064;</span>
                                    </h1>
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