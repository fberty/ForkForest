import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <Link to="/" className="flex items-center text-green-600 mb-8 hover:text-green-700">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold mb-6">About Fork Forest</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            This is a ReFi initiative created in late 2022 by members of Fork DAO¹. 
            It was immediately embraced by the community and helped the growth of the DAO. 
            Although it acts as a separate entity, there is love and collaboration between them.
          </p>
          
          <p className="text-lg mb-6">
            An active community presence can be seen in the sold-out NFT collection for the first project, 
            the ReFi theme in the DAO's Telegram group, and the weekly Twitter/X Spaces on the DAO's account, 
            thus creating ReFi content in Spanish.
          </p>
          
          <p className="text-lg mb-8">
            Fork Forest currently collaborates with other ReFi projects such as Ekonavi and GainForest.
          </p>
          
          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500">
              ¹ Fork DAO is a decentralized autonomous organization focused on sustainable projects and social impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
