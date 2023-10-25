import Image from "next/image";
import Wrapper from "../Components/Wrapper";
import d from "../styles/Dr.module.css";
import dr from "../public/d.jpeg";


const DR = () => {
    return ( 
        <Wrapper title={"Doctor Profile"} login={false}>
            <div className={d.dr}>
                <div className={d.dr_intro}>
                    <div className={d.dr_intro_image}>
                        <Image alt={"dr"} src={dr} />
                        <div className={d.dr_intro_image_text}>
                            <h2>Dr. Hajat Avdovic, MD</h2>
                            Primary Care Doctor  <br />
                            Croton On Hudson, NY
                        </div>
                    </div>
                    <div className={d.dr_intro_tabs}>
                        <div className={d.dr_intro_tabs_each}>
                            <div id={d.title}>
                                <span>&#x2605;</span>
                                <span>Overall rating</span>
                            </div>
                            <h2>5.00</h2> 
                            <h4>9 verified reviews</h4>
                        </div>
                        <div className={d.dr_intro_tabs_each}>
                            <div id={d.title}>
                                <span>&#x267B;</span>
                                <span>In-network with</span>
                            </div>
                            <div>Aetna, BlueCross BlueShield, Cigna, Emblem Health, Medicare, Unit</div>
                            <h4>See if they,re in network</h4>
                        </div>
                        <div className={d.dr_intro_tabs_each}>
                            <div id={d.title}>
                                <span>&#x2714;</span>
                                <span>Highly recommended</span>
                            </div>
                            <div>100% of patients gave this doctor 5 stars</div>
                        </div>
                    </div>


                </div>
            </div>
        </Wrapper>
    );
}
 
export default DR;