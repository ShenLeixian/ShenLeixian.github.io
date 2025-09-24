import { Button, Divider } from 'antd'
import './News.css'
import { useEffect, useState } from 'react'

function News () {
  const [current, setCurrent] = useState(6)
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
    setCurrent(6)
    setAttr(6, sum)
  }

  useEffect(() => {
    const newSum = document.getElementsByClassName('news').length
    setAttr(6, newSum)
    setSum(newSum)
  }, [sum])

  return (
    <div id='news'>
      <Divider />
      <div className="sec-title"><span className="bg-hl">News</span></div>
      <div className="content">
      <div className="news">
          <span className="time">2025.09</span>
          <span className="item">🎉 Our paper <a className="text-hl" href="https://nvbench2.github.io/" target="_blank">nvBench 2.0: Resolving Ambiguity in Text-to-Visualization through Stepwise Reasoning</a> was accepted to NeurIPS 2025! </span>
      </div>
      <div className="news">
          <span className="time">2025.09</span>
          <span className="item">🎉 Our paper <a className="text-hl" href="https://zhang373.github.io/NeuroSync_Web/" target="_blank">NeuroSync: Intent-Aware Code-Based Problem Solving via Direct LLM Understanding Modification</a> in UIST 2025 won the 🏆 Best Paper Honorable Mention Award (Top 5%)!  </span>
      </div>
      <div className="news">
          <span className="time">2025.07</span>
          <span className="item">🎉 Receive HKUST RedBird Academic Excellence Award in 2024-25! </span>
      </div>
      <div className="news">
          <span className="time">2025.07</span>
          <span className="item">🎉 Our paper "<a className="text-hl" href="https://lynnegao.me/scene-loom/" target="_blank">SceneLoom: Communicating Data with Scene Context</a>" and short paper "<a className="text-hl" href="https://chartmark.github.io/" target="_blank">ChartMark: A Structured Grammar for Chart Annotation</a>" were accepted to IEEE VIS 2025. See you in Vienna 🇦🇹! </span>
      </div>
      <div className="news">
          <span className="time">2025.07</span>
          <span className="item">🎉 Two papers about Human-AI Collaboration for <a className="text-hl" href="https://zhang373.github.io/NeuroSync_Web/" target="_blank">code-based problem solving</a> and <a className="text-hl" href="https://www.youtube.com/watch?v=dN8BIjsodwE" target="_blank">research narratives crafting</a> were accepted to UIST 2025. See you in Busan 🇰🇷! </span>
      </div>
      <div className="news">
          <span className="time">2025.05</span>
          <span className="item">💬 Happy to join Microsoft as a research intern this summer, working with <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/nath/?msockid=3a3da8b9312861113d9dbb76304e6085" target="_blank">Dr. Nathalie Henry Riche</a>, <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/xingx/" target="_blank">Dr. Xing Xie</a>, and <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/yuyua/" target="_blank">Dr. Yuhui Yuan</a>. </span>
        </div>
      <div className="news">
          <span className="time">2025.02</span>
          <span className="item">🎉 Our paper "Reflecting on Design Paradigms of Animated Data Video Tools" and two Late Breaking Work were accepted to CHI 2025. See you in Yokohama 🇯🇵! </span>
        </div>
      <div className="news">
          <span className="time">2025.02</span>
          <span className="item">💬  Glad to serve as an assoiate chair of ACM Creativity & Cognition 2025. </span>
        </div>
      <div className="news">
          <span className="time">2025.01</span>
          <span className="item">🎉 Our paper "Narrative Player: Reviving Data Narratives with Visuals" was accepted to IEEE TVCG. </span>
        </div>
      <div className="news">
          <span className="time">2024.11</span>
          <span className="item">🎉 My master thesis was selected in the <a className="text-hl" href="https://www.csig.org.cn/23/202411/52239.html" target="_blank">CSIG Incentive Program for Master Thesis</a> (CSIG硕士学位论文激励计划, 10 in China)! </span>
        </div>
        <div className="news">
          <span className="time">2024.11</span>
          <span className="item">💬 Passed <a className="text-hl" href="https://cse.hkust.edu.hk/pg/defenses/F24/lshenaj-06-11-2024.html" target="_blank">PhD Qualifying Examination</a> and became a PhD candidate. </span>
        </div>
        <div className="news">
          <span className="time">2024.10</span>
          <span className="item">💬 Presented our paper "WonderFlow" and "Data Director" at <a className="text-hl" href="https://ieeevis.org/year/2024/program/papers.html?filter=titles" target="_blank">IEEE VIS 2024</a> and serve as a student volunteer. </span>
        </div>
        <div className="news">
          <span className="time">2024.10</span>
          <span className="item">🎉 Our paper "Data Playwright: Authoring Data Videos with Annotated Narration" was accepted to IEEE TVCG. </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "PyGWalker: On-the-fly Assistant for Exploratory Visual Data Analysis" was accepted to IEEE VIS 2024 and recoginzed as the <a className="text-hl" href="https://ieeevis.org/year/2024/program/awards/awards" target="_blank">Best Short Paper Award</a>! </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "ChartInsights: Evaluating Multimodal Large Language Models for Low-Level Chart Question Answering" was accepted to EMNLP 2024 findings. </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "NotePlayer: Engaging Jupyter Notebooks for Dynamic Presentation of Analytical Processes" was accepted to UIST 2024. </span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">🎉 Our paper "From Data to Story: Towards Automatic Animated Data Video Creation with LLM-based Multi-Agent Systems" was accepted to IEEE VIS 2024 Gen4DS Workshop. </span>
        </div>
        <div className="news">
          <span className="time">2024.07</span>
          <span className="item">💬 Attend ChinaVis 2024 Hong Kong and serve as a conference volunteer. </span>
        </div>
        <div className="news">
          <span className="time">2024.06</span>
          <span className="item">🎉 Our paper "WonderFlow: Narration-Centric Design of Animated Data Videos" was accepted to IEEE TVCG. </span>
        </div>
        <div className="news">
          <span className="time">2023.10</span>
          <span className="item">💬 Presenting our paper "Data Player" at IEEE VIS 2023 in Melbourne, Australia 🇦🇺. </span>
        </div>
        <div className="news">
          <span className="time">2023.08</span>
          <span className="item">🎉 I was awarded the RedBird PhD Award of HKUST and will start my Ph.D journey. </span>
        </div>
        <div className="news">
          <span className="time">2023.07</span>
          <span className="item">🎉 Our paper "Data Player: Automatic Generation of Data Videos with Narration-Animation Interplay" was accepted to IEEE VIS 2023. </span>
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
        {current > 6 ? <Button type="text" onClick={showLess}>⬆ Show Less</Button> : null}
      </div>
      
    </div>
  )
}

export default News