import style from "./Images.module.css";

export default function Images({Imagenes}: {Imagenes: string[]}){
    return(
        <div className={style.ImagesDivMain} >
            <button>Atrás</button>
            <div>
                <img src={Imagenes[0]} alt="Imágenes" loading="lazy" />
            </div>
            <button>Siguiente</button>
        </div>
    );
}