import BodySoftware from "@/app/components/BodySoftware/BodySoftware";
import Download from "@/app/components/Download/Download";
import Images from "@/app/components/Images/Images";
import Type from "@/app/components/Type/Type";
import Info from "@/app/components/info/Info";

function FetchData(id: number){
    return fetch(`http://localhost:3000/api/product/${id}`)
        .then(response => response.json());
}

interface Product{
    title: string,
    logo: string,
    info: string,
    images: string[]
    version: string,
    platform: string,
    price: string
    download: string
}

export default async function Main({params}: any) {
    const {number} = params;
    const data:Product = await FetchData(number);
    return(
        <BodySoftware>
            <Info
            name={data.title}
            description={data.info} 
            image={data.logo} />
            <Images Imagenes={data.images}/>
            <Type version={data.version} platform={data.platform} price={data.price} />
            <Download link={data.download} />
        </BodySoftware>
    );
}

function nextImage(){
    console.log("Siguiente");
}