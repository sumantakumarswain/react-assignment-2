
function TabWrapper(props) {
    return (
        <>
            <div className="tab-wrapper" key="5" onMouseEnter={(e)=>{props.hover(e,props.index)}} onMouseLeave={(e)=>{props.hover(e,props.index)}}   id = {props.index}>
                <div className="hover-effect"></div>
                <img className="tab-image" src={props.details.img}  key="4"/>
                <h2 className="tab-title" title={props.details.title} key="3">{props.details.title}</h2>
                <p className="authorName" key= "2"><b>{props.details.authorName}</b> | <span>{props.details.launchDate}</span> </p>
                <p className="description" key="1">{props.details.description}</p>
            </div>
        </>
    )
}
export default TabWrapper