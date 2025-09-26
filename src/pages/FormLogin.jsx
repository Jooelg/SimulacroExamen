import { useState } from "react";
import { useUserContext } from "../components/UserContext";
import { Link, Navigate } from "react-router-dom";

function FormLogin() {
    const { login, isLoggedIn } = useUserContext();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (login(formData.email, formData.password)) {
          setMessage({ text: '¡Inicio de sesión exitoso!', type: 'success' });
            
        } else {
            setMessage({ text: 'Email o contraseña incorrectos.', type: 'error' });
        }
    };

    if (isLoggedIn) {
      return (
        <div className="flex min-h-dvh flex-col justify-center bg-gray-100 py-20 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">¡Bienvenido de vuelta!</h2>
            <p className="text-xl mt-4">Has iniciado sesión correctamente.</p>
              <Navigate to="/" replace />
          </div>
        </div>
      );
    }

    return (
        <div className="flex min-h-dvh flex-col justify-center bg-gray-100 py-20 px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    alt="WellFit Logo"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Inicia sesión en tu cuenta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-lg shadow-lg">
                {message.text && (
                    <div className={`p-4 rounded-md mb-4 text-center text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {message.text}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Contraseña
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer no-underline">
                                    ¿Olvidaste la contraseña?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    ¿No eres miembro?{' '}
                    <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 no-underline">
                        Crea una cuenta gratis
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default FormLogin;