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
            <span style={{ fontSize: 17, fontFamily: 'sans-serif', fontWeight: 300, color: 'rgb(40, 40, 40)' }}>
              <span>Senior Researcher, Future Media Experience Group </span>
              <span>@ Microsoft Research Asia</span>
            </span>
            {/* <span style={{ fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300, paddingTop: 3 }}> Human-AI Collaboration / Data Storytelling /  Data Visualization / Human-Computer Interaction  </span> */}
            <span style={{ fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300, paddingTop: 3 }}> Human Agency 🧭 / Human-AI Collaboration 🤝 / Data Storytelling 💭 / Visual Data Analysis 📈 </span>
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
          Hello! I'm a Senior Researcher in the <a className="text-hl" href="https://www.microsoft.com/en-us/research/group/internet-media/" target="_blank">Future Media Experience Group</a> at <a className="text-hl" href="https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/" target="_blank">Microsoft Research Asia</a>. I received my Ph.D. in Department of Computer Science and Engineering at The Hong Kong University of Science and Technology, advised by <a className="text-hl" href="http://huamin.org/" target="_blank">Prof. Huamin Qu</a>, affiliated with <a className="text-hl" href="http://vis.cse.ust.hk/" target="_blank">VisLab</a>. 
          {/* Prior to that, I received my master's degree with honor in School of Software at Tsinghua University, advised by <a className="text-hl" href="https://www.thss.tsinghua.edu.cn/en/faculty/jianminwang.htm" target="_blank">Prof. Jianmin Wang</a>. I have also conducted research at Microsoft with <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/yanlu/" target="_blank">Dr. Yan Lu</a> (Beijing), <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/wangyun/" target="_blank">Dr. Yun Wang</a> (Hong Kong), <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/nath/?msockid=3a3da8b9312861113d9dbb76304e6085" target="_blank">Dr. Nathalie Henry Riche</a> (Seattle), and <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/xingx/" target="_blank">Dr. Xing Xie</a> (Beijing). */}
          {/* ,  and <a className="text-hl" href="https://scholar.google.com/citations?user=PzyvzksAAAAJ&hl" target="_blank">Dr. Yuhui Yuan</a> (Beijing). */}
          {/* in multiple groups, like <a className="text-hl" href="https://www.microsoft.com/en-us/research/group/media-computing-group/" target="_blank">Future Media Experience Team</a>, <a className="text-hl" href="https://www.microsoft.com/en-us/research/group/epic/" target="_blank">EPIC (Extended Perception, Interaction & Cognition) Research Group</a>, <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/xingx/" target="_blank">Dr. Xing Xie</a> (Beijing), <a className="text-hl" href="https://www.microsoft.com/en-us/research/people/yanlu/" target="_blank">Dr. Yan Lu</a> (Beijing), and <a className="text-hl" href="https://scholar.google.com/citations?user=PzyvzksAAAAJ&hl" target="_blank">Dr. Yuhui Yuan</a> (Beijing) */}

        </p>
        
        <p>
          My research advances human agency and AI's capacity to understand human intent in tandem, investigating how humans and AI can collaborate and co-create in the era of GenAI. I aim to enable people to more effectively express, create, and disseminate information, while developing AI systems that are not only increasingly autonomous, but increasingly attuned to human intent.
          I am honored to have received multiple 🏆 Best Paper/Honorable Mention awards for my research at leading conferences (<a className="hl2">CHI 2026</a>, <a className="hl2">UIST 2025</a>, <a className="hl2">IEEE VIS 2024</a>, and <a className="hl2">CIKM 2022</a>). Specifically, I study:

          {/* My research interest is to shape how humans and AI collaborate and co-create in the era of GenAI, empowering people to understand, express, create, and disseminate information, while preserving human agency as AI becomes increasingly autonomous.  */}
          {/* I explore this through <a className="hl">shared, manipulable representations</a> that let human intent be expressed, inspected, revised, and carried forward across the human-AI co-creation lifecycle.  */}
          <ul>
            <li><a className="hl">Human-AI Collaboration</a>: modeling the synergy of prompts and interactions in human–GenAI co-creation. Please refer to our <a className="text-hl" href="https://shenleixian.github.io/pdf/IAI.pdf" target="_blank">theory paper (CHI'26)</a>.</li>
            <li><a className="hl">Data Storytelling</a>: turning visualizations into engaging, adaptive data stories. Please refer to our <a className="text-hl" href="https://shenleixian.github.io/pdf/DV_Survey.pdf" target="_blank">reflection paper (CHI'25)</a>. </li>
            <li><a className="hl">Visual Data Analysis</a>: helping users express and act on data analysis intents through multiple modalities. Please refer to our <a className="text-hl" href="https://arxiv.org/pdf/2109.03506" target="_blank">survey paper (TVCG'23)</a>.</li>
          </ul>
          {/* <img src="./img/overview.png" style={{ display: 'block', margin: '0 auto', maxWidth: '72%', height: 'auto' }} /> */}
          {/* <Divider /> */}
          {/* <br></br> */}
          {/* <a className="hl"> 🔥 I am currently on the job market. Please reach out if you know of opportunities for Postdoc, Research Scientist, or related positions. Open to chat!</a> */}

        </p>

      </div>


    </div>
  )
}

export default About