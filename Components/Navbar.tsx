import Image from "next/image";
import n from "../styles/Navbar.module.css";

const Navbar = () => {
    return ( <>
        <div className={n.navbar}>
            <div className={n.navbar_kernel}>
                <video src={"/heart.mp4"} autoPlay muted loop/>
                <div className={n.navbar_kernel_logo}>
                    <Image width={60} height={60} alt={"health"} src={"/heart_icon.svg"} />
                </div>
                <div className={n.navbar_kernel_tabs}>
                    <button>
                        <Image width={25} height={25} alt={"clinic"} src={"/clinic.png"} />
                        <span id={n.tabname}>Clinics <span id={n.enlarge}></span></span>
                    </button>
                    <button>
                        <Image width={25} height={25} alt={"doctor"} src={"/consult.png"} />
                        <span id={n.tabname}>Consultants <span id={n.enlarge}></span></span>
                    </button>
                    <button>
                        <Image width={25} height={25} alt={"login"} src={"/login.png"} />
                        <span id={n.tabname}>Login <span id={n.enlarge}></span></span>
                    </button>
                </div>
            </div>
        </div>
    </> );
}
 
export default Navbar;