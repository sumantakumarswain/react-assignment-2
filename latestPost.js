import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function LatestPost(props) {
    return (
        <>
            <div id="latest-post-wrapper">
                <span><FontAwesomeIcon icon={faFilter} /></span>
                <p>Filter by Category</p>
            </div>
            <div id="button-wrapper">
                <button className="active-class" onMouseEnter={(e)=>{props.hoverEffect(e)}}  >All</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Artificial Intelligence</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Cloud Computing</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >DevOps</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Programming Languages</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Mobile Application Development</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Technology and Tools</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Get a Job in a Tech Company</button>
                <button className="post-button" onMouseEnter={(e)=>{props.hoverEffect(e)}} >Others</button>
            </div>


        </>
    )
}
export default LatestPost