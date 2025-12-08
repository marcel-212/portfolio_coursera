import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import InfoBox from "./InfoBox";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("job offer");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState(null);
    const [submitMessage, setSubmitMessage]= useState(null);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setSubmitMessage(null);
        setErrors(null);

        const temp = [];
        if(name.trim() == ''){
            temp.push('name field cannot be empty');
        }
        if(email.trim() == ''){
            temp.push('email field cannot be empty');
        }else if(emailRegex.test(email) == false){
            temp.push('please enter valid email');
        }
        if(message.trim() == ''){
            temp.push('message field cannot be empty');
        }

        if(temp.length == 0){
            //50% to fail
            if(Math.random() < 0.5){
                setEmail('');
                setName('');
                setMessage('');
                setSubmitMessage([true,'The message has been successfully send.'])
            }else{
                setSubmitMessage([false, 'There was some unexpected error, please try again.'])
            }
        }else{
            setErrors(temp);
        }
    }

    return ( 
        <section className="contact" ref={ref}>
            <h1>Contact Form</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="reason" onChange={(e) => setReason(e.target.value)}>Type of enquiry</label>
                <select id="reason">
                    <option value='job offer'>Job offer</option>
                    <option value='freelance'>Freelance project proposal</option>
                    <option value='other'>Other</option>
                </select>

                <label htmlFor="message">Your message</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)}/>

                <input type="submit" name="submit" value="Submit"/>
            </form>

            {errors && errors.length > 0 && 
            <InfoBox>
                <button onClick={() => setErrors(null)}><IoCloseCircleOutline/></button>
                {errors.map((item, index) => (
                    <p key={index}>*{item}</p>
                ))}
            </InfoBox>
            }
            {submitMessage && (
                <InfoBox
                 style={submitMessage[0] ? 
                    {'backgroundColor': 'rgb(107, 236, 102, 0.5)', 'borderColor': 'rgb(107, 236, 102)'} 
                    : 
                    {}}
                >
                    <button onClick={() => setSubmitMessage(null)}><IoCloseCircleOutline/></button>
                    {submitMessage[1]}
                </InfoBox>
            )}
        </section>
     );
})
 
export default Contact;