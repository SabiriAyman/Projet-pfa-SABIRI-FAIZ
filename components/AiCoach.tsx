import React, { useState } from 'react';
import { Player } from '../types';
import { analyzePlayerPerformance } from '../services/geminiService';
import { Bot, Loader2, Sparkles, ChevronRight } from 'lucide-react';

interface AiCoachProps {
  player: Player;
}

const AiCoach: React.FC<AiCoachProps> = ({ player }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalysis = async () => {
    setLoading(true);
    const result = await analyzePlayerPerformance(player);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-raja-green to-emerald-400 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg mb-4">
            <Bot size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Assistant Technique IA</h2>
        <p className="text-gray-500 mt-2">Propulsé par Google Gemini 2.5 Flash</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <img src={player.avatar} alt={player.name} className="w-16 h-16 rounded-full object-cover border-2 border-raja-green" />
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">{player.name}</h3>
                        <p className="text-sm text-gray-500">{player.position} • #{player.number}</p>
                    </div>
                </div>
                
                <button
                    onClick={handleAnalysis}
                    disabled={loading}
                    className="group bg-raja-dark hover:bg-raja-green text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-raja-green/30"
                >
                    {loading ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Analyse en cours...
                        </>
                    ) : (
                        <>
                            <Sparkles size={20} />
                            Générer l'Analyse IA
                        </>
                    )}
                </button>
            </div>
        </div>

        <div className="p-8 bg-gray-50 min-h-[300px]">
            {analysis ? (
                <div className="prose prose-emerald max-w-none">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-1 w-8 bg-raja-green rounded-full"></div>
                        <h4 className="text-raja-green font-bold uppercase tracking-wider text-sm">Rapport de l'IA</h4>
                    </div>
                    {/* Render basic markdown formatting manually since we don't have a markdown library installed in this environment, or just plain text with line breaks */}
                    <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                        {analysis}
                    </div>
                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-gray-400">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <Sparkles size={24} className="text-gray-400" />
                    </div>
                    <p className="text-lg font-medium">L'IA attend vos données.</p>
                    <p className="text-sm mt-2 max-w-md">Cliquez sur le bouton pour analyser les statistiques récentes, la forme physique et obtenir des conseils personnalisés.</p>
                </div>
            )}
        </div>
      </div>
      
      {/* Sample Prompt Suggestions (Static) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-raja-green transition-colors cursor-pointer group">
            <h4 className="font-bold text-gray-700 mb-1 flex items-center justify-between">
                Préparation mentale
                <ChevronRight size={16} className="text-gray-400 group-hover:text-raja-green transition-colors"/>
            </h4>
            <p className="text-sm text-gray-500">Comment gérer la pression avant le derby contre le Wydad ?</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-raja-green transition-colors cursor-pointer group">
            <h4 className="font-bold text-gray-700 mb-1 flex items-center justify-between">
                Récupération
                <ChevronRight size={16} className="text-gray-400 group-hover:text-raja-green transition-colors"/>
            </h4>
            <p className="text-sm text-gray-500">Meilleure nutrition après un match intense de 90 minutes.</p>
        </div>
      </div>
    </div>
  );
};

export default AiCoach;