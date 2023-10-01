import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Wrapper from '../Components/Wrapper'
import h from "../styles/Homie.module.css";
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Wrapper title={null}>
        <div className={h.homie}>
          <div className={h.homie_motto}>
              <div id={h.quick} onClick={()=>router.push("/appointment")}>QUICK APPOINTMENT</div>
              <div>
                <h1>EVERY MOMENT</h1>
                <h1>EVERY BREATH</h1>
                <h1>EVERY HEARTBEAT</h1>
                <h1>is so precious...</h1>
                <h1>SO YOU ARE!</h1>
              </div>
              <Image width={600} height={600} alt={"medical"} src={"/dr.png"} priority/>
          </div>
          <div className={h.homie_motto} id={h.left}>
              <Image width={600} height={600} alt={"medical"} src={"/dr1.png"} priority/>
              <div>
                <h1>WE CARE</h1>
                <h1>ABOUT</h1>
                <h1>YOUR SMILE</h1>
                <h1>so please remember...</h1>
                <h1>WE ARE HERE!</h1>
              </div>
          </div>
          
        </div>
        
      </Wrapper>
    </>
  )
}
