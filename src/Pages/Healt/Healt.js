import { Link } from 'react-router-dom';
import style from './Healt.module.css'

function Healt() {
    return (
        <div className={style.container}>

            <div className={style.textmain}>


                <div className={style.text}>
                    <h1>TrackYour <br />
                        Wellness
                    </h1>
                    <p>Monitor your sleep, meals, and hydration<br />
                        for a healthier lifestyle
                    </p>
                </div>

            </div>

            <div className={style.buttons}>

                <div className={style.button}>
                    <img src='imghealth/moon (1).png' className={style.icon}>
                    </img>
                    <div className={style.textbox}>
                        <h3>Sleep <br /> Schedule</h3>
                        <p>Track your sleep <br />patterns</p>
                    </div>

                </div>

                <div className={style.button}>
                    <img src='imghealth/utensils.png' className={style.icon}>
                    </img>
                    <div className={style.textbox}>
                        <h3>Meal plan</h3>
                        <p>Organize your <br />daily meals</p>
                    </div>

                </div>

                <div className={style.button}>
                    <img src='imghealth/droplet.png' className={style.icon}>
                    </img>
                    <div className={style.textbox}>
                        <h3>Water Tarcker </h3>
                        <p>Logo your daily <br />water intake</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Healt;