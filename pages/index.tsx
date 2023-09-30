import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Wrapper from '../Components/Wrapper'
import h from "../styles/Homie.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Wrapper title={null}>
        <div className={h.homie}>
          <div className={h.homie_motto}>
              <div>
                <h1>EVERY MOMENT</h1>
                <h1>EVERY BREATH</h1>
                <h1>EVERY HEARTBEAT</h1>
                <h1>is so precious...</h1>
                <h1>SO YOU ARE!</h1>
              </div>
              <Image width={600} height={600} alt={"medical"} src={"/dr.png"} priority/>
          </div>
          
        </div>
        
      </Wrapper>
    </>
  )
}
