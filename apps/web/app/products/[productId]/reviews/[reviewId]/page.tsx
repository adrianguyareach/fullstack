export default function ReviewDetail (
    {params}:{
    params:{
        productId:string,
        reviewId:string
    }
    }
){
    return <h1>Review {params.reviewId} for page {params.productId} </h1>
}