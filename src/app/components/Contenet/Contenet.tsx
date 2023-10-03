import Box from "../Box/Box";
import Style from "./style.module.css"

export default function Content() {
    return(
        <div className={Style.Main}>
            <h2 className={Style.Title} >Programas</h2>
            <div className={Style.Contenet}>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    );
}