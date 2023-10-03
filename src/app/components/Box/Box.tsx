import Style from "./style.module.css"
import Image from "next/image"

export default function Box() {
    return(
        <div className={Style.Box} >
            <img src="https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg" alt="" />
            <div>
                <h2>Nombre del producto</h2>
                <p>descripcion general de lo que es el producto que esta en esta pagina</p>
            </div>
            <div className={Style.Render} >
                <h3>Plataforma</h3>
                <h3>free</h3>
            </div>
        </div>
    );
}