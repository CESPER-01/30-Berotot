// import { data, Link, useNavigate } from "react-router-dom";
import style from './Home.module.css'

function Home() {
    return (
        <div className={style.container}>
            <img src='imghome/laut.jpg' className={style.icon}></img>
            <div className={style.text}>
              
                <h1>Welcom to <br /> Homefit</h1>
                <p>Selamat datang di website Homefit, website yang membantu anda <br />untuk olahraga di rumah</p>
            </div>

            <div className={style.boxs}>
                
                <div className={style.box}>
                      <h2>Health</h2>
                </div>
                <div className={style.box}>
                      <h2>Exercise</h2>
                </div>
                <div className={style.box}>
                      <h2>Bar Callories</h2>
                </div>
                 
               
            </div>

            <div className={style.boxs2}>
                 <div className={style.box}>
                    <h2>Achievment</h2>
                 </div>
                <div className={style.box}>
                      <h2>Weekly </h2>
                </div>
            </div>

        </div>
    )
}


// function Home() {

//     // const navigate = useNavigate();

//     return (
//         <div className={style.container}>


//         </div>
//     )

// function goToFood() {
//     navigate("/Healt")
// }

//  function goToExsercise() {
//     navigate("/Exsercise")
// }
// }

export default Home;