'use client';

import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

export default function CreadorManuales() {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Bienvenido al creador de Manual de Operaciones. ¿Cómo puedo ayudarte hoy?' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSend = async () => {
    if (inputText.trim()) {
      const newMessages = [...messages, { type: 'user', text: inputText }];
      setMessages(newMessages);
      setInputText('');

      try {
        const response = await axios.post('/api/openai', { message: inputText });
        setMessages([...newMessages, { type: 'ai', text: response.data.message }]);
      } catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white flex-col md:flex-row">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="breadcrumb text-gray-400 mb-4">Inicio / Creador de manuales</div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Creador de Manuales</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-4">
          <div className="text-center py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition">Manual de Operaciones</div>
          <div className="text-center py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition">Manual de Marca</div>
          <div className="text-center py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition">Manual de Entrenamiento</div>
          <div className="text-center py-2 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition">Planificación Financiera</div>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <div className="mb-6">
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-green-600"></div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="px-2 py-1 bg-green-600 rounded">Introducción</span>
              <span className="px-2 py-1 bg-gray-700 rounded">Procesos</span>
              <span className="px-2 py-1 bg-gray-700 rounded">Políticas</span>
              <span className="px-2 py-1 bg-gray-700 rounded">Finalización</span>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Manual de Operaciones</h2>
          <p className="mb-4">Creación asistida por IA: Responda las preguntas para generar su manual.</p>
          <div className="bg-gray-700 p-4 mb-4 rounded h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded ${message.type === 'ai' ? 'bg-gray-600' : 'bg-gray-500 text-right'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Escribe tu respuesta aquí..."
              value={inputText}
              onChange={handleInputChange}
              className="flex-1 p-2 bg-gray-600 rounded-l text-white placeholder-gray-400"
            />
            <button onClick={handleSend} className="p-2 bg-green-600 rounded-r hover:bg-green-700">Enviar</button>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="file-upload" className="bg-gray-600 px-4 py-2 rounded cursor-pointer hover:bg-gray-700">
              Adjuntar archivo
            </label>
            <input id="file-upload" type="file" className="hidden" />
            <span className="ml-2 text-sm">Ningún archivo seleccionado</span>
          </div>
          <div className="flex justify-between">
            <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Guardar progreso</button>
            <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Generar borrador</button>
          </div>
        </div>
      </div>
    </div>
  );
}
