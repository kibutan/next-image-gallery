const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

export const getCuratedPhotos = async() =>{
    // console.log("Api Key:",API_KEY);
    const res = await fetch(
        `https://api.unsplash.com/photos?page=4`,
        {
            headers:{
                Authorization:API_KEY
            }
    });
    // console.log("res",res);
    const responseJson = await res.json();
    // console.log("Res[0]------------------------------------------------------",responseJson)
    return responseJson;
}

export const getQueryPhotos = async (query) => {
    // console.log("Query???????????????????????????????",query,`https://api.unsplash.com/search/photos?&query=${query}`);
    const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}`,
        {
            headers:{
                Authorization:API_KEY
            }
        });
        // console.log("search result!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",res)
        const responseJson = await res.json();
        // console.log("search result!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",responseJson)

    return responseJson;
}

export const getPhotoById = async (id) =>{
    const res = await fetch(
        `https://api.unsplash.com/photos/${id}`,
        {
            headers:{
                Authorization:API_KEY
            }
        });
    // console.log("search result!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",res)
    const responseJson = await res.json();
    // console.log("search result!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",responseJson)
    return responseJson;
}