import { AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="footer">
            <AiFillTwitterSquare className="footerIcon" />
            <FaFacebookSquare className="footerIcon" />
            <BsInstagram className="footerIcon" />
            <FaGithubSquare className="footerIcon" />
        </div>
    )
}