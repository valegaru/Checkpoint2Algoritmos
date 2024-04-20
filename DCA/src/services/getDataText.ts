export async function getDataText(){
    try {
        const data= await fetch('https://catfact.ninja/fact').then(res=>res.json())
        console.log(data)
        return data.fact
    } catch (error) {
        console.error(error)
    }
}