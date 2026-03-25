import { BoxMain } from "./BoxMain";
import { NavMain } from "./NavMain";
import { useContext, useState, useEffect } from "react";
import { ContentMet } from "./ContentMet";
import { fetchProducts } from "../mets";
import { MetContext } from "./context/metContext";
import { Loading } from "./Loading";
import { ContentAlerts } from './ContentAlerts';
import { supabase } from '../supabaseClient';
import { Login } from './Login';

export const MainMain = () => {

    const { screenMet, loading, setKg, setPiece, setShow } = useContext(MetContext)
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    const [mets, setMets] = useState([]);

    useEffect(() => {
        if (session) {
            fetchProducts().then(res => {
                const fetchedMets = res.mets || [];
                const fetchedPiece = res.metsPiece || [];
                setMets(fetchedMets);
                setKg(fetchedMets);
                setPiece(fetchedPiece);
                setShow(fetchedMets);
            });
        } else {
            setMets([]);
            setKg([]);
            setPiece([]);
            setShow([]);
        }
    }, [session])

    if (!session) {
        return <Login />
    }

    return (
        <>
            {
                loading && <Loading />
            }

            <ContentAlerts />

            {
                screenMet && <ContentMet mets={mets} />
            }

            <NavMain />
            <BoxMain />
        </>
    )
}
