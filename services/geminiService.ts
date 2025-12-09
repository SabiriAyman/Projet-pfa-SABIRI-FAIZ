import { GoogleGenAI } from "@google/genai";
import { Player } from '../types';

// Initialize Gemini
// NOTE: Process.env.API_KEY is handled by the environment provided by the user.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzePlayerPerformance = async (player: Player): Promise<string> => {
  try {
    const statsSummary = JSON.stringify(player.stats);
    
    const prompt = `
      Tu es un analyste de performance sportive expert pour le Raja Club Athletic (Raja Casablanca).
      Analyse les statistiques suivantes pour le joueur ${player.name} (${player.position}).
      
      Données récentes:
      ${statsSummary}
      
      Fournis une analyse concise en Markdown incluant:
      1. Points forts récents.
      2. Domaines à améliorer (Physique ou Technique).
      3. Une recommandation spécifique pour le prochain entraînement.
      
      Ton ton doit être professionnel, encourageant et direct. Utilise des emojis liés au football.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Analyse indisponible pour le moment.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Désolé, l'assistant IA est temporairement indisponible. Veuillez vérifier votre clé API.";
  }
};

export const getTacticalAdvice = async (opponentName: string): Promise<string> => {
    try {
        const prompt = `
          Donne 3 points clés tactiques pour préparer un match contre ${opponentName} dans la Botola Pro Marocaine.
          Concentre-toi sur les faiblesses typiques des équipes de cette ligue si tu ne connais pas l'équipe spécifique.
          Sois bref.
        `;
    
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });
    
        return response.text || "Conseils indisponibles.";
      } catch (error) {
        return "Erreur lors de la récupération des conseils tactiques.";
      }
}
