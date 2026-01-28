
import React from 'react';
import { PencilIcon, CheckCircleIcon } from './icons';

interface AdminToggleProps {
  isEditing: boolean;
  onToggle: () => void;
}

const AdminToggle: React.FC<AdminToggleProps> = ({ isEditing, onToggle }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
        className={`flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 ${
          isEditing ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
        }`}
        aria-label={isEditing ? 'Salir del modo edición' : 'Entrar al modo edición'}
      >
        {isEditing ? <CheckCircleIcon className="h-8 w-8" /> : <PencilIcon className="h-8 w-8" />}
      </button>
      <div className={`absolute -top-10 right-0 p-2 text-xs text-white rounded-md shadow-md transform transition-opacity ${isEditing ? 'bg-green-600' : 'bg-blue-600'}`}>
        {isEditing ? 'Modo Edición' : 'Editar Info'}
      </div>
    </div>
  );
};

export default AdminToggle;
