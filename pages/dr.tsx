import Image from "next/image";
import Wrapper from "../Components/Wrapper";
import d from "../styles/Dr.module.css";
import dr from "../public/d.jpeg";
import Link from "next/link";


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

                <div className={d.dr_book}>
                    <div className={d.dr_book_kernel}>
                        <div className={d.dr_book_kernel_left}>
                            <h2>Book an appointment for free</h2>
                            <div>Dr. Avdovic partners with Zocdoc to schedule patient appointments</div>
                            <select>
                                <optgroup label="Popular Visit Reasons">
                                    <option value="1" defaultChecked>Illness</option>
                                    <option value="1">Pediatric Consultation</option>
                                    <option value="1">Psychiatry Consultation</option>
                                    <option value="1">Gastroenterology Consultation</option>
                                    <option value="1">Annual Physical</option>
                                    <option value="1"></option>
                                </optgroup>
                                <optgroup label="All Visit Reasons">
                                    <option value="1">Abdominal Pain</option>
                                    <option value="1">Abscess</option>
                                    <option value="1">Acid Reflux / Heartburn</option>
                                    <option value="1">Annual Check Up</option>
                                    <option value="1">Back Pain</option>
                                    <option value="1">Blood Pressure Testing</option>
                                </optgroup>
                            </select>
                            <div>440 S Riverside Ave, Ground Level, Croton On Hudson, NY 10520</div>
                            <div><input type="checkbox" defaultChecked/><span> I am a new patient</span></div>

                        </div>
                        <div className={d.dr_book_kernel_right}>
                            <div>At this time, the provider has no availability on Zocdoc at this location 
                                for appointments that meet your search criteria.
                            </div>
                            <Link href={"/"}>Notify me of new availability</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
 
export default DR;