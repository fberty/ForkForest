import React from 'react';
import { 
  Trees, 
  Heart, 
  Instagram, 
  Twitter, 
  Github,
  ArrowRight,
  Camera,
  Users,
  Leaf
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/imiagenes/photo_2025-03-17_21-50-03.jpg"
            alt="Forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <Trees className="h-8 w-8 text-green-400" />
            <span className="text-white text-2xl font-bold">Fork Forest</span>
          </div>
          <div className="flex space-x-6 text-white">
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#gallery" className="hover:text-green-400">Gallery</a>
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#donate" className="hover:text-green-400">Donate</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Planting Hope.<br />Growing Future.
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Join us in our mission to create sustainable forests and protect local communities through environmental initiatives.
          </p>
          <a 
            href="#donate"
            className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
          >
            Support Our Mission
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Los Cerrillos Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/imiagenes/photo_2025-03-17_21-50-55.jpg"
                alt="Los Cerrillos Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Los Cerrillos Forest Barrier</h3>
                <p className="text-gray-600 mb-4">
                  Creating a protective forest barrier to shield the community from agricultural chemicals while promoting biodiversity.
                </p>
                <div className="flex items-center text-green-600">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/imiagenes/photo_2025-03-17_21-50-56.jpg"
                alt="Urban Forest Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Urban Forest Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Transforming urban spaces into green havens through strategic tree planting and community engagement.
                </p>
                <div className="flex items-center text-green-600">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/imiagenes/photo_2025-03-17_21-50-58.jpg"
                alt="Education Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Environmental Education</h3>
                <p className="text-gray-600 mb-4">
                  Empowering future generations through hands-on learning about forest conservation and sustainability.
                </p>
                <div className="flex items-center text-green-600">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Project Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img 
              src="/imiagenes/photo_2025-03-17_21-51-07.jpg"
              alt="Project Photo 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="/imiagenes/photo_2025-03-17_21-51-09.jpg"
              alt="Project Photo 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="/imiagenes/photo_2025-03-17_21-51-13.jpg"
              alt="Project Photo 3"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Fork Forest</h2>
              <p className="text-gray-600 mb-6">
                Fork Forest is a community-driven initiative focused on creating sustainable environmental solutions through forest conservation and community engagement. Our projects combine ecological restoration with social impact, ensuring a better future for both nature and people.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Trees className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="font-bold text-2xl">1200+</p>
                  <p className="text-gray-600">Trees Planted</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="font-bold text-2xl">500+</p>
                  <p className="text-gray-600">Volunteers</p>
                </div>
                <div>
                  <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="font-bold text-2xl">3</p>
                  <p className="text-gray-600">Projects</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/imiagenes/photo_2025-03-17_21-51-14.jpg"
                alt="Team working"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="bg-green-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Your contribution helps us continue our work in forest conservation and community protection. Every donation makes a difference in creating a more sustainable future.
          </p>
          <a 
            href="https://forum.forkdaogov.xyz/t/fork-forest-02-los-cerrillos/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 inline-flex items-center"
          >
            Donate Now <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Wallet Address: oeth:0x84E420915147625c11c265FA61AEC826347204D1
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Trees className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Fork Forest</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://instagram.com" className="hover:text-green-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-green-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" className="hover:text-green-400">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Fork Forest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;