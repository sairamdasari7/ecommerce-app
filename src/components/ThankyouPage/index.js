import { useNavigate } from "react-router-dom";
import './index.css'

const ThankYouPage=()=>{
    const navigate = useNavigate();

    const handleClick=()=>{
        navigate("/")
    }
    
    return(
        <div className="thank-you-page">
            <img src="https://res.cloudinary.com/dktojjeva/image/upload/v1729267656/thanks_by5ipm.avif" alt="thanks" className="thanks-img" />
            <h1>Thank you for your interest in Monsterra</h1>
            <button type="button" onClick={handleClick} className="home-btn">Home</button>
        </div>
    )
}

export default ThankYouPage