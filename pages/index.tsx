import Image from 'next/image'
import { Inter } from '@next/font/google'
import Wrapper from '../Components/Wrapper'
import h from "../styles/Homie.module.css";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Wrapper title={null} login={true}>
        <div className={h.homie}>
          <div id={h.quick} onClick={()=>router.push("/appointment")}> <span>&#128508;</span> QUICK APPOINTMENT</div>
          <div className={h.homie_motto}>
              <div id={h.hs}>
                <h1>EVERY MOMENT<span></span> </h1>
                <h1>EVERY BREATH <span></span> </h1>
                <h1>EVERY HEARTBEAT <span></span> </h1>
                <h1>is so precious... <span></span> </h1>
                <h1>SO YOU ARE! <span></span></h1>
              </div>
              <Image width={600} height={600} alt={"medical"} src={"/dr.png"} priority/>
          </div>
          <div className={h.homie_motto} id={h.left}>
              <Image width={600} height={600} alt={"medical"} src={"/dr1.png"} priority/>
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
