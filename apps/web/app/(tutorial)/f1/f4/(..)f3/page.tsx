import Link from "next/link"
export default function InterceptedF3 (){
    return (
        <>
            <h1>Intercepted F3</h1>
            <div>
               <Link href='/f1'>F1</Link> 
            </div>
        </>
    )
}