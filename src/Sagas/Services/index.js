export async function createRecord(collection,payload) {
    try {
        let response=await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}${collection   }`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({...payload})
        })
        response=await response.json()
        return response
    } catch (error) {
        console.log(error);
        
    }
}
export async function createMultiRecord(collection,payload) {
    try {
        let response=await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}${collection}`,{
            method:"POST",
            headers:{
            },
            body:payload
        })
        response=await response.json()
        return response
    } catch (error) {
        console.log(error);
        
    }
}

export async function getRecord(collection) {
    try {
        let response= await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}${collection}`,{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
        response=await response.json()
        return response
    } catch (error) {
        console.log(error);
    }
}
export async function updateRecord(collection,payload) {
    try {
        let response=await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}${collection}/${payload.id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({...payload})
        })
        response=await response.json()
        return response
    } catch (error) {
        console.log(error);
        
    }
}
export async function updateMultiRecord(collection,payload) {
    try {
        let response=await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}${collection}/${payload.get("_id")}`,{
            method:"PUT",
            headers:{
            },
            body:payload
        })
        response=await response.json()
        return response
    } catch (error) {
        console.log(error);
        
    }
}
export async function deleteRecord(collection,payload) {
    try {
        let response=await fetch(`${import.meta.env.VITE_SITE_BACKEND_SERVER}${collection}/${payload.id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        response=await response.json()
        return response
    } catch (error) {
        console.log(error);
        
    }
}
