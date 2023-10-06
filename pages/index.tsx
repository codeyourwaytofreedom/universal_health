import Image from 'next/image'
import { Inter } from '@next/font/google'
import Wrapper from '../Components/Wrapper'
import h from "../styles/Homie.module.css";
import { useRouter } from 'next/navigation';
import dr from "../public/dr.png";
import dr1 from "../public/dr1.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const handleQuickAppointmentClick = () => {
    router.push("/appointment");
  };
  return (
    <>
      <Wrapper title={null} login={true}>
        <div className={h.homie}>
          <div id={h.quick} onClick={handleQuickAppointmentClick}> <span>&#128508;</span> <h3>QUICK APPOINTMENT</h3></div>
          <div className={h.homie_motto}>
              <div id={h.hs}>
                <h1>EVERY MOMENT<span></span> </h1>
                <h1>EVERY BREATH <span></span> </h1>
                <h1>EVERY HEARTBEAT <span></span> </h1>
                <h1>is so precious... <span></span> </h1>
                <h1>SO YOU ARE! <span></span></h1>
              </div>
              <Image alt={"medical"} src={dr} priority/>
          </div>
          <div className={h.homie_motto} id={h.left}>
              <Image alt={"medical"} src={dr1}/>
              <div id={h.hs}>
                <h1>WE CARE <span></span> </h1>
                <h1>ABOUT <span></span> </h1>
                <h1>YOUR SMILE <span></span> </h1>
                <h1>so please remember... <span></span> </h1>
                <h1>WE ARE HERE! <span></span></h1>
              </div>
          </div>
          
        </div>
        
      </Wrapper>
    </>
  )
}
