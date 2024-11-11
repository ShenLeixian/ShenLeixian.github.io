import { Button, Divider } from 'antd'
import './News.css'
import { useEffect, useState } from 'react'

function News () {
  const [current, setCurrent] = useState(5)
  const [sum, setSum] = useState(0)

  
  /**
   * @description set display/hidden news
   * @param {number} cur
   * @param {number} count
   */
  const setAttr = (cur: number, count: number) => {
    const elements = document.getElementsByClassName('news')
    for (let idx = 0; idx < count; idx++) {
      const ele = elements[idx]
      if (idx < cur) {
        ele.setAttribute("class", 'news')
      }
      else {
        ele.setAttribute("class", 'news hidden')
      }
    }
  }

  const showMore = () => {
    let newCurrent = current + 3
    setCurrent(newCurrent)
    setAttr(newCurrent, sum)
  }

  const showLess = () => {
    setCurrent(5)
    setAttr(5, sum)
  }

  useEffect(() => {
    const newSum = document.getElementsByClassName('news').length
    setAttr(5, newSum)
    setSum(newSum)
  }, [sum])

  return (
    <div id='news'>
      <Divider />
      <div className="sec-title"><span className="bg-hl">News</span></div>
      <div className="content">
        <div className="news">
          <span className="time">2024.11</span>
          <span className="item">💬 Pass <a className="text-hl" href="https://cse.hkust.edu.hk/pg/defenses/F24/lshenaj-06-11-2024.html" target="_blank">PhD Qualifying Examination</a> and become a PhD candidate. </span>
        </div>
        <div className="news">
          <span className="time">2024.10</span>
          <span className="item">💬 Presenting our paper "WonderFlow" and "Data Director" at <a className="text-hl" href="https://ieeevis.org/year/2024/program/papers.html?filter=titles" target="_blank">IEEE VIS 2024</a> and serve as a student volunteer. </span>
        </div>
        <div className="news">
          <span className="time">2024.10</span>
          <span className="item">🎉 Our paper "Data Playwright: Authoring Data Videos with Annotated Narration" was accepted by IEEE TVCG. </span>
        </div>
        <div className="news">
          <span className="time">2024.09</span>
          <span className="item">🎉 Our paper "ChartInsights: Evaluating Multimodal Large Language Models for Low-Level Chart Question Answering" was accepted by EMNLP 2024 findings. </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "PyGWalker: On-the-fly Assistant for Exploratory Visual Data Analysis" was accepted by IEEE VIS 2024 and recoginzed as the <a className="text-hl" href="https://ieeevis.org/year/2024/program/awards/awards.html" target="_blank">Best Paper Award</a> in IEEE VIS 2024! </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "NotePlayer: Engaging Jupyter Notebooks for Dynamic Presentation of Analytical Processes" was accepted by UIST 2024. </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "From Data to Story: Towards Automatic Animated Data Video Creation with LLM-based Multi-Agent Systems" was accepted by IEEE VIS 2024 Gen4DS Workshop. </span>
        </div>
        <div className="news">
          <span className="time">2024.07</span>
          <span className="item">💬 Attend ChinaVis 2024 Hong Kong and serve as a conference volunteer. </span>
        </div>
        <div className="news">
          <span className="time">2024.06</span>
          <span className="item">🎉 Our paper "WonderFlow: Narration-Centric Design of Animated Data Videos" was accepted by IEEE TVCG. </span>
        </div>
        <div className="news">
          <span className="time">2023.10</span>
          <span className="item">💬 Presenting our paper "Data Player" at IEEE VIS 2023 in Melbourne, Australia 🦘. </span>
        </div>
        <div className="news">
          <span className="time">2023.08</span>
          <span className="item">🎉 I was awarded the RedBird PhD Award of HKUST and will start my Ph.D journey. </span>
        </div>
        <div className="news">
          <span className="time">2023.07</span>
          <span className="item">🎉 Our paper "Data Player: Automatic Generation of Data Videos with Narration-Animation Interplay" was accepted by IEEE VIS 2023. </span>
        </div>
        <div className="news">
          <span className="time">2023.06</span>
          <span className="item">🎉 I finished my internship at MSRA and received the "Star of Tomorrow" Excellent Internship Award. </span>
        </div>
        <div className="news">
          <span className="time">2023.06</span>
          <span className="item">🎉 I obtained my master's degree with honor from Tsinghua University and was awarded the Excellent Graduation Thesis of THU. </span>
        </div>
      </div>
      
      <div style={{display: 'flex'}}>
        {current < sum ? <Button type="text" onClick={showMore}> ⬇️ Show more</Button> : null}
        {current > 5 ? <Button type="text" onClick={showLess}>⬆ Show Less</Button> : null}
      </div>
      
    </div>
  )
}

export default News