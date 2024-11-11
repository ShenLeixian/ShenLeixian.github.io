import './Resume.css'
import { paperList,PatentList } from '../assets/info'
import { PAPER, PATENT } from '../typings/types'

function Resume () {
  let journalFirst = paperList.filter((p)=>p.type === 'Journal')[0].year
  // let otherFirst = paperList.filter((p) => p.type === 'Other')[0].year
  return (
    <div id='cv'>
      <h1>Leixian Shen</h1>
      <div className='contact'>
        <div className='address'>
          <span>Department of Computer Science and Engineering</span>
          <span>The Hong Kong University of Science and Technology</span>
          <span>Big Data Institute.</span>
          <span>Lo Ka Chung University Center</span>
        </div>
        <div className='misc'>
          <span>+852 61699642 <i className="fa-solid fa-phone"></i></span>
          <span><a href="mailto:lshenaj@connect.ust.hk">lshenaj@connect.ust.hk <i className="fa-solid fa-envelope"></i></a></span>
          <span><a href='https://shenleixian.github.io/'>https://shenleixian.github.io/ <i className="fa-solid fa-globe"></i></a></span>
          <span><a href="https://scholar.google.com/citations?user=NxVwq4cAAAAJ&hl=en&sortby=pubdate">@Leixian Shen <i className="fa-solid fa-graduation-cap"></i></a></span>
        </div>
      </div>

      <h3>Education</h3>
      <div>
        <div className="entry">
          <span className="time">2023.08 - now</span>
          <span className="item">
            <span className='cv-hl'>The Hong Kong University of Science and Technology (HKUST), Hong Kong</span>
            <br />
            <span>Ph.D. in Computer Science and Engineering</span>
            <br />
            <span><em>Advisor: </em><a className="text-hl" href="http://huamin.org/" target="_blank">Prof. Huamin Qu</a></span>
          </span>
        </div>
        <div className="entry">
          <span className="time">2020.09 - 2023.06</span>
          <span className="item">
            <span className='cv-hl'>Tsinghua University (THU), Beijing</span>
            <br />
            <span>Master in Software Engineering (<i className="fas fa-award"></i> Graduation with Honor)</span>
            <br />
            <span><em>Thesis: </em>"Research on Task-Driven Visualization Recommendation" (<i className="fas fa-award"></i> Excellent Master Thesis of THU)</span>
            <br />
            <span><em>Advisor: </em><a className="text-hl" href="https://www.thss.tsinghua.edu.cn/faculty/wangjianmin.htm" target="_blank">Prof. Jianmin Wang</a> and <a className="text-hl" href="https://www.thss.tsinghua.edu.cn/faculty/shenenya.htm" target="_blank">Prof. Enya Shen</a></span> 
          </span>
        </div>
        <div className="entry">
          <span className="time">2016.09 - 2020.06</span>
          <span className="item">
            <span className='cv-hl'>Nanjing University of Posts and Telecommunications (NJUPT), Nanjing</span>
            <br />
            <span>Bachelor in Software Engineering (<i className="fas fa-award"></i> Graduation with Honor)</span>
            <br />
            <span><em>Thesis: </em>"High-Precision Indoor Wireless Localization Based on UHF RFID" (<i className="fas fa-award"></i> Excellent Undergraduate Thesis of Jiangsu Province)</span>
            <br />
            <span><em>Advisor: </em><a className="text-hl" href="https://yjs.njupt.edu.cn/dsgl/nocontrol/college/dsfcxq.htm?dsJbxxId=9B9D05C52A832DCFE050007F01006EFE" target="_blank">Prof. Fu Xiao</a> and <a className="text-hl" href="https://yjs.njupt.edu.cn/dsgl/nocontrol/college/dsfcxq.htm?dsJbxxId=9B9D05C52C752DCFE050007F01006EFE" target="_blank">Prof. He Xu</a></span> 
          </span>
        </div>
      </div>

      <h3>Visiting Experience</h3>
      <div>
      <div className="entry">
          <span className="time">2022.04 - 2023.06</span>
          <span className="item">
            <span className='cv-hl'>Microsoft Research Asia (MSRA), Beijing</span>
            <br />
            <span>Research Intern in DKI (Data, Knowledge, and Intelligence) Group </span>
            <br />
            <span><i className="fas fa-award"></i> "Star of Tomorrow" Excellent Internship Award</span>
            <br />
            <span><em>Advisor: </em><a className="text-hl" href="https://www.microsoft.com/en-us/research/people/wangyun/" target="_blank">Dr. Yun Wang</a></span> 
            <br />

          </span>
        </div>
        <div className="entry">
          <span className="time">2019.10 - 2020.05</span>
          <span className="item">
            <span className='cv-hl'>Tsinghua University (THU), Beijing</span>
            <br />
            <span>Visiting Intern in Institute of Trustworthy Networks and Systems</span>
            <br />
            <span><em>Advisor: </em><a className="text-hl" href="http://tns.thss.tsinghua.edu.cn/~yangzheng/" target="_blank">Prof. Zheng Yang</a></span> 
          </span>
        </div>
      </div>


      <h3 id="awards">AWARDS</h3>
      <h4>Honors and Scholarships</h4>
      <div>
      <div className="entry">
          <span className="time">2024</span>
          <span className="item">
            <a className="text-hl" href="https://ieeevis.org/year/2024/program/awards/awards.html" target="_blank">IEEE VIS 2024 Best Short Paper</a>
          </span>
        </div>
        <div className="entry">
          <span className="time">2023</span>
          <span className="item">
            RedBird PhD Award of HKUST
          </span>
        </div>
        <div className="entry">
          <span className="time">2023</span>
          <span className="item">
            "Star of Tomorrow" Excellent Internship Award of MSRA
          </span>
        </div>
        <div className="entry">
          <span className="time">2023</span>
          <span className="item">
            Outstanding Master Graduate of THSS in THU
          </span>
        </div>
        <div className="entry">
          <span className="time">2023</span>
          <span className="item">
            Excellent Master Thesis of THU
          </span>
        </div>
        <div className="entry">
          <span className="time">2022</span>
          <span className="item">
          <a className="text-hl" href="http://www.cikmconference.org/2022/best-paper.html" target="_blank">CIKM 2022 Best Paper Honorable Mention (Demo Track)</a>
          </span>
        </div>
        <div className="entry">
          <span className="time">2022</span>
          <span className="item">
            NSF and SIGWeb Travel Grants
          </span>
        </div>
        <div className="entry">
          <span className="time">2022</span>
          <span className="item">
            First-Class Scholarship for Excellence of THU
          </span>
        </div>
        <div className="entry">
          <span className="time">2021</span>
          <span className="item">
            Jining Talent Scholarship of THU
          </span>
        </div>
        <div className="entry">
          <span className="time">2020</span>
          <span className="item">
            Outstanding Undergraduate Graduate of NJUPT
          </span>
        </div>
        <div className="entry">
          <span className="time">2020</span>
          <span className="item">
            Excellent Undergraduate Thesis of NJUPT and Jiangsu Province
          </span>
        </div>
        <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            Outstanding Student of Jiangsu Province
          </span>
        </div>
        <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            China National Scholarship
          </span>
        </div>
        <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            Innovation Pioneer of NJUPT (Only ten in NJUPT)
          </span>
        </div>
        <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            NIIT Corporate Scholarship of NJUPT
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            Hengtong Optoelectronics Scholarship of NJUPT
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            China National Scholarship for Encouragement
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            Outstanding Youth Volunteer Pioneer of NJUPT
          </span>
        </div>
        <div className="entry">
          <span className="time">2017</span>
          <span className="item">
            China National Scholarship
          </span>
        </div>
        <div className="entry">
          <span className="time">2017-20</span>
          <span className="item">
            Best Student Model of NJUPT
          </span>
        </div>
        <div className="entry">
          <span className="time">2017-20</span>
          <span className="item">
          First-Class Outstanding Student Scholarship of NJUPT
          </span>
        </div>
      </div>

    <h4>Competition Awards</h4>
    <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            Provincial Grand Prize. "Challenge Cup" Curricular Academic Science and Technology Works Competition
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            National First Prize. "3S Cup" College Student IoT Technology and Application Competition
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            Provincial Grand Prize. College Student Computer Design Competition
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            National Second Prize. College Student Service Outsourcing Innovation and Entrepreneurship Competition
          </span>
        </div>
        <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            National Third Prize. Next Generation Internet Technology Innovation Competition
          </span>
        </div>
        <div className="entry">
          <span className="time">2019</span>
          <span className="item">
            National Third Prize. "China Software Cup" College Student Software Design Competition
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            Third runner-up. Aliyun Tianchi Qianli Ma Competition
          </span>
        </div>

        <h4>Fundings</h4>
        <div className="entry">
          <span className="time">2018.12 - 2019.12</span>
          <span className="item">
            <span>CERNET Next Generation Internet Technology Innovation Program</span>
            <br />
            <span>“Smart Library System Based on RFID and IPv6 Network", Principal Investigator (¥ 100,000)</span>
          </span>
        </div>
        <div className="entry">
          <span className="time">2018.08 - 2019.08</span>
          <span className="item">
            <span>NJUPT-YTO Joint Laboratory Innovation Program</span>
            <br />
            <span>"Modern Logistics Management System Based on RFID and NB-IoT", Principal Investigator (¥ 20,000)</span>
          </span>
        </div>
        <div className="entry">
          <span className="time">2018.05 - 2019.05</span>
          <span className="item">
            <span>National College Students Innovation and Entrepreneurship Training Program</span>
            <br />
            <span>"High-Precision Indoor Wireless Localization Based on UHF RFID", Principal Investigator (¥ 20,000)</span>
          </span>
        </div>

    <h3>PUBLICATIONS</h3>
    {/* <span>* denotes equal contribution</span> */}
    {/* <h4>Peer-reviewed Conference and Journal Publications</h4> */}
    <div>
        {paperList.filter((p: PAPER) => p.type === 'Journal').map((paper: PAPER, index: number) => {
          let year = index === 0 ? `${journalFirst}` : ''
          if (index !== 0 && journalFirst !== paper.year) {
            year = `${paper.year}`
            journalFirst = paper.year
          }
          return (
            <div className="entry">
              <span className="time pub-time">  
                <span className="pub-year">{year}</span>
                <span className='pub-index'>[P{index + 1}]</span>
              </span>
              <span className="item">
                {paper.authorsA}<span className='cv-hl' style={{borderBottom: '1px solid #000000' }}>Leixian Shen</span>
                {paper.authorsB.length > 0 ? <>{paper.authorsB}.</> : <>.</>}
                <span style={{ fontWeight: 500, color: '#CA662C' }}> {paper.title}</span>.
                In <em>{paper.full}</em>.
                {paper.honor.length > 0 ? <><br /><span style={{ fontSize: 15, fontWeight: 500, color: '#CA662C', borderBottom: '1px solid #CA662C' }}>🏆 {paper.honor}</span></> : <></>}
              </span>
            </div>)
        })}
    </div>
    {/* <h4>Posters, Extended Abstract, Workshop Papers, and Preprints</h4>
    <div>
      {paperList.filter((p: PAPER) => p.type === 'Other').map((paper: PAPER, index: number) => {
        let year = index === 0 ? `${otherFirst}` : ''
        if (index !== 0 && otherFirst !== paper.year) {
          year = `${paper.year}`
          otherFirst = paper.year
        }
        return (
          <div className="entry">
            <span className="time" style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 10 }}>
              <span style={{ fontWeight: 500 }}>{year}</span>
              <span style={{ fontSize: 14 }}>[W{index + 1}]</span>
            </span>
            <span className="item">
              {paper.authorsA}<span className='cv-hl'>Leixian Shen</span>
              {paper.authorsB.length > 0 ? <>{paper.authorsB}.</> : <>.</>}
              <span style={{ fontWeight: 500, color: '#CA662C'}}> {paper.title}</span>.
              In <em>{paper.full}</em>.
              {paper.honor.length > 0 ? <><br /><span style={{ fontSize: 15, fontWeight: 500, color: '#CA662C', borderBottom: '1px solid #CA662C' }}>🏆 {paper.honor}</span></> : <></>}
            </span>
          </div>)
      })}
    </div> */}


<h3 id="patent">Patents</h3>
<div>
        {PatentList.map((patent: PATENT, index: number) => {
          return (
            <div className="entry">
              <span className="time pub-time">  
                <span className="pub-year"></span>
                <span className='pub-index'>[W{index + 1}]</span>
              </span>
              <span className="item">
                {patent.authorsA}<span className='cv-hl' style={{borderBottom: '1px solid #000000' }}>Leixian Shen</span>
                {patent.authorsB.length > 0 ? <>{patent.authorsB}.</> : <>.</>}
                <span className='cv-hl'> {patent.title}</span>.
                <em>{patent.number}</em>, {patent.date}, {patent.country}. ({patent.state})
              </span>
            </div>)
        })}
    </div>

    <h3 id="talks">TALKS</h3>
    <div>
      <div className="entry">
        <span className="time">2024</span>
        <span className="item">
          <span className='cv-hl'>Facilitating Animated Data Video Creation for Data Storytelling with Human-AI Collaboration</span><br />
            <em>PhD Qualifying Exam presentation (2024.11), HKUST, Hong Kong</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>WonderFlow: Narration-Centric Design of Animated Data Videos</span><br />
            <em>IEEE VIS Conference (2024.10, online), Florida, USA</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>From Data to Story: Towards Automatic Animated Data Video Creation with LLM-based Multi-Agent Systems</span><br />
          <em>Gen4DS workshop in IEEE VIS Conference (2024.10, online), Florida, USA</em>
        </span>
      </div>
      <div className="entry">
        <span className="time">2023</span>
        <span className="item">
          <span className='cv-hl'> Data Player: Automatic Generation of Data Videos with Narration-Animation Interplay</span><br />
          <em>IEEE VIS Conference (2023.10), Melbourne, Australia</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'> GPT-4 Prompt Engineering for Visual Data Analysis and Storytelling</span><br />
          <em>MSRA seminar (2023.06), Beijing and HKUST seminar (2023.09), Hong Kong </em>
        </span>
      </div>
      <div className="entry">
        <span className="time">2022</span>
        <span className="item">
          <span className='cv-hl'> GALVIS: Visualization Construction through Example-Powered Declarative Programming</span><br />
          <em>CIKM Conference (2022.10, online), Atlanta, Georgia, USA</em>
        </span>
      </div>
      <div className="entry">
        <span className="time">2021</span>
        <span className="item">
          <span className='cv-hl'>TaskVis: Task-Oriented Visualization Recommendation</span><br />
          <em>EuroVis Conference (2021.06, online), Zurich, Switzerland</em>
        </span>
      </div>
    </div>

    <h3 id="service">SERVICE</h3>
    <h4>Program Committee</h4>
    <div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>CHI LBW </span> 2024, <span className='cv-hl'>C&C </span> 2025
        </span>
      </div>
    </div>

    <h4>Conference Reviewer</h4>
    <div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>IEEE VIS</span> 2022-24, <span className='cv-hl'>CHI</span> 2024-25, <span className='cv-hl'>CSCW</span> 2023, <span className='cv-hl'>EuroVis</span> 2023-24, <span className='cv-hl'>IUI</span> 2023, <span className='cv-hl'>PacificVis</span> 2023, <span className='cv-hl'>PacificVis (TVCG track)</span> 2025, <span className='cv-hl'>IDC</span> 2024, <span className='cv-hl'>ChinaVis</span> 2022-24, <span className='cv-hl'>C&C</span> 2024
          <br/>
          * Two Special Recognitions for Outstanding Reviews for CHI 2024
        </span>
      </div>
    </div>
 
    <h4>Journal Reviewer</h4>
    <div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>TVCG</span>, <span className='cv-hl'>IJHCI</span> 
        </span>
      </div>
    </div>

    <h4>Conference Volunteer</h4>
    <div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>IEEE VIS</span> 2024, <span className='cv-hl'>ChinaVis</span> 2024, <span className='cv-hl'>BAAI Conference</span> 2020-2022 (Excellent Editor)
        </span>
      </div>
    </div>

    <h4>Teaching</h4>
    <div>
      <div className="entry">
        <span className="time">2023</span>
        <span className="item">
          <span className='cv-hl'>TA for COMP4431 Multimedia Computing, HKUST</span>
        </span>
      </div>
      <div className="entry">
        <span className="time">2024</span>
        <span className="item">
          <span className='cv-hl'>TA for COMP3631 Cryptography, HKUST</span>
        </span>
      </div>
    </div>


      {/* <h3>MEDIA COVERAGE</h3> */}
    </div>
  )
}

