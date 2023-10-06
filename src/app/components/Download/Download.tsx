import style from './Download.module.css';

export default function Download({link}:any) {
    return(
        <div className={style.DownloadMain} >
            <a href={link}>
                <button>Descargar</button>
            </a>
        </div>
    );
}