import Box from "../Box/Box";
import Style from "./style.module.css"


function FetchData() {
    return fetch('api/list')
        .then(response => response.json());
}
interface Product{
    id: number,
    title: string,
    description: string,
    platform: string,
    image: string,
    price: number,
}
export default async function Content() {
    const datas:Product[] = await FetchData();
    return(
        <div className={Style.Main}>
            <h2 className={Style.Title} >Programas</h2>
            <div className={Style.Contenet}>
                {
                    datas.map((item,i) => <Box
                    id={item.id} 
                    title={item.title} 
                    description={item.description}
                    platform={item.platform}
                    image={item.image}
                    price={item.price}
                    key={i} 
                    /> )
                }
            </div>
            <div className={Style.Pages} >
                <button>1</button>
            </div>
        </div>
    );
}