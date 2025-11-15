import style from './Exsercise.module.css'

function Exsercise() {
    return (
        <div className={style.container}>
            <div className={style.textmain}>

                <h1>Exsercise <br />

                </h1>
                <p>Home/Exsercise<br />

                </p>
            </div>

            <div className={style.buttonbutton}>

                <div className={style.buttonkiri}>
                    <h3>Sleep <br /> Latih otot dada untuk postur tegap dan kuat</h3>
                </div>

                <div className={style.buttontengah}>
                    <h3>Meal plan <br /> Otot tangan penting untuk kekuatan tubuh atas</h3>
                </div>

                <div className={style.buttonkanan}>
                    <h3>Water Tarcker <br />  Latihan otot kaki menjaga keseimbangan tubuh</h3>
                </div>

            </div>
        </div>
    )
}

export default Exsercise;