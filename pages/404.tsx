import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Components/Wrapper";
import e from "../styles/Login.module.css";

const NotFound = () => {
    return ( 
        <Wrapper title={"Ooops!"} login={false}>
            <div className={e.error}>
                <div className={e.error_kernel}>
                    <div className={e.error_kernel_center}>
                        <div id={e.closed}>
                            <span></span>
                            <Link href={"/"} id={e.home}>Homepage</Link>
                            <Link href={"/"} id={e.consultants}>Consultants</Link>
                            <Link href={"/"} id={e.help}>Help</Link>
                            <Image width={44} height={73*4} alt={"404"} src={"/closed.png"} priority/>
                        </div>
                        <Image width={400} height={600} alt={"404"} src={"/404.png"} priority/>
                        <h1><span>⚠</span> Page not found!</h1>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
 
export default NotFound;