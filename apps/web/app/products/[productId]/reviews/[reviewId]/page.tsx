import { notFound } from "next/navigation"

export default function ReviewDetail (
    {params}:{
    params:{
        productId:string,
        reviewId:string
    }
    }
){

    if (parseInt(params.reviewId) > 10){
        notFound()
    }
    return <h1>Review {params.reviewId} for page {params.productId} </h1>
}