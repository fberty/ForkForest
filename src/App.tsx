import { Link } from 'react-router-dom';
import { 
  Heart, 
  Instagram, 
  Github,
  ArrowRight,
  Users,
  Leaf
} from 'lucide-react';
import XIcon from './components/XIcon';
import OpenSeaIcon from './components/OpenSeaIcon';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/Fork%20Forest/photo_2025-03-21_10-43-52.jpg"
            alt="Forest Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/Fork%20Forest/fork_forest_transparent.png"
              alt="Fork Forest Logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex space-x-6 text-white">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#donate" className="hover:text-green-400">Donate</a>
          </div>
        </nav>
      </header>

      {/* Elementos de texto movidos aquí */}
      <div className="bg-green-50 py-12 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
          Planting Hope.<br />
          Growing Future.
        </h1>
        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Join us in our mission to create sustainable forests and protect local 
          communities through environmental initiatives.
        </p>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-53-24.jpg")',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg tracking-wide">About Fork Forest</h2>
              <p className="text-gray-100 mb-4 text-lg drop-shadow-lg font-medium leading-relaxed">
                Fork Forest is a community-driven initiative focused on creating sustainable environmental solutions through forest conservation and community engagement. Our projects combine ecological restoration with social impact, ensuring a better future for both nature and people.
              </p>
              <Link 
                to="/about"
                className="inline-block px-6 py-2 mb-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-lg font-semibold"
              >
                Learn More
              </Link>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Users className="w-8 h-8 mx-auto text-green-300 mb-2 drop-shadow-lg" />
                  <p className="font-bold text-2xl text-white drop-shadow-lg">700</p>
                  <p className="text-gray-100 drop-shadow-lg font-medium">Trees Planted</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto text-green-300 mb-2 drop-shadow-lg" />
                  <p className="font-bold text-2xl text-white drop-shadow-lg">300</p>
                  <p className="text-gray-100 drop-shadow-lg font-medium">Volunteers</p>
                </div>
                <div>
                  <Leaf className="w-8 h-8 mx-auto text-green-300 mb-2 drop-shadow-lg" />
                  <p className="font-bold text-2xl text-white drop-shadow-lg">3</p>
                  <p className="text-gray-100 drop-shadow-lg font-medium">Projects</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/FORK%20FOREST%2002:%20Los%20Cerrillos/Territorio/photo_2025-03-17_21-51-14.jpg"
                alt="Team working"
                className="rounded-lg shadow-lg w-full h-auto"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - Urkku */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/FORK%20FOREST%2001:%20Urkku/Territorio/photo_2023-03-22_10-50-55.jpg"
                alt="Urban Forest Project"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">FORK FOREST 01:<br />Urkku: Ecological conservation</h3>
                <p className="text-gray-600 mb-4">
                  Transforming urban spaces into green havens through strategic tree planting and community engagement.
                </p>
                <Link to="/ForkForest01" className="flex items-center text-green-600">
                  <span>View Gallery</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Project 2 - Los Cerrillos */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/FORK%20FOREST%2002:%20Los%20Cerrillos/photo_2025-03-21_10-45-41.jpg"
                alt="Los Cerrillos Project"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">FORK FOREST 02<br />Los Cerrillos: Forest Barrier</h3>
                <p className="text-gray-600 mb-4">
                  Creating a protective forest barrier to shield the community from agricultural chemicals while promoting biodiversity.
                </p>
                <Link to="/ForkForest02" className="flex items-center text-green-600">
                  <span>View Gallery</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Project 3 - Environmental Education */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/FORK%20FOREST%2003:%20Muralla%20viva%20II/photo_2025-03-21_10-43-04.jpg"
                alt="Education Program"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">FORK FOREST 03: Environmental & Crypto Education</h3>
                <p className="text-gray-600 mb-4">
                  Empowering future generations with hands-on learning in forest conservation, sustainability, and blockchain/Web3 technology, supported by Proof of Integrity.
                </p>
                <Link to="/ForkForest03" className="flex items-center text-green-600">
                  <span>View Gallery</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section 
        className="py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Fork%20Forest/photo_2025-03-21_10-30-29.jpg")',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg tracking-wide">FORK FOREST Podcast</h2>
            <p className="text-gray-100 max-w-2xl mx-auto mb-8 text-lg drop-shadow-lg font-medium leading-relaxed">
              Explora nuestras conversaciones sobre conservación forestal, sostenibilidad y tecnología blockchain. Únete a nosotros mientras entrevistamos a expertos y compartimos historias inspiradoras del campo.
            </p>
            <Link 
              to="/podcast" 
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 inline-flex items-center shadow-lg"
            >
              Ver Todos los Episodios <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="bg-green-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your contribution helps us continue our work in forest conservation and community protection. Every donation makes a difference in creating a more sustainable future.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            <p>Wallet Addresses:</p>
            <p>OETH: 0x84E420915147625c11c265FA61AEC826347204D1</p>
            <p>ARB1: 0xB3C58fFa0BBC48138776fD9cc174e89f51397e65</p>
            <p>CELO: 0xBDD87C2ca3d916f4f9f1930e7FF3A313743AaB87</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/Fork%20Forest/fork_forest_transparent.png"
                alt="Fork Forest Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/zapamzucumorg/" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ForkForest" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
                <XIcon />
              </a>
              <a href="https://github.com/fberty/ForkForest" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://opensea.io/collection/forestnft-1" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
                <OpenSeaIcon />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 Fork Forest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;