import React from 'react';
import { CalendarEvent } from '../types';
import { Calendar as CalendarIcon, MapPin, Clock, Video, Activity, HeartPulse } from 'lucide-react';

interface ScheduleProps {
  events: CalendarEvent[];
}

const Schedule: React.FC<ScheduleProps> = ({ events }) => {
  const getIcon = (type: CalendarEvent['type']) => {
    switch (type) {
        case 'Match': return <Activity className="text-red-500" />;
        case 'Training': return <Activity className="text-green-500" />;
        case 'Meeting': return <Video className="text-blue-500" />;
        case 'Medical': return <HeartPulse className="text-pink-500" />;
        default: return <CalendarIcon className="text-gray-500" />;
    }
  };

  const getTypeStyle = (type: CalendarEvent['type']) => {
    switch (type) {
        case 'Match': return 'bg-red-50 border-red-100 text-red-700';
        case 'Training': return 'bg-green-50 border-green-100 text-green-700';
        case 'Meeting': return 'bg-blue-50 border-blue-100 text-blue-700';
        case 'Medical': return 'bg-pink-50 border-pink-100 text-pink-700';
        default: return 'bg-gray-50 border-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Calendrier de l'équipe</h2>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
            Télécharger PDF
        </button>
       </div>

       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {events.map((event, index) => (
            <div key={event.id} className={`p-6 flex flex-col md:flex-row md:items-center gap-6 ${index !== events.length -1 ? 'border-b border-gray-100' : ''}`}>
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 shrink-0">
                    <span className="text-xs text-gray-500 font-bold uppercase">{new Date(event.date).toLocaleDateString('fr-FR', {month: 'short'})}</span>
                    <span className="text-2xl font-bold text-gray-800">{new Date(event.date).getDate()}</span>
                </div>

                <div className="flex-1">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${getTypeStyle(event.type)}`}>
                        {getIcon(event.type)}
                        {event.type === 'Match' ? 'Match Officiel' : event.type}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {event.location}
                        </div>
                    </div>
                </div>

                <button className="px-4 py-2 text-sm font-medium text-raja-green hover:bg-raja-green/10 rounded-lg transition-colors">
                    Détails
                </button>
            </div>
        ))}
       </div>
    </div>
  );
};

export default Schedule;