import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div>
      <div class="inicio">
        <header>
            <h1>Personare</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav class="menu">
                <ul>
                    <li class="botoes-menu">Início</li>
                    <li class="botoes-menu">Jogo de Tarot</li>
                                   </ul>
            </nav>
            
            <section>
                <div class="tarot">
                    <h4>O MAGO</h4>
                    <img src= "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg" alt="O MAGO" />
                </div>
                <div>
                    <h4>A SACERDOTISA</h4>
                    <img src= "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano2.jpg" alt="A SACERDOTISA" />
                </div>
                <div>
                    <h4>A IMPERATRIZ</h4>
                    <img src= "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano3.jpg" alt="A IMPERATRIZ" />
                </div>
                <div>
                    <h4>O IMPERADOR</h4>
                    <img src= "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano4.jpg" alt="O IMPERADOR" />
                </div>
                             
            </section>
        </main>

        <footer>
            <h4></h4>
        </footer>
      </div>
    </div>
  );
}

export default App;