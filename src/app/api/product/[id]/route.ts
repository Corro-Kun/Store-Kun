import {NextResponse} from "next/server";
import {data} from "./../../data";

export function GET(request: any,{params}:{params:{id:string}}){
    const {id} = params;
    const product = data.find((product)=>product.id === Number(id));
    return NextResponse.json(product);
}