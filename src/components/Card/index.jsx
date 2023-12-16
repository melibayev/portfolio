import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import './index.scss'

const Card = ({ name, link, github, image}) => {
  return (
    <Fragment>
        <div className="card">
            <NavLink to={link} target={"_blank"}>
                <div className="card-img">                
                    <img src={image} alt="" />
                </div>
            </NavLink>
            <div className="card-info">
                <p>{name} <NavLink to={github}><span>GitHub</span></NavLink></p>
                <span></span>
            </div>
        </div>
    </Fragment>    
)
}

export default Card