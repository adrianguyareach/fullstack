export default function ProductDetails(
    {params}:{
        params:{productId:string}
    }
){
    return <h1>Defailts about product {params.productId}</h1>
}