export default Resume




    {/* <h3>MENTORING EXPERIENCE</h3>
    <div>
      <div className="entry">
        <span className="time">PhD</span>
        <span className="item">
            <span className="cv-hl"><a href="https://crcrcry.notion.site/" target='_blank'>Ran Chen</a></span>, visiting PhD student at University of Edinburgh
          <br />
            <em>Declarative Construction of Visualization Coordination and Data Transformation [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Rigel: Transforming Tabular Data by Declarative Mapping") + 1}, P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Nebula: A Coordinating Grammar of Graphics") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href="https://shellywhen.github.io/" target='_blank'>Liwenhan Xie</a></span>, PhD student at HKUST
          <br />
          <em>Creating Emordle: Animating Word Cloud for Emotion Expression [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Creating Emordle: Animating Word Cloud for Emotion Expression") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href='https://ahugh19.github.io/' target='_blank'>Junxiu Tang</a></span>, PhD student at Zhejiang Univeristy
          <br />
          <em>Animated Visualization for Visual Data Storytelling [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "What Makes a Data-GIF Understandable?") + 1}, W{paperList.filter(p => p.type === 'Other').findIndex((ele) => ele.title === "Narrative Transitions in Data Videos") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href="http://yiyinyinguu.github.io/" target='_blank'>Lu Ying</a></span>, PhD student at Zhejiang Univeristy
          <br />
          <em>Automatic Generation of Metaphoric Glyph-based Visualization [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "MetaGlyph: Automatic Generation of Metaphoric Glyph-based Visualization") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href="https://maple-possum-c4d.notion.site/Zhongsu-LUO-9a76b04931a848179b6f8488033b3a2a" target='_blank'>Zhongsu Luo</a></span>, PhD student at Zhejiang Univeristy
          <br />
          <em>Data Wrangling [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts") + 1}]</em>
        </span>
      </div>
      <div className="entry">
          <span className="time">Master</span>
        <span className="item">
          <span className="cv-hl"><a href='https://yhuang.top/' target='_blank'>Yanwei Huang</a></span>, Master student at Zhejiang Univeristy
          <br />
            <em>Interactive Table Synthesis with Natural Language [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Interactive Table Synthesis with Natural Language") + 1}, P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Table Illustrator: Puzzle-based Interactive Authoring of Plain Tables") + 1}]</em>
        </span>
      </div>
    </div> */}


    