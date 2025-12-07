import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Card = ({title, description, link, img_url}) => {
    return ( 
        <div className="card">
            <div className="card-image">
                <img src={img_url} alt={`${title}'s showcase image`}/>
            </div>
            <div className="card-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a className="card-info__btn" href={link} target="_blanc">
                    Show more <FaArrowUpRightFromSquare/>
                </a>
            </div>
        </div>
     );
}
 
export default Card;