import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQFQKHhFL9FsIg/profile-displayphoto-shrink_800_800/0/1530384497867?e=1642032000&v=beta&t=5haX7S_6aCI1e4c4Vs4Y5hCb965DuFYKXLyTcMstYzY" 
          nome="Leticia" 
          descricao="Oi, eu sou a Leticia. Sou graduanda em Administração e estudante da Labenu no curso Web Full Stack. Adoro sorrisos e chocolate."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
            imagem="https://cdn-icons-png.flaticon.com/512/557/557510.png"
            nome="Email:"
            descricao=" leticia18moreira@gmail.com"
            />
      </div>

      <div className="page-section-container">
        <CardPequeno
            imagem="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-address-icon-isolated-on-abstract-background-png-image_1901977.jpg"
            nome="Endereço:"
            descricao="Rua Sorriso"
            />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cr.inf.br/blog/wp-content/uploads/2020/05/nota-fiscal-eletronica-nf-e-linko-comercial-cr-sistemas-e-web.jpg" 
          nome="Freelancer" 
          descricao="Lançamentos de Notas Fiscais" 
        />
        
        <CardGrande 
          imagem="https://www.lazershop.com.br/img/products/aluminio-articulavel-2-2m-mor-rainbow-sky_1_1000.jpg" 
          nome="Catalão Futebol Clube" 
          descricao="Auxiliar Administrativa" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
