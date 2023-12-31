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
import { useState,ChangeEvent, useEffect } from 'react';
import Clinic_holder from '../../Components/Clinic_holder';
import providerImage from "../../public/provider.png";
import sad from "../../public/sad.png";

type Clinic = {
    clinicCategory:string,
    clinicName:string,
    clinicLocation:string,
    servicesProvided:string[]
}
const Clinics = () => {
    const services = [
        {
            seviceName:"Dental Services",
            url:dental,
            alt:"dentistry",
            h2:["Orthodontics","Oral and maxillofacial surgery","Periodontics","Endodontics"]
        },
        {
            seviceName:"Hair Transplant",
            url:hairtransplant,
            alt:"Hair Transplant",
            h2:["Follicular Unit Transplantation","Follicular Unit Extraction","Robotic Hair Transplantation","Scalp Micropigmentation (SMP)"]
        },
        {
            seviceName:"Plastic Surgery",
            url:plasticsurgery,
            alt:"Plastic Surgery",
            h2:["Rhinoplasty (Nose Reshaping)","Breast Augmentation","Liposuction","Facelift (Rhytidectomy)"]
        },
        {
            seviceName:"Weight Loss",
            url:wloss,
            alt:"Weight Loss",
            h2:["Personalized Nutrition Plans","Customized Exercise Programs","Medical Weight Loss Programs","Behavioral and Lifestyle Coaching"]
        },
    ]
    const [selectedService, setSelectedService] = useState("");
    const [selectedSpeciality, setSelectedSpeciality] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [filteredResults,setFilteredResults] = useState<Clinic[] | undefined | null>();
    const initialLoad = 10;
    const [numberTOdisplay, setNumber] = useState(0);


    const isButtonDisabled = selectedService.length === 0 || selectedSpeciality.length === 0 || selectedCountry.length === 0;
    const isSpecialityDisabled = selectedService.length === 0 ? true : false;
    const isCountryDisabled = selectedSpeciality.length === 0 ? true : false;
    const isCategoriesVisible = !filteredResults ? true : filteredResults.length === 0 ? true : false;
    const isButtonVisible = filteredResults && filteredResults.length > initialLoad && numberTOdisplay !== filteredResults?.length
    && (filteredResults.length - numberTOdisplay - initialLoad) !== 0;

    const handleSelections = (event:ChangeEvent<HTMLSelectElement>,property:string) => {
        if(property === "service"){
            setSelectedService(event.target.value)
            setSelectedSpeciality("") 
            setSelectedCountry("")
        }
        else if(property === "speciality"){
            setSelectedSpeciality(event.target.value);
            setSelectedCountry("")
        }
        else{
            setSelectedCountry(event.target.value)
        }
    }

    const handleFilter = () => {
        setNumber(0);
        const data = selectedService === "" ? null : 
        selectedService === "Dental Services" ? dental_clinics : 
        selectedService === "Hair Transplant" ? hair_transplant_clinics : 
        selectedService === "Plastic Surgery" ? plastic_surgery_clinics :
        wloss_clinics;
        
        const filteredDataBYservice = selectedSpeciality === "all" ? data : data?.filter((clinic)=>clinic.servicesProvided.includes(selectedSpeciality));
        const filteredDataBYcountry = selectedCountry === "all" ? filteredDataBYservice : filteredDataBYservice?.filter((clinic)=>clinic.clinicLocation === selectedCountry);
        
        
        filteredDataBYcountry?.sort((a, b) => {
            if (a.clinicLocation < b.clinicLocation) return -1;
            if (a.clinicLocation > b.clinicLocation) return 1;
            return 0;
          });
        setFilteredResults(filteredDataBYcountry);
        console.log(filteredDataBYcountry)
    }

    const handleNumber = () => {
        if(numberTOdisplay + initialLoad + 5 < filteredResults!.length || numberTOdisplay + initialLoad + 5 === filteredResults!.length){
            setNumber(pr=> pr+5)
        }
        else if((numberTOdisplay+initialLoad+5 > filteredResults!.length && numberTOdisplay < filteredResults!.length)){
            setNumber(filteredResults!.length)
        }
    }

    return ( 
    <Wrapper title={"Clinics"} login={true}>
        <div className={c.filter}>
            <div className={c.filter_tabs}>
                <div className={c.filter_tabs_kernel}>
                <select onChange={(e)=>handleSelections(e,"service")}>
                    <option value={""}>Service Category</option>
                    {
                        services.map((service, index)=>
                        <option key={index} value={service.seviceName}>{service.seviceName}</option>
                        )
                    }
                </select>
                <select disabled={isSpecialityDisabled} onChange={(e)=>handleSelections(e,"speciality")}>
                    <option value={""}>Speciality</option>
                    <option key={1} value={"all"} selected={selectedSpeciality === "all" ? true : false}>All specialities</option>
                    {
                        services.find((s)=>s.seviceName === selectedService)?.h2.map((h2,i)=>
                        <option key={i} selected={selectedSpeciality === h2 ? true : false} value={h2}>{h2}</option>
                        )
                    }
                </select>
                <select disabled={isCountryDisabled} onChange={(e)=>handleSelections(e,"country")}>
                    <option value={""}>Country</option>
                    <option key={2} value={"all"} selected={selectedCountry === "all" ? true : false}>All countries</option>
                    {
                        countries.map((country,i)=>
                        <option key={i} selected={selectedCountry === country ? true : false} value={country}>{country}</option>
                        )
                    }
                </select>
                <button disabled={isButtonDisabled} onClick={handleFilter}>Show Results</button>
                </div>
            </div>
        </div>
        <div className={c.clinics}>
            <div className={c.clinics_kernel}>
                {
                    filteredResults?.length === 0 &&
                    <div id={c.warning}>
                        <Image alt={"not found"} src={sad}/>
                        <h1>No clinics meeting search criteria</h1>
                    </div>
                }
                {isCategoriesVisible  && services.map((service,index)=>
                    <Link href={`/clinics/category?name=${service.seviceName}`} key={index}><div className={c.clinics_kernel_clinic}>
                        <div id={c.image}>
                            <Image alt={service.alt} src={service.url} priority={index === 0 ? true : false} placeholder={"blur"}/>
                        </div>
                        <div id={c.text}>
                            <div>
                                <h1>
                                    {service.seviceName}
                                    <span id={c.line}></span>
                                    <span id={c.icon}>&#128064;</span>
                                </h1>
                                {
                                    service.h2.map((h2,iindex)=>
                                    <h2 key={iindex}>✔ {h2}</h2>
                                    )
                                }
                            </div>
                        </div>
                    </div></Link>
                )}    

                {
                    filteredResults &&
                    <div className={c.clinics_kernel_results}>
                    {   filteredResults.slice(0,initialLoad+numberTOdisplay).map((result,index)=>
                        <Link href={`/clinics/clinic?name=${result.clinicName}`} key={index}>
                            <div className={c.clinics_kernel_results_holder}>
                                <Image alt={"health service"} src={providerImage} priority={index === 0 ? true : false} placeholder={"blur"}/>
                                <div id={c.text}>
                                    <h1>{result.clinicName}</h1>
                                    <h2>&#128204; {result.clinicLocation}</h2>
                                </div>
                            </div>
                        </Link>
                    )}  
                    {
                        isButtonVisible && 
                        <button onClick={handleNumber}> +{filteredResults.length - numberTOdisplay - initialLoad} more</button>
                    }
                    
                    </div>
                }
               
            </div>
        </div>
    </Wrapper>
     );
}
 
export default Clinics;