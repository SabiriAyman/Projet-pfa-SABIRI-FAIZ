import React from 'react';
import { NavItem, Role } from '../types';
import { LayoutDashboard, Calendar, Activity, Bot, Users, LogOut } from 'lucide-react';

interface SidebarProps {
  currentRole: Role;
  activeTab: string;
  setActiveTab: (id: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentRole, activeTab, setActiveTab, onLogout }) => {
  
  const items: NavItem[] = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: LayoutDashboard },
    { id: 'schedule', label: 'Calendrier', icon: Calendar },
    { id: 'performance', label: 'Performances', icon: Activity },
    { id: 'ai-coach', label: 'Coach IA', icon: Bot },
  ];

  if (currentRole === Role.STAFF) {
    // Add staff specific items if needed, or reorder
    // For demo, we keep same structure but could add "Player Management"
    items.splice(1, 0, { id: 'roster', label: 'Effectif', icon: Users });
  }

  return (
    <div className="w-64 bg-raja-dark text-white h-screen flex flex-col shadow-2xl fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3 border-b border-raja-green">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-raja-green font-bold text-xl">
            RCA
        </div>
        <h1 className="text-xl font-bold tracking-tight">Raja Connect</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-raja-green text-white shadow-lg translate-x-1' 
                  : 'text-gray-300 hover:bg-raja-green/50 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-raja-green">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="text-sm text-gray-400">
                Connecté en tant que <br/>
                <span className="font-bold text-white">{currentRole === Role.PLAYER ? 'Joueur' : 'Staff Technique'}</span>
            </div>
        </div>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-red-300 hover:text-red-100 hover:bg-red-900/30 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;