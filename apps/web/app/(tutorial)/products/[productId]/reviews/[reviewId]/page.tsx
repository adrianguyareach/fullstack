"use client"
import { notFound } from "next/navigation"

type TParams = {
    params:{
        productId:string,
        reviewId:string
    }
    }


function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail (
    {params}:TParams
){

    const random = getRandomInt(2)

    if (random===1){
        throw new Error("Something went wrong")
    }
    if (parseInt(params.reviewId) > 10){
        notFound()
    }
    return <h1>Review {params.reviewId} for page {params.productId} </h1>
}