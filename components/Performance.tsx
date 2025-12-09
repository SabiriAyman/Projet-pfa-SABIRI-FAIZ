import React from 'react';
import { Player } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

interface PerformanceProps {
  player: Player;
}

const Performance: React.FC<PerformanceProps> = ({ player }) => {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-end">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Performances</h2>
                <p className="text-gray-500">Analyse des 5 derniers matchs de {player.name}</p>
            </div>
            <div className="px-4 py-2 bg-raja-light/10 text-raja-dark rounded-lg font-medium border border-raja-light/20">
                Note Moyenne: <span className="font-bold text-lg">7.8</span>
            </div>
       </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distance Covered Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-700 mb-4">Distance Parcourue (km)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={player.stats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="opponent" tick={{fontSize: 12}} />
                <YAxis />
                <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    cursor={{fill: '#f3f4f6'}}
                />
                <Bar dataKey="distanceKm" fill="#006233" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rating Trend */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-700 mb-4">Note du Match /10</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={player.stats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="opponent" tick={{fontSize: 12}} />
                <YAxis domain={[0, 10]} />
                <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Line 
                    type="monotone" 
                    dataKey="rating" 
                    stroke="#c8102e" 
                    strokeWidth={3} 
                    dot={{fill: '#c8102e', r: 4, strokeWidth: 2, stroke: '#fff'}} 
                    activeDot={{r: 6}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Technical Stats */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-700 mb-4">Précision des Passes (%)</h3>
             <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={player.stats}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="opponent" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}/>
                    <Legend />
                    <Line type="monotone" dataKey="passAccuracy" name="Passes Réussies %" stroke="#008544" strokeWidth={3} />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;