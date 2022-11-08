import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
            The lazy dev
        </div>
        
      </header>
      <body>
          <div className='image'>
            <img src="https://lh3.googleusercontent.com/pw/AL9nZEUT7_j57bRvdnEJrT0baJ7HE53AMwjwnwYGjvooPid5D2XXtCpSmUXBdG7CvyKKEaG3GZBbjWyjnsJROYgIO2OvHdg6BqnTk_4ATc7ve802_m0YrVLB5ph52A97OjLlnwOsmte1kanRhokrt7qTQuq4jg=w1680-h1260-no?authuser=0" />
          </div>
          
          <div className='messagebox'>
            <div className='message'>
              Hello World!
              <br />
              thoughts on things I'll likely put into this page 
              links to other things I've done,
              styling the page to not look like a blank white nothing
              what am I trying to convey with personal page why am I putting this out there at all 
              blog personal feelings about whatever ... likely a link to another provider vs actually hosted here
              how to contact me 
              personal hobbies and projects 
              lulz

            </div>
          </div>

      </body>


     <div className="footer">
        
        <a href="https://www.twitter.com/slacker525600">
          <img height={32} width={32} alt="bird" src={require('./small_goose.png')} /> 
        </a>
        <a href="https://www.facebook.com/slacker525600"> 
          <img height={32} width={32} alt="face" src={require('./face.png')} />  
        </a>
        <a href="https://www.github.com/slacker525600" > 
          <img height={32} width={32} alt="git" src={require('./code.png')} />
        </a>
        <a href="https://www.linkedin.com/in/chrisecker">
          <img height={32} width={32} alt="work" src={require('./work.png')} /> 
        </a>
        <br />
        copyright chris ecker 2022
     </div>

    </div>
  );
}

export default App;
