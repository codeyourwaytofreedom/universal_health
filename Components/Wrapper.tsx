import w from "../styles/Wrapper.module.css";
import Head from 'next/head'
import { ReactNode } from "react";
import Navbar from "./Navbar";


const Wrapper = ({title,children, login}:{title:string | null; children:ReactNode, login:boolean}) => {
    return ( <>
    <Head>
        <title>{title || "Universal Health"}</title>
        <meta name="description" content="Universal Health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/healthcare.png" />
    </Head>
    <Navbar login={login}/>
    <main>
    <div>
        {children}
    </div>
    </main>
    
    </> );
}
 
export default Wrapper;