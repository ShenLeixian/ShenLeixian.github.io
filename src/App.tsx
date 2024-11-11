import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import News from './components/News'
import About from './components/About'
import Resume from './components/Resume'
import Publication from './components/Publication'
import Prospectives from './components/Prospectives'

function App() {
  const currentUrl = window.location.href
  const initComp = () => {
    if (currentUrl.endsWith('/#cv') || currentUrl.endsWith('/#awards') || currentUrl.endsWith('/#talks') || currentUrl.endsWith('/#service')) {
      return 'cv'
    }
    // else if (currentUrl.endsWith('/#prospectives')) {
    //   return 'prospectives'
    // }
    return 'home'
  }
  const [comp, setComp] = useState<string>(initComp)

  return (
    <>
      <div id="header">
        {/* <div className="first"></div>
        <div className="second"></div> */}
        <Nav setComp={setComp} />
      </div>
      <div id="main">
        {comp === 'home' ? <Home /> : comp === 'prospectives' ? <Prospectives /> : <Resume />}
      </div >
      <div id="footer">
      <div style={{display: 'inline-block', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
      {/* <a href='https://clustrmaps.com/site/1bq3v'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=c8c7c7&w=150&t=n&d=LNDyveCbdQ7qI6V8UUwCmKVGKchQrNhLyKybxjZFctc&co=ffffff&ct=ffffff'/></a> */}
      <a href='https://clustrmaps.com/site/1bq3v'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=c8c7c7&w=150&t=tt&d=LNDyveCbdQ7qI6V8UUwCmKVGKchQrNhLyKybxjZFctc&co=ffffff&ct=9f9090'/></a>
    </div>
      <br/>
        Last updated by @ Leixian Shen: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
        <br/>
        (Template from <a href='https://shuxinhuan.github.io/' >Xinhuan Shu</a>) 
      </div>
    </>
  )
}
export default App


function Home() {
  return (
    <>
      <About />
      <News />
      <Publication />
    </>
  )
}
