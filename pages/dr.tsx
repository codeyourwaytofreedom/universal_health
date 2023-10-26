import Image from "next/image";
import Wrapper from "../Components/Wrapper";
import d from "../styles/Dr.module.css";
import dr from "../public/d.jpeg";
import insurance from "../public/insurance.png";
import insurance1 from "../public/insurance1.png";
import insurance2 from "../public/insurance2.png";
import Link from "next/link";
import { useState } from "react";


const DR = () => {
    const [modal,setModal] = useState(false);
    return ( 
        <Wrapper title={"Doctor Profile"} login={false}>
            <div className={d.dr}>
                <div className={d.dr_modal} style={{display:modal ? "grid" : "none"}}>
                    <div className={d.dr_modal_shell}>
                        <button onClick={()=>setModal(false)}>&#x2715;</button>
                        <h2>In-network insurances</h2>
                        <div className={d.dr_modal_shell_options}>
                            {
                                [...Array(15)].map((e,i)=>
                                
                                    <div className={d.dr_modal_shell_options_option} key={i}>
                                        <h3>Option Number {i+1}</h3>
                                        <span>&#x276E;</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
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
                        <div className={d.dr_intro_tabs_each} id={d.highly}>
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
                    <svg
                    viewBox="0 0 44 60"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '44px', height: '60px', position: 'absolute', top: '-40px', right: '-40px' }}
                    >
                    <path d="M34.6699 54.3321C34.6699 54.3321 32.3317 53.6226 30.8511 52.5362C29.3705 51.4498 24.6939 50.0307 24.6939 50.0307" stroke="#333333" stroke-width="3" stroke-linecap="round"></path>
                    <path d="M27.3601 15.3395C27.3601 15.3395 25.0525 17.4668 23.6427 18.7928C22.2329 20.1188 19.3635 23.1692 19.3635 23.1692" stroke="#333333" stroke-width="3" stroke-linecap="round"></path>
                    <path d="M5.21654 8.61405C5.76208 10.6344 4.11539 13.8472 3.90669 18.0283" stroke="#333333" stroke-width="3" stroke-linecap="round"></path>
                    <path d="M36.4536 34.8824C36.1363 35.0219 33.5732 35.0729 29.9132 35.337C26.4274 35.5886 24.9323 35.8095 23.504 35.8665" stroke="#333333" stroke-width="3" stroke-linecap="round"></path>
                    </svg>                        
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

                <div className={d.dr_book}>
                    <div className={d.dr_book_details} id={d.details}>
                        <div className={d.dr_book_details_tabs}>
                            <Link href={"#my-anchor"}>About</Link>
                            <Link href={"#my-anchor"}>Insurances</Link>
                            <Link href={"#my-anchor"}>Location</Link>
                            <Link href={"#my-anchor"}>Reviews</Link>
                            <Link href={"#my-anchor"}>FAQs</Link>
                        </div>
                        <div id={d.shuffle}>
                            <div className={d.dr_book_details_triple} id={d.triple}>
                                <div className={d.dr_book_details_triple_column}>
                                    <div className={d.dr_book_details_triple_column_double}>
                                        <span>&#x2714;</span>
                                        <div className={d.dr_book_details_triple_column_double_text}>
                                            <div>Highly recommended</div>
                                            <div>100% of patients gave this doctor 5 stars</div>
                                        </div>
                                    </div>
                                    <div className={d.dr_book_details_triple_column_double}>
                                        <span>&#x260E;</span>
                                        <div className={d.dr_book_details_triple_column_double_text}>
                                            <div>New patient appointments</div>
                                            <div>Appointments available for new patients on Zocdoc</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={d.dr_book_details_triple_column} id={d.col2}>
                                    <div className={d.dr_book_details_triple_column_double}>
                                        <span>&#x23F0;</span>
                                        <div className={d.dr_book_details_triple_column_double_text}>
                                            <div>Excellent wait time</div>
                                            <div>100% of patients waited less than 30 minutes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id={d.left}>
                                <h3 id={d.alth3}>What patients are saying</h3>
                                <h3>Overall Rating</h3>
                                <h2>5.00</h2>
                                <div id={d.rating}>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</div>
                                <button>Read 9 reviews</button>
                            </div>
                            <div id={d.right}>
                                <h3>Recent reviews</h3>
                                <div>Dr and staff are very friendly and professionals..visit for a physical went very smoothly.. We have recommended Dr Advovic to a few people already and they are very happy with him and his services.. Thank you!
                                    <span>Judy B.February 28, 2023</span>
                                </div>
                                <div>Had an in office visit. Got the appointment the same day I called. Dr. Avdovic was prompt, professional and informative. Answered all my questions.
                                    <span>Less than 1 year ago</span>
                                </div>
                                <button>Read 9 reviews</button>
                            </div>
                        </div>

                        <div id={d.about}>
                            <h3>About Dr. Hajat Avdovic</h3>
                            <div>Dr. Hajat Avdovic was born in Sarajevo, Bosnia and immigrated to New York City as a child. He grew up in Astoria, Queens and went to the Sophie Davis School of Biomedical Education at City College of NY. He received his medical degree from Albany Medical College and completed his residency in family medicine at Northwell Health Phelps Memorial Hospital where he served as a chief resident. Dr. Avdovic speaks multiple languages and has many interests like photography, traveling and sports. He strives to always provide comprehensive care to his patients with empathy and understanding. Dr. Avdovic is Board Certified in Family Medicine.
                            </div>
                        </div>
                        <br />
                        <div id={d.about}>
                            <h3>Is this doctor in your insurance network?</h3>
                            <div>Enter your insurance carrier and plan</div>
                            <div>
                                <input type="text" placeholder="choose insurance"/><span id={d.sp}>?</span><span id={d.pen}>&#x270F;</span>
                            </div>
                        </div>
                        <br />
                        <div id={d.about}>
                            <h3>In-network insurances</h3>
                            <div> <span style={{color:"green"}}>99% of patients </span>have successfully booked with these insurances</div>
                            <br />
                            <div id={d.cols}>
                                    <div><Image alt={"insurance"} src={insurance} /> <span>Aetna</span> </div>
                                    <div><Image alt={"insurance"} src={insurance1} /> <span>Medicare</span> </div>
                                    <div><Image alt={"insurance"} src={insurance2} /> <span>BlueCross BlueShield</span> </div>
                                    <div><Image alt={"insurance"} src={insurance} /> <span>UnitedHealthcare</span> </div>
                                    <div><Image alt={"insurance"} src={insurance1} /> <span>Cigna</span> </div>
                                    <div><Image alt={"insurance"} src={insurance2} /> <span>UnitedHealthcare Oxford</span> </div>
                                    <div><Image alt={"insurance"} src={insurance} /> <span>Emblem Health</span> </div>
                                    <div>200+ more in-network plans 
                                        <span onClick={()=>setModal(true)} style={{textDecoration:"underline", cursor:"pointer"}}>View All</span> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
 
export default DR;