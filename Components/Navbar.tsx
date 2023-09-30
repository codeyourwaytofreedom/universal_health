import Image from "next/image";
import n from "../styles/Navbar.module.css";

const Navbar = () => {
    return ( <>
        <div className={n.navbar}>
            <div className={n.navbar_kernel}>
                <video src={"/heart.mp4"} autoPlay muted loop/>
                <div className={n.navbar_kernel_logo}>
                    <Image width={60} height={60} alt={"health"} src={"/heart_icon.svg"} />
                    {/* <div className={n.navbar_kernel_logo_text}>Universal Health</div> */}
                </div>
            </div>
        </div>
    </> );
}
 
export default Navbar;