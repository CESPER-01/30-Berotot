import { Link } from "react-router-dom";
import style from './Navbar.module.css'

function Navbar(params) {
    return (
        <div className={style.container}>

            <div className={style.textkiri}>
                <h1>Homefit</h1>










            </div>
            <div className={style.textkanan}>


                <Link to="/Healt" className={style.Link}>
                    <h3>Healt</h3>
                </Link>
                <Link to="/Barcallories" className={style.Link1}>
                    <h3>Barcallories</h3>
                </Link>
                 <Link to="/Exsercise" className={style.Link1}>
                    <h3>Exsercise</h3>
                </Link>
                <Link to="/Achievement" className={style.Link1}>
                    <h3>Achievement</h3>
                </Link>


               


            </div>




        </div>
    )
}

export default Navbar;