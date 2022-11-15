import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import './App.css'
import FooterLinks from './footerLinks'

function App (): ReactElement<any, any> {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">
            The lazy dev
        </div>
      </div>
      <div className="main-block">
        <div className='content'>
          <div className='image'>
            <img src="https://lh3.googleusercontent.com/pw/AL9nZEUT7_j57bRvdnEJrT0baJ7HE53AMwjwnwYGjvooPid5D2XXtCpSmUXBdG7CvyKKEaG3GZBbjWyjnsJROYgIO2OvHdg6BqnTk_4ATc7ve802_m0YrVLB5ph52A97OjLlnwOsmte1kanRhokrt7qTQuq4jg=w1680-h1260-no?authuser=0" />
          </div>
        </div>
        <div className='messagebox'>
          <div className='message'>
            Hello World!
            <br />
            Thoughts on things I&#39;ll likely put into this page:
            <br />
            links to other things I&#39;ve done, see linkedin link below
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
            As somebody who is visiting this site, let me know if theres something you&#39;d expect to see here that isn&#39;t.
            <br />
            <br />
            Most of my coding work is for pay.
            And I respect my employer contracts so I don&#39;t share that work generally.
            I&#39;ve kicked the tires on things in my spare time and done some challenges etc
            but mostly just playing games and decompressing when I&#39;m not on the clock.
            <br />
            Anyways, the thing I wanted to start here (once I have the bare minimum out of the way) was an idea for an app I haven&#39;t started yet
            &#39;<Link to='/baby-sizes'>How Big is My Baby</Link>&#39;.
          </div>
        </div>
      </div>

     <FooterLinks />

    </div>
  )
};

export default App
