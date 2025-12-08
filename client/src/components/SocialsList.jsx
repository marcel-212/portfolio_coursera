import { AiFillInstagram, AiOutlineX, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const SocialsList = () => {
    return ( 
        <ul className="socials">
            <li><a target="_blanc" href="https://www.instagram.com/"><AiFillInstagram/></a></li>
            <li><a target="_blanc" href="https://x.com/"><AiOutlineX/></a></li>
            <li><a target="_blanc" href="https://linkedin.com/"><AiFillLinkedin/></a></li>
            <li><a target="_blanc" href="https://www.facebook.com/"><AiFillFacebook/></a></li>
        </ul>
     );
}
 
export default SocialsList;