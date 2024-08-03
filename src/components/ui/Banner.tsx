import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="w-full pt-16 md:pt-28 lg:pt-36 relative bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full object-cover bg-black" /> {/* Asegúrate de que esta línea esté presente */}
      </div>
      <div className="px-4 md:px-6 space-y-12 xl:space-y-20 relative z-10">
        <div className="grid max-w-[1300px] mx-auto gap-8 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-20">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Revoluciona tu Franquicia con Franmaker
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Franmaker es una solución SaaS que transforma la manera de desarrollar y comercializar tu franquicia, haciendo el proceso más eficiente y rentable.
            </p>
            <div className="demo-button">
              <Link href="#">
                <button>Agendá una demo</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="imgContainer w-full max-w-[500px] rounded-xl p-4 shadow-lg">
              <img 
                src="https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYTRkYzE0My05ODVhLTQ5OWEtYWM3ZC01MTE5ZmYxZGE4ZjU=/dashboard.svg" 
                alt="Dashboard Illustration" 
                className="w-full max-w-[500px] rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="trusted-brands-container">
          <div className="trusted-brands-header">Marcas que confían en nosotros</div>
          <div className="trusted-brands">
            <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTozYjZiZDNiNS1jOGVkLTQzZTUtYjU4Ni0yYmE5Nzc5OGQ5Yjg=/airbnb-white.svg" alt="Airbnb" />
            <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTphYzhjMTYwMy1hOTJmLTRhYTMtYTIwNi1lMmQwMDZjZjdjOGU=/asana-white.svg" alt="Asana" />
            <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTpmMTEzNzMzNC1mMGZkLTQ1MDUtODJmNS1kYjFhN2Y1NTBjYzg=/dropbox-white.svg" alt="Dropbox" />
            <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTplZjQ5OTMwOS1hNGJiLTRjNjItODJiMS0zNjA4OTM5NzQ1NjM=/google-white.svg" alt="Google" />
            <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTo2NWI2ODBmZC1hNDI3LTQ2MzUtYmFkOC04NjIxNTNjNzRjN2I=/spotify-white.svg" alt="Spotify" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
