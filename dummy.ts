
export type service = {
    seviceName: string;
    url: string;
    alt: string;
    h2: string[];
}
    
const services:service[] = [
    {
        seviceName:"Dental Services",
        url:"dental",
        alt:"dentistry",
        h2:["Orthodontics","Oral and maxillofacial surgery","Periodontics","Endodontics"]
    },
    {
        seviceName:"Hair Transplant",
        url:"hairtransplant",
        alt:"Hair Transplant",
        h2:["Follicular Unit Transplantation","Follicular Unit Extraction","Robotic Hair Transplantation","Scalp Micropigmentation (SMP)"]
    },
    {
        seviceName:"Plastic Surgery",
        url:"plasticsurgery",
        alt:"Plastic Surgery",
        h2:["Rhinoplasty (Nose Reshaping)","Breast Augmentation","Liposuction","Facelift (Rhytidectomy)"]
    },
    {
        seviceName:"Weight Loss",
        url:"wloss",
        alt:"Weight Loss",
        h2:["Personalized Nutrition Plans","Customized Exercise Programs","Medical Weight Loss Programs","Behavioral and Lifestyle Coaching"]
    },
]
    
export const countries = ["Turkey","Germany","France","Italy","UK","USA","Austria","Spain","Hungary","Sweden","Netherlands","Belgium"];
    
const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };    

const dummyMaker = (service:service,howmany:number) => {
    const output = [];
    const clinicCategory = service.seviceName;
    for (let index = 0; index < howmany; index++) {
        const clinicLocation = countries[generateRandomNumber(0,countries.length-1)];
        const clinicName = "Clinic-"+index+"-"+clinicLocation;
        const serviceNumber = generateRandomNumber(1,service.h2.length);
        const indexesTaken:number[] = [];
        const servicesProvided:string[] = [];

        while (indexesTaken.length<serviceNumber){
            const randomServiceIndex = generateRandomNumber(0, service.h2.length-1);
            if(!indexesTaken.includes(randomServiceIndex)){
                indexesTaken.push(randomServiceIndex);
                const randomService = service.h2[randomServiceIndex];
                servicesProvided.push(randomService);
            }
        }
        const clinic = {
            clinicCategory:clinicCategory,
            clinicName:clinicName,
            clinicLocation:clinicLocation,
            servicesProvided:servicesProvided
        }
        output.push(clinic);
    }
    return output;
}

const howmany = 80;
export const dental_clinics = dummyMaker(services[0],howmany);
export const hair_transplant_clinics = dummyMaker(services[1],howmany);
export const plastic_surgery_clinics = dummyMaker(services[2],howmany);
export const wloss_clinics = dummyMaker(services[3],howmany);

    
