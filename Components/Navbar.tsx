import Image from "next/image";
import n from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from "react";
import { update_login } from "../redux/loginSlice";
export interface RootState {
    loginSlice: {
      loggedIN: boolean;
    };
  }

const Navbar = ({login}:{login:boolean}) => {
    const loggedIN = useSelector((state:RootState) => state.loginSlice.loggedIN);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(localStorage.getItem('loggedIN')){
            dispatch(update_login(true))
        }
    },[])

    const handle_Logout =async () => {
        try {
            const response = await fetch('/api/logout',{method:'POST'});
            if(response.status === 200){
                localStorage.removeItem('loggedIN');
                window.location.href = '/';
            } 
        } catch (error) {
            console.log(error)
        }
    }

    return ( <>
        <div className={n.navbar}>
            <div className={n.navbar_kernel}>
                <video src={"/heart.mp4"} autoPlay muted loop/>
                <div className={n.navbar_kernel_logo}>
                    <Link href={"/"}>
                        <Image width={60} height={60} alt={"health"} src={"/heart_icon.svg"} />
                    </Link>
                </div>
                <div className={n.navbar_kernel_tabs}>
                    <button>
                        <Image width={25} height={25} alt={"clinic"} src={"/clinic.png"} />
                        <Link href={"/clinics"} id={n.tabname}> <span id={n.mobilhide}>Clinics</span> <span id={n.enlarge}></span></Link>
                    </button>
                    <button>
                        <Image width={25} height={25} alt={"doctor"} src={"/consult.png"} />
                        <Link href={"/"} id={n.tabname}> <span id={n.mobilhide}>Consultants</span> <span id={n.enlarge}></span></Link>
                    </button>
                    {
                        login && !loggedIN &&
                        <button>
                            <Image width={25} height={25} alt={"login"} src={"/login.png"} />
                            <Link href={"/login"} id={n.tabname}> <span id={n.mobilhide}>Login</span> <span id={n.enlarge}></span></Link>
                        </button>
                    }
                    {
                        loggedIN &&
                        <button onClick={handle_Logout}>
                            <Image width={25} height={25} alt={"logout"} src={"/logout.png"} />
                            <div id={n.tabname}> <span id={n.mobilhide}>Logout</span>  <span id={n.enlarge}></span></div>
                        </button>
                    }
                </div>
            </div>
        </div>
    </> );
}
 
export default Navbar;