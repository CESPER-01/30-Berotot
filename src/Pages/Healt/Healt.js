import style from './Healt.module.css'
function Healt(params) {
    return (
        <div className={style.container}>

            <div className={style.textmain}>
                
                <h1>TrackYour <br />
                    Wellness
                </h1>
                <p>Monitor your sleep, meals, and hydration<br />
                    for a healthier lifestyle
                </p>
            </div>

            <div className={style.buttonbutton}>

                <div className={style.buttonkiri}>
                    <h3>Sleep <br /> Schedule</h3>
                </div>

                <div className={style.buttontengah}>
                    <h3>Meal plan</h3>
                </div>

                <div className={style.buttonkanan}>
                    <h3>Water Tarcker </h3>
                </div>
                
            </div>

        </div>
    )
}

export default Healt;