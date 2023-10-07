import Box from "../Box/Box";
import Style from "./style.module.css"


function FetchData() {
    return fetch('https://store-kun.vercel.app/api/list')
        .then(response => response.json())
        .catch(err => console.log(err));
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
                    datas && datas.length > 0 ? 
                    datas.map((item,i) => <Box
                        id={item.id} 
                        title={item.title} 
                        description={item.description}
                        platform={item.platform}
                        image={item.image}
                        price={item.price}
                        key={i} 
                    /> ) : "No hay datos"
                }
            </div>
            <div className={Style.Pages} >
                <button>1</button>
            </div>
        </div>
    );
}