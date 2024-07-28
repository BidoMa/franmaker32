"use client";

import React, { useState } from 'react';
import { FaInbox, FaSearch, FaStar, FaTrash, FaReply } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  isRead: boolean;
  isStarred: boolean;
}

const mockMessages: Message[] = [
  { id: 1, sender: "Juan Pérez", subject: "Nueva oferta de franquicia", preview: "Hola, me interesa tu franquicia...", date: "2024-03-15", isRead: false, isStarred: false },
  { id: 2, sender: "María García", subject: "Consulta sobre locales", preview: "Quisiera saber si tienes disponibilidad...", date: "2024-03-14", isRead: true, isStarred: true },
  { id: 3, sender: "Carlos Rodríguez", subject: "Propuesta de colaboración", preview: "Te escribo para proponerte una colaboración...", date: "2024-03-13", isRead: true, isStarred: false },
  // Agrega más mensajes mock aquí si lo deseas
];

const BandejaEntrada: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    if (!message.isRead) {
      const updatedMessages = messages.map(m => 
        m.id === message.id ? { ...m, isRead: true } : m
      );
      setMessages(updatedMessages);
    }
  };

  const handleStarMessage = (messageId: number) => {
    const updatedMessages = messages.map(m => 
      m.id === messageId ? { ...m, isStarred: !m.isStarred } : m
    );
    setMessages(updatedMessages);
  };

  const filteredMessages = messages.filter(message => 
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r p-4">
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Buscar mensajes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10"
          />
        </div>
        <div className="space-y-2">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`p-2 cursor-pointer rounded ${
                message.isRead ? 'bg-gray-100' : 'bg-white font-bold'
              } hover:bg-gray-200`}
              onClick={() => handleMessageClick(message)}
            >
              <div className="flex justify-between items-center">
                <span>{message.sender}</span>
                <span className="text-sm text-gray-500">{message.date}</span>
              </div>
              <div className="font-medium">{message.subject}</div>
              <div className="text-sm text-gray-600 truncate">{message.preview}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-4">
        {selectedMessage ? (
          <Card>
            <CardHeader>
              <CardTitle>{selectedMessage.subject}</CardTitle>
              <div className="text-sm text-gray-500">
                De: {selectedMessage.sender} | {selectedMessage.date}
              </div>
            </CardHeader>
            <CardContent>
              <p>{selectedMessage.preview}</p>
              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm">
                  <FaReply className="mr-2" /> Responder
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleStarMessage(selectedMessage.id)}>
                  <FaStar className={`mr-2 ${selectedMessage.isStarred ? 'text-yellow-500' : ''}`} /> 
                  {selectedMessage.isStarred ? 'Destacado' : 'Destacar'}
                </Button>
                <Button variant="outline" size="sm">
                  <FaTrash className="mr-2" /> Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <FaInbox className="mr-2 text-4xl" />
            <span>Selecciona un mensaje para ver su contenido</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BandejaEntrada;