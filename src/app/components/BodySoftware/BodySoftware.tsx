import style from './style.module.css';

export default function BodySoftware({children}: React.PropsWithChildren<any>) {
    return(
        <div className={style.BodySoftwareRender} >
            <div className={style.BodySoftwareMain}>
                {children}
            </div>
        </div>
    );
}