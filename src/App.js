import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [species, setSpecies] = useState([
    'Austropotamobius torrentium (Foto: Halil Ibrahimi',
    'Eresus kollari (Foto: Donard Geci',
    'Philaeus chrysops (Foto: Donard Geci',
    'Potamophylax coronavirus (Foto: Halil Ibrahimi',
    'Potamophylax kosovaensis (Foto: Halil Ibrahimi',
    'Rosalia alpina (Foto: Halil Ibrahimi',
    'Barbus balcanicus (Foto: Stamatis Zogaris',
    'Cobitis elongatoides (Foto: Stamatis Zogaris',
    'Salmo trutta (Foto: Stamatis Zogaris',
    'Ichthyosaura alpestris (Foto: Donard Geci',
    'Zamenis situla (Foto: Donard Geci',
    'Testudo hermanni (Foto: Krenare Ibrahimi & Blertina Islami',
    'Motacilla alba (Foto: Donard Geci',
    'Lanius collurio (Foto: Donard Geci',
    'Rhinolophus ferrumequinum (Foto: Donard Geci'
  ]);

  // New state for modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Nav />
      <div className="content">
        <div className="hero">
          <h1>Fauna of Kosovo</h1>
          <p>
            Fauna of Kosovo është një listë e të gjitha llojeve të kafshëve që
            gjenden në Republikën e Kosovës. Kjo platformë do të përditësohet
            çdo vit me gjetjet e reja, duke siguruar që informacioni të jetë
            gjithmonë i saktë dhe i përditësuar. Deri më tani, janë regjistruar
            1924 lloje, që i përkasin 1018 gjinive, 278 familjeve, dhe 65
            rendeve.
          </p>
        </div>
        <div className="species">
          {species.map((specie, index) => {
            const imageName = require(`./pics/foto/${specie.split(" ")[0]} ${specie.split(" ")[1]}.jpg`);
            return (
              <div key={index} className="species-item">
                <p className='tag'>{specie.split('(')[1]}</p>
                <img 
                  src={imageName} 
                  alt={specie} 
                  onClick={() => handleImageClick(imageName)} // Handle image click
                />
                <div className='name'>
                  <p>{specie.split('(')[0]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />

      {/* Modal for showcasing the image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default App;
