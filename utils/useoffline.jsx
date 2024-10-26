import { useEffect, useState } from "react"

const useoffline=() =>{
    const [useronline,setuseronline]=useState(true);

    useEffect(()=>{

        window.addEventListener("online",()=>{
            setuseronline(true);
        });
    
        window.addEventListener("offline",()=>{
            setuseronline(false);
        })
    
    },[])

    return useronline;
}

export default useoffline
