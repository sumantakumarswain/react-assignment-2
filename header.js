import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faXmark } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>


            <div id="header-wrapper">
                <div id="upper-heading">
                    <p id="first-para">Now get exciting rewards on learning. Know More </p>
                    <span id="Xmark"><FontAwesomeIcon icon={faXmark} /></span>
                </div>
                <div id="header-main-wrapper">
                    <div id="header-left-section">
                        <h1 id="logo">EDYODA <br /><span id="logo-text">Stories</span></h1>
                        <p id="explore-text">Explore Categories <span id="down-arrow"> <FontAwesomeIcon icon={faAngleDown} /></span></p>
                    </div>
                    <div id="header-right-section">
                        <p id="description-para">EdYoda is a learning and knowledge <br />sharing platform for techies</p>
                        <button id="main-website-btn">Go To Main Website</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header