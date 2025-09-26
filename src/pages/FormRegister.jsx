import { useState } from "react";
import { useUserContext } from "../components/UserContext";
import { Link } from "react-router-dom";

const initialFormData = {
  firstName: '',
  lastName: '',
  age: '',
  weight: '',
  height: '',
  email: '',
  password: '',
  gender: '',
  experience: ''
};

function RegisterForm() {
  const { users, addUser } = useUserContext();
  const [formData, setFormData] = useState(initialFormData);
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

    const requiredFields = ['firstName', 'lastName', 'age', 'weight', 'height', 'email', 'password', 'gender', 'experience'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setMessage({ text: `Por favor, complete el campo: ${field}`, type: 'error' });
        return;
      }
    }

    if (users.some(user => user.email === formData.email)) {
      setMessage({ text: 'Este email ya está registrado.', type: 'error' });
      return;
    }

    try {
      addUser(formData);
      setFormData(initialFormData);
      setMessage({ text: '¡Registro exitoso! Los datos se han guardado.', type: 'success' });
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      setMessage({ text: 'Hubo un error al intentar registrar el usuario. Por favor, inténtelo de nuevo.', type: 'error' });
    }
  };

  return (
    <div className="flex min-h-dvh flex-col justify-center bg-gray-100 py-20 px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="WellFit Logo"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Crea tu cuenta de WellFit
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-lg shadow-lg">
        {message.text && (
            <div className={`p-4 rounded-md mb-4 text-center text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                {message.text}
            </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                Edad
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm/6 font-medium text-gray-900">
                Peso (kg)
              </label>
              <div className="mt-2">
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  required
                  value={formData.weight}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="height" className="block text-sm/6 font-medium text-gray-900">
                Altura (cm)
              </label>
              <div className="mt-2">
                <input
                  id="height"
                  name="height"
                  type="number"
                  required
                  value={formData.height}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                />
              </div>
            </div>
          </div>

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
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                Género
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                >
                  <option value="" disabled>Selecciona...</option>
                  <option value="male">Hombre</option>
                  <option value="female">Mujer</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm/6 font-medium text-gray-900">
                Experiencia
              </label>
              <div className="mt-2">
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 sm:leading-6"
                >
                  <option value="" disabled>Selecciona...</option>
                  <option value="beginner">Principiante</option>
                  <option value="intermediate">Intermedio</option>
                  <option value="advanced">Avanzado</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Registrarse
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 no-underline">
              Iniciar Sesión
            </Link>
          </p>
      </div>
    </div>
  );
}

export default RegisterForm;