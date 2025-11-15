import { Link } from "react-router-dom";
import style from './Navbar.module.css'

function Navbar(params) {
    return (
        <div className={style.container}>

            <div className={style.textkiri}>
                <h1>Homefit</h1>










            </div>
            <div className={style.textkanan}>


                <Link to="/Health" className={style.Link}>
                    <h4>Health</h4>
                </Link>
                <Link to="/Barcallories" className={style.Link1}>
                    <h4>Barcallories</h4>
                </Link>


               


            </div>




        </div>
    )
}

export default Navbar;