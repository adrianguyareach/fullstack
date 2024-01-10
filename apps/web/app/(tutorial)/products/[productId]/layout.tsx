export default function ProductDetailsLayout({
    children}:{
        children: React.ReactNode;
    }) {
    return (
        <>
         <h2>Features products</h2>
            {children}
           
        </>
    )
}