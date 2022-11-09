import React from 'react';
import './App.css';
import FooterLinks, {FooterProp} from './footerLinks';

let footerVals:Array<FooterProp> = [
  {link:'https://www.twitter.com/slacker525600', image:'small_goose.png',altText:'bird'},
  {link:'https://www.facebook.com/slacker525600', image:'face.png',altText:'face'},
  {link:'https://www.github.com/slacker525600', image:'code.png',altText:'code'},
  {link:'https://www.linkedin.com/in/chrisecker', image:'work.png',altText:'work'},
];

function App() {
  /* just using this entrypoint to write some html today, 
  next steps, make a couple components, 
  link that clears main and loads sub page, 
  
  */
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
              Thoughts on things I'll likely put into this page: 
              <br />
              links to other things I've done, see linkedin link below
              <br />
              styling this page to not look like a blank nothing
              <br />
              what am I trying to convey with personal page why am I putting this out there at all 
              <br />
              blog personal feelings about whatever ... likely a link to another provider vs actually hosted here
              <br />
              how to contact me 
              <br />
              personal hobbies and projects (pinball ) 
              <br />
              lulz
              <br />
              As somebody who is visiting this site, let me know if theres something you'd expect to see here that isn't. 
              <br />
              <br />
              Most of my coding work is for pay. 
              And I respect my employer contracts so I don't share that work generally. 
              I've kicked the tires on things in my spare time and done some challenges etc 
              but mostly just playing games and decompressing when I'm not on the clock. 
              <br />
              Anyways, the thing I wanted to start here (once I have the bare minimum out of the way) was an idea for an app I haven't started yet 
              'How Big is My Baby'.

            </div>
          </div>

      </body>

     <FooterLinks items={footerVals} />

    </div>
  );
};

export default App;
