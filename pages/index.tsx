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
            <h1>Every breath...</h1>
            <h1>Every wink...</h1>
            <h1>Every hearthbeat is SO precious...So you are...</h1>
          </div>
            <video src={"/heart.mp4"} autoPlay muted loop/>
        </div>
        
      </Wrapper>
    </>
  )
}
