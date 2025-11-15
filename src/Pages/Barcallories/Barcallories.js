import style from './Barcallories.module.css'
function Barcallories() {
    return (
        <div className={style.container}>

            <div className={style.kotak}>
                <div className={style.kotakkiri}></div>
                <div className={style.kotakkanan}></div>

            </div>
            <div className={style.kotakpersen}>
                <div className={style.kotak1}> </div>
                <div className={style.kotak1}> </div>
                <div className={style.kotak1}> </div>
            </div>


            <h1>ini halaman Barcallories</h1>
        </div>
    )
}

export default Barcallories;