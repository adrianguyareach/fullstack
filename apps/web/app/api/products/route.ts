export async function GET (request: Request){
    const generateArray = (n: number): number[] => Array.from({ length: n }, (_, index) => index + 1);
    const number: number = 5;
    const resultArray: number[] = generateArray(number);
    
    return new Response(JSON.stringify(resultArray))
}
