import Style from "./style.module.css"
import Link from "next/link"

export default function Box({title, description, platform, image, price, id}:any) {
    return(
        <Link href={"/software/"+ id} className={Style.TextD} >
            <div className={Style.Box} >
                <img src="https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg" alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={Style.Render} >
                    <h3>{platform}</h3>
                    <h3>{price}</h3>
                </div>
            </div>
        </Link>
    );
}