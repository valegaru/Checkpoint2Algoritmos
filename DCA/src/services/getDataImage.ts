export async function getDataImage(joinedwords:string){
    try {
        const data= await fetch('https://cataas.com/cat/says/'+ joinedwords).then(res=>res.url)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}