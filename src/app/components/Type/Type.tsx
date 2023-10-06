import style from "./Type.module.css"

export default function Type({version, platform, price}: any) {
    return(
        <div className={style.TypeMain}>
            <h3>- version: <samp>{version}</samp></h3>
            <h3>- plataforma: <samp>{platform}</samp></h3>
            <h3>- precio: <samp>{price}</samp></h3>
        </div>
    );
}