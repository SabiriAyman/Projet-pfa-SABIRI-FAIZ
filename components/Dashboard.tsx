import React from 'react';
import { Player, Role, CalendarEvent } from '../types';
import { Bell, Trophy, ArrowUpRight, Clock } from 'lucide-react';

interface DashboardProps {
  user: Player | null; // Null if staff (generic view)
  role: Role;
  events: CalendarEvent[];
}

const Dashboard: React.FC<DashboardProps> = ({ user, role, events }) => {
  const nextEvent = events.length > 0 ? events[0] : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Bonjour, {role === Role.PLAYER ? user?.name : 'Coach'} 👋
          </h2>
          <p className="text-gray-500">Prêt pour les défis d'aujourd'hui ? Dima Raja !</p>
        </div>
        <div className="relative">
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
            <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                <Bell size={24} />
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Next Event Card */}
        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-raja-green to-raja-dark rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 opacity-90">
                    <Clock size={18} />
                    <span className="font-semibold tracking-wide text-sm uppercase">Prochain Événement</span>
                </div>
                
                {nextEvent ? (
                    <div>
                        <h3 className="text-3xl font-bold mb-2">{nextEvent.title}</h3>
                        <div className="flex gap-4 text-emerald-100 mt-4">
                            <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                                {new Date(nextEvent.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </span>
                            <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                                {nextEvent.time}
                            </span>
                            <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">
                                {nextEvent.location}
                            </span>
                        </div>
                    </div>
                ) : (
                    <p>Aucun événement prévu.</p>
                )}
            </div>
        </div>

        {/* Quick Stats / Status */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
                <h3 className="text-gray-500 font-medium mb-1">État de forme</h3>
                <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    {role === Role.PLAYER ? user?.healthStatus : 'Effectif: 95%'}
                    <span className="text-sm font-normal px-2 py-1 bg-green-100 text-green-700 rounded-full">Fit</span>
                </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-gray-500 font-medium mb-3">Dernier Match</h3>
                <div className="flex justify-between items-center">
                    <div className="font-bold text-gray-800">2 - 0</div>
                    <div className="text-sm text-gray-500">vs RS Berkane</div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Trophy size={16} />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Notifications / Feed */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <ArrowUpRight size={20} className="text-raja-green"/>
            Actualités & Annonces
        </h3>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl flex gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Trophy size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">Victoire importante à l'extérieur</h4>
                    <p className="text-sm text-gray-600 mt-1">Le président félicite toute l'équipe pour la performance contre Berkane. Prime de match versée demain.</p>
                    <span className="text-xs text-gray-400 mt-2 block">Il y a 2 heures</span>
                </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-xl flex gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-800">Changement d'horaire d'entraînement</h4>
                    <p className="text-sm text-gray-600 mt-1">La séance de demain est décalée à 17h00 en raison de la chaleur prévue.</p>
                    <span className="text-xs text-gray-400 mt-2 block">Il y a 5 heures</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;