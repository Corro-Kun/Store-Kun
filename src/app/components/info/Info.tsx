import style from './style.module.css'

export default function Info({name, description, image}: any){
    return(
        <div className={style.InfoFristMain}>
            <div className={style.InfoFristMainDiv1} >
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className={style.InfoFristMainDiv2} >
                <div className={style.InfoFristMainImg}>
                    <img loading='lazy' src={image} alt="imagen" />
                </div>
            </div>
        </div>
    )
}