import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y descripción */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-white">Franmaker</h1>
            <p className="mt-2 text-sm text-gray-400">
              Herramientas avanzadas para desarrollar y comercializar tu franquicia de manera eficiente.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 5.1 3.9 9.3 8.9 9.9v-7h-2.7v-2.8h2.7v-2.1c0-2.7 1.6-4.2 4-4.2 1.1 0 2.2.1 2.2.1v2.5h-1.2c-1.1 0-1.5.7-1.5 1.4v1.8h2.7l-.4 2.8h-2.3v7c5-0.6 8.9-4.8 8.9-9.9z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1 4.3 4.3 0 0 0-7.5 3v.5a12.2 12.2 0 0 1-8.8-4.5c-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8a4.3 4.3 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.3 4.4 4.4 0 0 1-1.1.1c-.3 0-.6 0-.9-.1a4.3 4.3 0 0 0 4.1 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1a12.2 12.2 0 0 0 6.6 1.9c7.9 0 12.2-6.5 12.2-12.2 0-.2 0-.4-.1-.6a8.6 8.6 0 0 0 2.1-2.2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 2.12 6.1 1 7.7 1S10.4 2.12 10.4 3.5 9.28 6 7.7 6 4.98 4.88 4.98 3.5zM2 24V8.9h5.6v1.4h.1c.8-1.5 2.7-2.8 5.3-2.8 5.8 0 6.8 4.1 6.8 9.4v7.5h5.6V14c0-6.4-3.5-11.8-10.3-11.8-4.7 0-7.4 2.5-8.8 5.1V8.9H2v15.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Franmaker. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
