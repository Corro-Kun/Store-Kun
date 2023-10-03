import Style from "./style.module.css";

export default function Category() {
    return(
        <div >
            <h2>Categorías</h2>
            <div className={Style.Buttons} >
                <button style={{backgroundColor: "var(--Color_Main)", color: "#fff", border: "none"}} >Todo</button>
                <button>Pc</button>
                <button>Android</button>
            </div>
        </div>
    );   
}