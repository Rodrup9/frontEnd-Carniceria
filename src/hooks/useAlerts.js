import { useContext } from "react";
import { MetContext } from "../components/context/metContext";

export const useAlerts = () => {

    const { alert, setAlert } = useContext( MetContext );

    const addAlert = ( message, type ) => {
        const newAlert = {
            id: new Date().getTime(),
            message,
            type,
        }
        setAlert([ newAlert, ...alert ]);
    }

    const removeAlert = (id) => {
        const rest = alert.filter( a => a.id !== id );
        setAlert( rest );
    }

    return {
        addAlert,
        removeAlert,
    }
}
