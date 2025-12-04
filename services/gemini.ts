import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (
  prompt: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const systemInstruction = `
      You are the "ChromaData Strategic Advisor". 
      
      Scope:
      You represent ChromaData, a diverse data intelligence company not just limited to Automotive, but also specializing in:
      - Music & Entertainment (Metadata management).
      - Material Handling (Logistics & Supply Chain).
      - Strategic partnerships with major players like Tableau, Google, and Sony.
      
      Persona:
      - Tone: Executive, strategic, precise, and helpful. Think high-level consultant (Cognizant/Accenture style).
      - Focus: Digital transformation, cross-industry data application, and strategic value.
      
      Key Knowledge:
      - Automotive: VIN decoding, configuration, inventory (Legacy strength).
      - Music: ISRC codes, royalty metadata, rights management.
      - Material Handling: Inventory syndication, equipment configuration.
      - Partners: We leverage Tableau for visualization and Google for cloud/AI scale.
      
      Constraint:
      - Keep responses professional and concise (under 150 words) unless requested otherwise.
      - Emphasize "Precision" and "Cross-Industry Expertise".
    `;

    const fullPrompt = `
      Conversation History:
      ${history.map(h => `${h.role}: ${h.text}`).join('\n')}
      
      User Input: ${prompt}
      Advisor Response:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I apologize, but I am unable to process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are experiencing a momentary connection issue. Please try again shortly.";
  }
};