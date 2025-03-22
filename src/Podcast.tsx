import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Definición de la estructura de un episodio
interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
}

const Podcast: React.FC = () => {
  // Lista completa de 24 episodios del podcast con IDs reales de Spotify
  const [episodes] = useState<Episode[]>([
    {
      id: "1DR0VGLf2WWRjxF0XZJNFk",
      title: "Reverdece con Unplastify",
      description: "Regenerar los océanos es el objetivo. Capacitar ciudadanos, recompensar empresas, trabajar junto al Estado. Hacer más eficientes los procesos. Esos son los medios de Unplastify. La blockchain, su aliado.\nPor otro lado, Fork Forest 2 es una realidad.",
      date: "6 Oct 2023"
    },
    {
      id: "1ekfey7wQL0ZDfeYgsg2fP",
      title: "Reverdece Ruuts.la",
      description: "La posibilidad de recompensar las buenas prácticas, y las contradicciones de mercantilizar un recurso natural. ¿Es una mala idea? ¿Una solución? ¿Es inevitable?\nFranco Zan de  nos relata su camino y las posibilidades que trae este mundo. Y, por supuesto, cómo la blockchain se enquista como un mecanismo fundamental.\nPor otro lado, Fork Forest 02 es una realidad. El Ing. Fernando Parra nos pone al día en las preparaciones para octubre.\nPor último, Penélope Paz da cuenta de los incendios que se están combatiendo en la región de Traslasierra, provincia de Córdoba, Argentina, dónde está nucleado Fork Forest.",
      date: "21 Sep 2023"
    },
    {
      id: "1fz6eKkQSRNH1lkLCXnZ1w",
      title: "Reverdecen cocos y corales",
      description: "Desglosando las Gitcoin Grants, reflexionando con Wasabi de @KokonutNetwork  y Rodrigo de @MesoReefDAO.\nFork Forest 02 es una realidad. Primera jornada en septiembre. El Ing. Fernando Parra narra el proceso, la idea y los detalles.",
      date: "7 Sep 2023"
    },
    {
      id: "0mAJEpGncYg69EkAlnObzh",
      title: "Reverdecen las Gitcoin Grants",
      description: "Conversamos sobre impacto social en un capítulo particularmente internacional: recibimos a Fork Forest, Ethereum Uruguay, Proof of Integrity y AgroforestDAO.",
      date: "24 Ago 2023"
    },
    {
      id: "0oe6ZL0nr43hT9JtHlmxbh",
      title: "Reverdece con AgroforestDAO",
      description: "Sembrar feixao, recolectar frutas en la mata, recompensar a quienes ceden sus tierras, encontrar alternativas a las grandes rutas comerciales. Una imperdible conversación con Diogo de @AgroforestDAO en la que el idioma no fue una barrera sino un condimento.",
      date: "10 Ago 2023"
    },
    {
      id: "1FXBNqGT0SJkfVgirP7MwI",
      title: "Reverdece con EthicHub",
      description: "La visita de Jori Armbruster a ReFi con Fork. Cofounder de EthicHub, OG del mundo cripto, buildeando desde 2016. EthicHub vincula inversores y pequeños agricultores, generando posibilidad y beneficios para ambos. Ya van más de 3.5 millones de dólares inyectados a este mundo emergente.\nTambién abrió Crypto Café, uno de los mejores cafés de Madrid. Allí sirven café que producen proyectos agroecologicos impulsados por EthicHub.\nDefienden los valores de la descentralización, la distribución, el trabajo genuino y el cuidado de la tierra y su biodiversidad.",
      date: "27 Jul 2023"
    },
    {
      id: "2u9qJUbeWuYKcAJoIHYE76",
      title: "Reverdece con Ekonavi",
      description: "Una red social donde se encuentran comunidades con impacto ambiental. La agrofloresta. La recompensa de las buenas prácticas. Un token propio, para tomar la economía por las astas.\nBrenno de Ekonavi y la generosidad de compartir su sabiduría y su experiencia.",
      date: "13 Jul 2023"
    },
    {
      id: "2Y0YCV60MLXZB46YkH7Xi1",
      title: "Reverdece con las hormigas",
      description: "El mítico twittero @Georgeclimapron se suma a ReFi con Fork para compartir su sabiduría. Es biólogo, comunicador social, y tiene como pasatiempo la observación de las hormigas negras podadoras y otros insectos, con los cuales puede leer y elaborar predicciones climáticas del corto y mediano plazo.",
      date: "29 Jun 2023"
    },
    {
      id: "6XSWHNaTioDTWts7B6j7ei",
      title: "Reverdece con Mate Lab",
      description: "Nicolás Wolf nos cuenta sobre Mate Lab, un proyecto que vincula web3 con ONGs ambientales. Mate Lab es un proyecto que busca generar impacto positivo en el medio ambiente a través de la tecnología blockchain.",
      date: "15 Jun 2023"
    },
    {
      id: "0NfuJyWlL3Ls5mWoZ4DoUX",
      title: "Reverdece especial comunidades Latam",
      description: "Un episodio especial dedicado a las comunidades ReFi en América Latina. Exploramos los proyectos más innovadores y las iniciativas que están transformando la región a través de las finanzas regenerativas.",
      date: "1 Jun 2023"
    },
    {
      id: "5jNnJbCwvqcPqZTWGfXLRz",
      title: "REverdece con Ruben Altman",
      description: "Ruben Altman, fundador de ANTom.la, nos comparte su visión sobre la tokenización de activos ambientales y cómo esta tecnología puede revolucionar la conservación de ecosistemas en América Latina.",
      date: "18 May 2023"
    },
    {
      id: "4qLnMzV2sSxYpJrKtB",
      title: "Reverdece una Cortina Forestal",
      description: "En este episodio exploramos el concepto de cortinas forestales y su importancia para la protección de ecosistemas. Analizamos casos de éxito y estrategias para implementarlas en diferentes contextos.",
      date: "4 May 2023"
    },
    {
      id: "3og271bhPTcYDGEniX7Nbf",
      title: "Reverdece con Healing Coral",
      description: "Conversamos con el equipo de Healing Coral sobre su innovador proyecto para restaurar arrecifes de coral utilizando tecnología blockchain para financiar y monitorear el progreso de la restauración.",
      date: "20 Abr 2023"
    },
    {
      id: "39EOudMhqfV4s01xqIVKES",
      title: "Reverdece con Wildfriends.xyz",
      description: "Primer episodio de la segunda temporada. Exploramos el proyecto Wildfriends.xyz y su enfoque en la conservación de la vida silvestre a través de la tecnología blockchain y las finanzas regenerativas.",
      date: "6 Abr 2023"
    },
    {
      id: "0lNBI8GtZoq50SA4XrEFPu",
      title: "ForkForestEp09#Plantación",
      description: "Celebramos el éxito de la plantación en Urkku. Un hito importante para el proyecto Fork Forest y un paso adelante en nuestra misión de reforestación y conservación.",
      date: "6 Dic 2022"
    },
    {
      id: "5ZNnzcBiOMKnLhrtrRY1rQ",
      title: "Fork Forest Ep08 #Cryptocampo con Paula y Bruno Arenzo",
      description: "¿Cómo llega el cultivo de cannabis a la web3? ¿Cómo encabeza este proyecto un bufete de abogados? La amabilidad y generosidad de Paula Arenzo y Bruno Arenzo poblan de simpleza un abanico de temas que a priori parecen complejos. Visiones sobre el presente y el futuro del mundo legal y el mundo cannábico en Argentina y Latinoamérica.",
      date: "29 Nov 2022"
    },
    {
      id: "4Qw3PkLnMzV2sSxYpJrKtB",
      title: "Fork Forest Ep07 #Impactopia #RegensUnite con Sinouhe Monteiro ReFi & Fork DAO",
      description: "Charlamos con Sino Monteiro, que nos acompaña desde Bruselas. El encuentro en Bruselas en el ex Banco Central, donde se imprimía el euro, y la psicomagia de abrir tu wallet ahí mismo.",
      date: "22 Nov 2022"
    },
    {
      id: "3og271bhPTcYDGEniX7Nbf",
      title: "Fork Forest Ep06 #GainForest con Facu Cajen ReFi & Fork Dao",
      description: "Nos acompaña Facundo Cajen de GainForest. Sus objetivos: shillear los NFTrees dinámicos, proteger los bosques del Gran Chaco y hacer un mapeo abierto mundial de los proyectos de conservación y reforestación de todo mundo.",
      date: "15 Nov 2022"
    },
    {
      id: "39EOudMhqfV4s01xqIVKES",
      title: "Fork Forest Ep05 #mintday Proyecto ReFi & Fork Dao de la mano de @00Brujula-Hosted by @_nicod_",
      description: "SALÍO LA COLECCION DE NFTS DE FORK FOREST y hacemos minteo en vivo.",
      date: "8 Nov 2022"
    },
    {
      id: "0lNBI8GtZoq50SA4XrEFPu",
      title: "Fork Forest Ep04 - con Artu Grande Proyecto Refi$ Fork DAO - Hosted By @nicod",
      description: "En esta edición de ReFi con FORK hablamos con @ArtuGrande de Web3makers.org.",
      date: "1 Nov 2022"
    },
    {
      id: "5jNnJbCwvqcPqZTWGfXLRz",
      title: "#ReFiconFork Ep #3 - Gaspar Mac de Nativas.la - Proyecto ReFi $ Fork DAO - Hosted By @_nicod_",
      description: "Gaspar Mac de Nativas.la nos cuenta sobre su proyecto de reforestación con especies nativas y cómo están utilizando la tecnología blockchain para financiar y monitorear sus esfuerzos.",
      date: "25 Oct 2022"
    },
    {
      id: "4qLnMzV2sSxYpJrKtB",
      title: "ForkForestEp02",
      description: "Conociendo Zapam Zucum x Penelope Paz- Proyecto Refi $ Fork DAO - Hosted By @_nicod_. *Fork Forest* es nuestro proyecto ReFi.",
      date: "18 Oct 2022"
    },
    {
      id: "0NfuJyWlL3Ls5mWoZ4DoUX",
      title: "ForkForestEp01",
      description: "Presentación del proyecto Fork Forest - Proyecto ReFi $ Fork DAO - Hosted By @_nicod_. *Fork Forest* es nuestro proyecto ReFi.",
      date: "11 Oct 2022"
    }
  ]);

  // Estado para el episodio seleccionado
  const [selectedEpisode, setSelectedEpisode] = useState<string | null>(null);
  
  // Estado para controlar la paginación de episodios
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 8;
  
  // Calcular episodios a mostrar en la página actual
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
  
  // Calcular número total de páginas
  const totalPages = Math.ceil(episodes.length / episodesPerPage);
  
  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with background */}
      <div className="relative h-64 bg-green-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">FORK FOREST Podcast</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explorando la intersección entre conservación ambiental y tecnologías emergentes
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Volver a la página principal</span>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with episodes list */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Todos los Episodios <span className="text-sm font-normal text-gray-500">({episodes.length})</span></h2>
              
              {/* Episodios actuales */}
              <div className="space-y-4 mb-6">
                {currentEpisodes.map(episode => (
                  <div 
                    key={episode.id}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedEpisode === episode.id 
                        ? 'bg-green-100 border-l-4 border-green-600' 
                        : 'bg-gray-50 hover:bg-green-50'
                    }`}
                    onClick={() => setSelectedEpisode(episode.id)}
                  >
                    <h3 className="font-bold">{episode.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{episode.date}</p>
                  </div>
                ))}
              </div>
              
              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <nav className="flex items-center space-x-2">
                    <button 
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded ${
                        currentPage === 1 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      Anterior
                    </button>
                    
                    <div className="text-sm text-gray-600">
                      Página {currentPage} de {totalPages}
                    </div>
                    
                    <button 
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded ${
                        currentPage === totalPages 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      Siguiente
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2">
            {selectedEpisode ? (
              // Mostrar el reproductor del episodio seleccionado
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video relative">
                  <iframe 
                    src={`https://open.spotify.com/embed/episode/${selectedEpisode}?utm_source=generator&theme=0`}
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allowTransparency={true} 
                    allow="encrypted-media"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {episodes.find(e => e.id === selectedEpisode)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {episodes.find(e => e.id === selectedEpisode)?.description}
                  </p>
                </div>
              </div>
            ) : (
              // Mostrar el reproductor principal del podcast
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video relative">
                  <iframe 
                    src="https://open.spotify.com/embed/show/3mbOZyvQj2rGUpaBuXbgDk?utm_source=generator&theme=0" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allowTransparency={true} 
                    allow="encrypted-media"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Sobre Nuestro Podcast</h2>
                  <p className="text-gray-600 mb-4">
                    El podcast de FORK FOREST explora la intersección entre la conservación ambiental y las tecnologías emergentes como blockchain y Web3. 
                    A través de entrevistas con expertos, discusiones y reportajes desde el campo, compartimos historias inspiradoras y soluciones innovadoras 
                    para los desafíos ambientales más urgentes.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Tenemos <span className="font-bold">{episodes.length} episodios</span> disponibles. Selecciona uno de la lista para escucharlo, 
                    o suscríbete a nuestro podcast en Spotify para no perderte ningún episodio nuevo.
                  </p>
                  <div className="mt-6">
                    <a 
                      href="https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 inline-flex items-center"
                    >
                      Suscribirse en Spotify
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p> {new Date().getFullYear()} FORK FOREST. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-400">
            Suscríbete a nuestro podcast en 
            <a 
              href="https://open.spotify.com/show/3mbOZyvQj2rGUpaBuXbgDk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 ml-1"
            >
              Spotify
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Podcast;
