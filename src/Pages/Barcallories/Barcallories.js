import style from './Barcallories.module.css'
function Barcallories() {
    const percentage = 50;
    return (
        <div className={style.container}>

            <div className={style.boxs}>
                <div className={style.box}>

                    <h2>9.849</h2><p>/10.000</p>
                    <h3>Steps today</h3>
                    <img src='imgbarcall/Group 13.png' className={style.icon}></img>

                </div>

                <div className={style.box2}>
                    <div className={style.apisepatu}>
                        <img src='imgbarcall/shoes.png' className={style.icon2}></img>
                        <img src='imgbarcall/download 1.png' className={style.icon3}></img>
                    </div>
                    <div className={style.text}>
                        <div className={style.text1}>
                            <h2>386</h2> <p>Callories burned</p>
                        </div>
                        <div className={style.text2}>
                            <h2>500m</h2> <p>Distance traveled</p>
                        </div>

                    </div>

                </div>

            </div>



            <div className={style.kotakpersen}>
                <h2>MONDAY</h2>
                <div className={style.kotak1} style={{ width: `100%` }}>
                    <div className={style.persen} style={{ width: `${percentage}%` }}>
                        <h3>20%</h3>

                    </div>

                </div>

                <h2>SUNDAY</h2>
                <div className={style.kotak1} style={{ width: `100%` }}>
                    <div className={style.persen} style={{ width: `${percentage}%` }}>
                        <h3>50%</h3>
                    </div>

                </div>
                <h2>SUNDAY</h2>
                <div className={style.kotak1} style={{width: `100%`}} >
                    <div className={style.persen} style={{width: `${percentage}%`}}>
                          <h3>80%</h3>
                    </div>
                  
                </div>
            </div>


            <h1>ini halaman Barcallories</h1>
        </div>
    )
}

export default Barcallories;