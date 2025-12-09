import React, { useState } from 'react';
import { Player, Role } from './types';
import { MOCK_PLAYERS, MOCK_EVENTS } from './constants';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Performance from './components/Performance';
import Schedule from './components/Schedule';
import AiCoach from './components/AiCoach';
import { LogIn } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<Role | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Default to first player for demo purposes if role is PLAYER
  const currentUser: Player = MOCK_PLAYERS[1]; // Yousri Bouzok

  const handleLogin = (selectedRole: Role) => {
    setRole(selectedRole);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setRole(null);
  };

  // Login Screen
  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-raja-dark to-raja-green flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl text-center">
            <div className="w-24 h-24 bg-raja-green rounded-full mx-auto flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                <span className="text-white text-3xl font-bold">RCA</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Portail Raja Connect</h1>
            <p className="text-gray-500 mb-8">Plateforme de performance et gestion intelligente</p>

            <div className="space-y-4">
                <button 
                    onClick={() => handleLogin(Role.PLAYER)}
                    className="w-full py-4 px-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-between group transition-all"
                >
                    <div className="text-left">
                        <span className="block font-bold text-gray-800 group-hover:text-raja-green">Espace Joueur</span>
                        <span className="text-sm text-gray-400">Accéder aux stats et programme</span>
                    </div>
                    <LogIn className="text-gray-300 group-hover:text-raja-green" />
                </button>

                <button 
                    onClick={() => handleLogin(Role.STAFF)}
                    className="w-full py-4 px-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-between group transition-all"
                >
                    <div className="text-left">
                        <span className="block font-bold text-gray-800 group-hover:text-raja-green">Espace Staff</span>
                        <span className="text-sm text-gray-400">Gestion d'équipe et analyse</span>
                    </div>
                    <LogIn className="text-gray-300 group-hover:text-raja-green" />
                </button>
            </div>
            
            <p className="mt-8 text-xs text-gray-400">© 2024 Raja Club Athletic. Tous droits réservés.</p>
        </div>
      </div>
    );
  }

  // Main App Layout
  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Sidebar 
        currentRole={role} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout}
      />
      
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && (
                <Dashboard user={currentUser} role={role} events={MOCK_EVENTS} />
            )}
            
            {activeTab === 'performance' && (
                role === Role.PLAYER ? <Performance player={currentUser} /> : <div className="text-center py-20 text-gray-500">Sélectionnez un joueur pour voir les performances (Demo: Connectez-vous en tant que Joueur)</div>
            )}

            {activeTab === 'schedule' && (
                <Schedule events={MOCK_EVENTS} />
            )}

            {activeTab === 'ai-coach' && (
                role === Role.PLAYER ? <AiCoach player={currentUser} /> : <div className="text-center py-20 text-gray-500">Mode Staff: Utilisez l'IA pour générer des rapports tactiques globaux (À venir)</div>
            )}
            
            {activeTab === 'roster' && (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {MOCK_PLAYERS.map(p => (
                    <div key={p.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <img src={p.avatar} alt={p.name} className="w-16 h-16 rounded-full object-cover" />
                        <div>
                            <h3 className="font-bold text-gray-800">{p.name}</h3>
                            <p className="text-sm text-gray-500">{p.position}</p>
                            <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${p.healthStatus === 'Fit' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {p.healthStatus}
                            </span>
                        </div>
                    </div>
                 ))}
               </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default App;