import { Divider } from "antd"
import './About.css'

function About() {
  return (
    <div id="about">
      <div className="avatar">
        <img src="/img/slx.jpg" />
        <div className="greeting">
          <div>
            <span style={{ fontFamily: 'semibold', fontSize: 28 }}><span className="bg-hl">Leixian Shen</span></span>
            <span style={{ fontFamily: 'SimSun', fontWeight: 300, marginLeft: 5 }}>(沈磊贤)</span>
          </div>

          <div className="positions">
            <span style={{ fontSize: 18, fontFamily: 'sans-serif', fontWeight: 300, color: 'rgb(40, 40, 40)' }}>
              <span>Senior Researcher, Future Media Experience Group </span>
              <span>@ Microsoft Research Asia</span>
            </span>
            {/* <span style={{ fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300, paddingTop: 3 }}> Human-AI Collaboration / Data Storytelling /  Data Visualization / Human-Computer Interaction  </span> */}
            <span style={{ fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300, paddingTop: 3 }}> Human-AI Collaboration 🤝 / Data Storytelling 💭 /  Data Visualization 📈 / Human-Computer Interaction 🤖  </span>
          </div>

          <div className="links">
            <a href="mailto:lshenaj@connect.ust.hk"><i className="fa-solid fa-envelope fa-xl"></i></a>
            <a href="https://scholar.google.com/citations?user=NxVwq4cAAAAJ&hl=en&sortby=pubdate"><i className="fa-solid fa-graduation-cap fa-xl"></i></a>
            <a href="https://www.researchgate.net/profile/Shen-Leixian"><i className="fa-brands fa-researchgate fa-xl"></i></a>
          </div>
        </div>
      </div>

      <Divider />
      <div className="content">
        <p>
          Hello! I'm a Senior Researcher in the Future Media Experience Group at Microsoft Research Asia. I received my Ph.D. in Department of Computer Science and Engineering at The Hong Kong University of Science and Technology, advised by <a className="text-hl" href="http://huamin.org/" target="_blank">Prof. Huamin Qu</a>, affiliated with <a className="text-hl" href="http://vis.cse.ust.hk/" target="_blank">VisLab</a>. 
        </p>
        
        <p>
          My research interest is to democratize GenAI application (especially in data storytelling and visual data analysis) through the intersection of Artificial Intelligence (<a className="hl2">AI</a>), Visualization (<a className="hl2">VIS</a>),  Human-Computer Interaction (<a className="hl2">HCI</a>), and Data Science (<a className="hl2">DS</a>). I aim to empower everyone to be the analyst and story director of their data. Specifically, I study:
          <ul>
            <li><a className="hl">Human-AI Collaboration</a>: model the synergy of prompts and interactions in human–GenAI collaboration; leverage interaction-augmented instruction to provide flexible yet fine-grained control of GenAI; advance this vision by building theoretical frameworks, designing interaction paradigms, and developing GenAI application systems. </li>
            <li><a className="hl">Data Storytelling</a>: transform visualizations into engaging data stories, such as data videos, by designing and developing authoring systems, automatic recommendation algorithms, multi-agent systems, human-AI collaboration paradigms, and their scenario applications, facilitating communication. </li>
            <li><a className="hl">Visual Data Analysis</a>: leverage multiple modalities (e.g., natural language, examples, and WIMP) to help users express diverse data analysis intents; utilize AI to extract data insights, generate data visualizations, and understand visualizations, enabling intuitive analysis. </li>
          </ul>
          <img src="./img/overview.png" style={{ display: 'block', margin: '0 auto', maxWidth: '72%', height: 'auto' }} />
        </p>

      </div>


    </div>
  )
}

export default About