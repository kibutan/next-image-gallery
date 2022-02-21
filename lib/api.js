const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

export const getCuratedPhotos = async() =>{
    console.log("Api Key:",API_KEY);
    const res = await fetch(
        `https://api.unsplash.com/photos?page=4`,
        {
            headers:{
                Authorization:API_KEY
            }
        
    });
    console.log("res",res);
    const responseJson = await res.json();
    console.log("Res[0]------------------------------------------------------",responseJson)
    return responseJson;
}