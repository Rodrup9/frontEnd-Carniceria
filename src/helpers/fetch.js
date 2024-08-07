import { useContext } from "react";
import { MetContext } from "../components/context/metContext";



export const useFetch = async () => {

    const { setAmount } = useContext( MetContext )

    const getWeight = async () => {

        const resp = await fetch('');

        const data = await resp.json();

        // setAmount( '' );

        console.log(data);

        return data;
    }

    

    return {
        getWeight,
    };

}