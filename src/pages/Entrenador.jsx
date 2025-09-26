import React, { useState } from 'react';
import { useUserContext } from "../components/UserContext"; // Se mantiene la ruta original
import InfoBox from '../components/InfoBox';
import { Navigate } from 'react-router-dom';

function Entrenador() {
  const { users, isLoggedIn } = useUserContext();

  const [selectedUserId, setSelectedUserId] = useState(null);

  const selectedUser = users.find(user => String(user.id) === selectedUserId);

  const handleUserChange = (event) => {
    const value = event.target.value;
    setSelectedUserId(value !== 'default' ? value : null);
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-4 pt-16 md:p-10 md:pt-20 min-h-dvh bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Página de Entrenador</h1>
      <p className="text-gray-600 mb-8">Aquí puedes gestionar tus entrenamientos y clientes.</p>

      <select 
        onChange={handleUserChange} 
        value={selectedUserId || 'default'}
        className="block w-full md:w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-10 text-gray-700 font-semibold"
      >
        <option value="default" disabled>Selecciona un usuario</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </option>
        ))}
      </select>

      {selectedUser ? (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            Información de {selectedUser.firstName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoBox label="Email" value={selectedUser.email} />
            <InfoBox label="Edad" value={`${selectedUser.age || 'N/A'} años`} />
            <InfoBox label="Género" value={selectedUser.gender || 'N/A'} />
            <InfoBox label="Peso" value={`${selectedUser.weight || 'N/A'} kg`} />
            <InfoBox label="Altura" value={`${selectedUser.height || 'N/A'} cm`} />
            <InfoBox label="Experiencia" value={selectedUser.experience || 'N/A'} />
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-500 p-4 border-l-4 border-indigo-400 bg-indigo-50 rounded">
          Por favor, selecciona un cliente para ver sus detalles.
        </p>
      )}
    </div>
  );
}


export default Entrenador;
