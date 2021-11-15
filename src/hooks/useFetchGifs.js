import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );

    useEffect(() => {

        setTimeout(() => {
            getGifs(category)
                .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                })
        }, 2000)
        //forma corta
        // .then( imgs => setImages(imgs) ) //forma larga

    }, [category])


    return state;

}