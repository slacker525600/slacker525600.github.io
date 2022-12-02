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
            lulz
            <br />
            links to other things I&#39;ve done, see linkedin link below (its the whiteboard image)
            <br />
            styling this page to not look like a blank nothing
            <br />
            blog link maybe? Personal feelings about things, I&#39;ve got my twitter below, but likely a link to another provider as well
            <br />
            personal hobbies and projects (pinball?)
            <br />
            As somebody who is visiting this site, let me know if theres something you&#39;d expect to see here that isn&#39;t.
            <br />
            <br />
            Most of my coding work is for pay.
            And I respect my employer contracts so I don&#39;t share that work generally.
            <br />
            I&#39;ve kicked the tires on projects in my spare time so feel free to check out the github link at the &#39;code&#39; image below and I&#39;ve done some <a href='https://github.com/slacker525600/challenges'>challenges </a> etc
            but mostly just interacting with friends and family, or playing games and decompressing when I&#39;m not on the clock.
            <br />
            Anyways, the thing I wanted to start here (once I have the bare minimum out of the way) was an idea for an app I&#39;ve hardly started yet
            &#39;<Link to='/baby-sizes'>How Big is My Baby</Link>&#39;.
          </div>
        </div>
      </div>

     <FooterLinks />

    </div>
  )
};

export default App
