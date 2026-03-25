import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Cargar credenciales guardadas al montar el componente
    useEffect(() => {
        const savedEmail = localStorage.getItem('remember_email')
        const savedPassword = localStorage.getItem('remember_password')
        if (savedEmail && savedPassword) {
            setEmail(savedEmail)
            setPassword(savedPassword)
            setRememberMe(true)
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            setError('Credenciales incorrectas. Por favor, intenta de nuevo.')
        } else {
            // Si el login es exitoso y "Recordarme" está marcado, guardamos
            if (rememberMe) {
                localStorage.setItem('remember_email', email)
                localStorage.setItem('remember_password', password)
            } else {
                localStorage.removeItem('remember_email')
                localStorage.removeItem('remember_password')
            }
        }
        setLoading(false)
    }

    return (
        <div className="loginContainer">
            <div className="loginBox">
                <h2>Carnicería Dayikeynes</h2>
                <form onSubmit={handleLogin} className="loginForm">
                    <div className="loginField">
                        <label>Correo Electrónico</label>
                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="loginField">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <label className="rememberMe">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Recordarme
                    </label>

                    {error && <div className="loginError">{error}</div>}

                    <button type="submit" disabled={loading} className="btnLogin">
                        {loading ? 'Iniciando sesión...' : 'Entrar al Sistema'}
                    </button>
                </form>
            </div>
        </div>
    )
}

