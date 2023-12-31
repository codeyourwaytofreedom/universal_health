import Wrapper from "../Components/Wrapper";
import l from "../styles/Login.module.css";
import { MouseEvent,useEffect,useRef, useState,ChangeEvent } from 'react';
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useDispatch,useSelector } from "react-redux";
import { update_login } from "../redux/loginSlice";
import { RootState } from "../Components/Navbar";

const Login = () => {
    const dispatch = useDispatch();
    const loggedIN = useSelector((state:RootState) => state.loginSlice.loggedIN);
    const user_name = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const regex_password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+~`|}{[\]:/;?><,.\-='"])[A-Za-z0-9!@#$%^&*()_+~`|}{[\]:/;?><,.\-='"]{8,30}$/
    const regex_username = /^[a-zA-Z0-9_]{6,10}$/;
    const [feedback, setFeedback] = useState<{text:string,color:string,icon:string}>({text:"", color:"silver",icon:""})
    const successColor = "#008080";
    const warningColor = "crimson";
    const goingonColor = "whitesmoke";
    const [who,setWho] = useState("patient");

    useEffect(()=>{
        if(localStorage.getItem('loggedIN')){
            window.location.href = "/";
        }
    },[])

    const handle_login = async (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(regex_username.test(user_name.current!.value) && regex_password.test(password.current!.value)){
            setFeedback({text:"Logging in... Please wait", color:goingonColor,icon:"✔"})
            try {
                const response = await fetch("/api/login",{
                    method: "POST",
                    body:JSON.stringify(
                        {
                            username:user_name.current?.value,
                            password: password.current?.value,
                            who:who
                        })
                });
                if(!response.ok){
                    setFeedback({text:"Please check your connection!", color:warningColor,icon:'⚠'})
                }
                const status = response.status;
                if(status === 200){
                    setFeedback({text:"Successful login", color:successColor,icon:"✔"});
                    localStorage.setItem('loggedIN','true');
                    const resJson = await response.json();
                    console.log(resJson);
                    setTimeout(() => {
                        dispatch(update_login(true));
                        window.location.href = resJson.url; 
                    }, 900);
                }
                if(status === 404 || status === 500){
                    const resJson = await response.json();
                    setFeedback({text:resJson.message, color:warningColor,icon:'⚠'})
                }
                else {
                    console.error(response);
                }
            } catch (error) {
                console.log("Network problem or broken url", error)
            }
        }
        else{
            setFeedback({text:"Invalid credentials", color:warningColor,icon:'⚠'})
        }
    }

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked){
            setWho(event.target.value);
        }
      };

    return ( 
        <Wrapper title={"Log in"} login={false}>
            <div className={l.login}>
                <div className={l.login_kernel}>
                    <div className={l.login_kernel_shell}>
                    <div id={l.who}>
                        <input type={"radio"} name={"yy" } onChange={handleCheck} defaultChecked value={"patient"}/><span>Patient</span>
                        <input type={"radio"} name={"yy"} onChange={handleCheck} value={"consultant"}/><span>Consultant</span>
                    </div>
                    <form>
                        <div className={l.login_kernel_shell_line}>
                            <input type="text" name={"username"} ref={user_name} placeholder={"Username"}/>
                        </div>
                        <div className={l.login_kernel_shell_line}>
                            <input type={"password"} name={"password"} placeholder={"Passpowrd"} ref={password}/>
                        </div>
                        <div className={l.login_kernel_shell_line}>
                            <button type={"submit"} onClick={handle_login}>
                                Login
                            </button>
                        </div>
                    </form>
                    <div id={l.key}>
                    <svg viewBox="0 0 24 24">
                        <path d="M21.0667 5C21.6586 5.95805 22 7.08604 22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.272 15.465 11.8598 15.465 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876C6.22633 20.6364 5.952 20.9096 5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C16.4995 2 17.282 2.15509 18 2.43738" 
                            stroke={feedback.color ? feedback.color : "#008080"} />
                        <path d="M17.8851 8.29353C17.8851 9.50601 16.8982 10.4889 15.6807 10.4889C14.4633 10.4889 13.4763 9.50601 13.4763 8.29353C13.4763 7.08105 14.4633 6.09814 15.6807 6.09814C16.8982 6.09814 17.8851 7.08105 17.8851 8.29353Z" 
                            stroke={feedback.color ? feedback.color : "#008080"} />
                    </svg>
                    </div>
                    <div id={l.feedback}>
                        <span style={{color:feedback.color}}>{feedback.icon}</span>
                        <span style={{color:feedback.color}}>{feedback.text}</span>
                    </div>
                    </div>
                </div>
            </div>
        </Wrapper>
     );
}
 
export default Login;