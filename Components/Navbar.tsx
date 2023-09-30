import Image from "next/image";
import n from "../styles/Navbar.module.css";

const Navbar = () => {
    return ( <>
        <div className={n.navbar}>
            <div className={n.navbar_kernel}>
                <Image width={60} height={60} alt={"health"} src={"/heart_icon.svg"} />
            </div>
        </div>
    </> );
}
 
export default Navbar;