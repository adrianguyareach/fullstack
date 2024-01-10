"use client"

type TError = {
    error: Error
    reset: () => void
}
export default function ErrorBoundary({error, reset}: TError){
    return <div>{error.message}<button onClick={reset}>Try Again</button></div>
}