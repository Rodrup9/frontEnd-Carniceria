import { supabase } from "../supabaseClient";

export const ButtonLogout = ({ label = 'Cerrar Sesión' }) => {

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };

    return (
        <button
            className="btn buttonLogout"
            onClick={handleLogout}
        >
            <i className='bx bx-log-out'></i>
            <span className="btn-text">{label}</span>
        </button>
    );
};
