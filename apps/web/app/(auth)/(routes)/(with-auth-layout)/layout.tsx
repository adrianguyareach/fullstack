export default function AuthLayout({
    children}:{
        children: React.ReactNode;
    }) {
    return (
        <>
            <h2>Auth layout</h2>
                {children}
            <h2>Auth layout end</h2>   
        </>
    )
}