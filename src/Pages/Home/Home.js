import { data, Link, useNavigate } from "react-router-dom";
import style from './Home.module.css'
function Home() {

    const navigate = useNavigate();

    return (
        <div className={style.container}>
            
          
        </div>
    )

    function goToFood() {
        navigate("/Healt")
    }
}

export default Home;