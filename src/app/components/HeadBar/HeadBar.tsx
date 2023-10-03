import Style from './Style.module.css';

function HeadBar(){
    return(
        <div className={Style.Bar} >
            <div className={Style.ContenetBar} >
                <p>descarga estos proyectos</p>
            </div>
            <div className={Style.ContenetBar} >
                <input type="text" placeholder='Buscar...' />
            </div>
            <div className={Style.ContenetBar} >
                <div className={Style.Logo} >
                    <img src="https://res.cloudinary.com/daqrkk4sr/image/upload/v1696292853/store-kun/vrjw50i4gecqm8nwgu0k.png" loading='lazy'/>
                    <p>Corro-Kun</p>
                </div>
            </div>
        </div>
    );
}

export default HeadBar;