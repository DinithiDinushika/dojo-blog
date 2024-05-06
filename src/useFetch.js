import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     //useEffect run everytime it renders.     
    useEffect(() =>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch data for that resource')

                }
                return res.json();
            })
            .then(data =>{
                
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);

                }
              
            })

        }, 1000);

        return () => abortCont.abort();
        
     
    }, [url]);
    // [] tells that run useEffect only in the initial render

    return { data, isPending, error}
}

export default useFetch;