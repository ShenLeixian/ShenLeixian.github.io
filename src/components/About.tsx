import { Divider } from "antd"
import './About.css'

function About() {
  return (
    <div id="about">
      <div className="avatar">
        <img src="/img/slx.jpg" />
        <div className="greeting">
          <div>
            <span style={{ fontFamily: 'semibold', fontSize: 28 }}>Hi! I'm <span className="bg-hl">Leixian Shen</span></span>
            <span style={{ fontFamily: 'SimSun', fontWeight: 300, marginLeft: 5 }}>(沈磊贤)</span>
          </div>

          <div className="positions">
            <span style={{ fontSize: 18, fontFamily: 'sans-serif', fontWeight: 300, color: 'rgb(40, 40, 40)' }}>
              <span>Ph.D. Candidate </span>
              <span>@ HKUST, Hong Kong</span>
            </span>
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
          Hello! I'm a Ph.D candidate in Department of Computer Science and Engineering at The Hong Kong University of Science and Technology, under the supervision of <a className="text-hl" href="http://huamin.org/" target="_blank">Prof. Huamin Qu</a>, affiliated with <a className="text-hl" href="http://vis.cse.ust.hk/" target="_blank">VisLab</a>. Prior to that, I received my master's degree with honor in School of Software at Tsinghua University, under the supervision of Prof. <a className="text-hl" href="https://www.thss.tsinghua.edu.cn/en/faculty/jianminwang.htm" target="_blank">Prof. Jianmin Wang</a>. I have also taken a research internship at Microsoft Research Asia advised by <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/wangyun/" target="_blank">Dr. Yun Wang</a>.
        </p>

        <p>
          My research interest is to democratize <a className="hl">visual data analysis</a> and <a className="hl">data storytelling</a> through the intersection of Data Science (<a className="hl2">DS</a>), Artificial Intelligence (<a className="hl2">AI</a>), Visualization (<a className="hl2">VIS</a>),and  Human-Computer Interaction (<a className="hl2">HCI</a>).  I aim to empower everyone to be the analyst and story director of their data. Specifically,
          <ul>
            <li><a className="hl">Visual Data Dnalysis</a>: leverage multiple modalities (e.g., natural language, examples, and WIMP) to help users in expressing diverse data anlysis intents; utilize AI to extract data insights, generate data visualizations, and understand visualizations, enabling intuitive analysis. </li>
            <li><a className="hl">Data Storytelling</a>: transform visualizations into engaging data stories, such as data videos, by designing and developing authoring systems, automatic recommendation algorithms, multi-agent systems, human-AI collaboration paradigms, and their scenario applications. </li>
          </ul>
          <img src="./img/overview.png" style={{ display: 'block', margin: '0 auto', maxWidth: '73%', height: 'auto' }} />
        </p>

      </div>


    </div>
  )
}

export default About