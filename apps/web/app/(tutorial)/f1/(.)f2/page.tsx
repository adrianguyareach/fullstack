import Link from "next/link"
export default function InterceptedF2 (){
    return (
        <>
            <h1>(.)Intercepted F2 Page</h1>
            <div>
               <Link href='/f1'>F1</Link> 
            </div>
        </>
    )
}