import { useEffect } from "react";
import { useAlerts } from "../hooks/useAlerts";

export const Alert = ({ data }) => {

    const { removeAlert } = useAlerts();

    useEffect(() => {

        console.log(data.id);
        
        const timer = setTimeout(() => {
            removeAlert(data.id);
        }, 1000);

        console.log('Error')

        return () => clearTimeout(timer);
    
    }, [data.id, removeAlert])
    

    return (
        <div className={ `alert ${data.type}` }>
            { data.message }
        </div>
    )
}
