import { useContext } from "react";
import { MetContext } from "./context/metContext";
import { Alert } from "./Alert";

export const ContentAlerts = () => {

    const { alert } = useContext( MetContext );

    return (
        <div className="contentAlerts">
            {
                alert.map( a => <Alert key={a.id} data={a} /> )
            }
        </div>
    )
}
