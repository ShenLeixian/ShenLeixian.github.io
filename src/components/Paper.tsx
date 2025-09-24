import { Row, Col } from "antd"
import { PAPER } from "../typings/types"
import './Publication.css'
import { FilePdfOutlined, HomeOutlined, VideoCameraOutlined, GlobalOutlined, GithubOutlined, SnippetsOutlined, PrinterOutlined, PaperClipOutlined, StarFilled} from '@ant-design/icons';

interface Props {
  selected: PAPER
}

function Paper (props: Props) {
  const paper = props.selected

  const getMaterialIcon = (type: string) => {
    switch(type) {
      case 'Paper': 
        return <FilePdfOutlined />
      case 'Video': 
        return <VideoCameraOutlined />
      case 'Homepage':
        return <HomeOutlined />
      case 'Github':
        return <GithubOutlined />
      case 'arXiv':
        return<PrinterOutlined />
      case 'DOI':
        return <PaperClipOutlined />
      case 'Appendix':
        return <SnippetsOutlined />
      case 'Demo':
        return <GlobalOutlined />
      default:
        return <SnippetsOutlined />
    }
  }


  return (
    <Row className="paper">
      <Col span={5} className="thumb">
        <img src={`/${paper.thumb}`} alt="" />
      </Col>
      <Col span={19} className="info">
        <p><a href={paper.materials.Paper} target="_blank" className="title">{paper.title}</a></p>
        <p className="author-list">
          <span className="authors">{paper.authorsA}</span>
          <span className="me">Leixian Shen</span>
          <span className="authors">{paper.authorsB}</span>
        </p>
        <p className="pub">
          <span className="abbr">{paper.abbr}</span>
          <span className="full">{paper.full}</span>
        </p>
        {paper.honor.length !== 0 ? (
          <div className="honor">
            {paper.honor.split(', ').map((honor, index) => {
              let link = '';
              let icon = null;
              
              if (honor.startsWith('Best')) {
                icon = <span style={{marginRight: 4}}>🏆</span>;
              } else if (honor.includes('Most Influential')) {
                icon = <StarFilled style={{color: '#faad14', marginRight: 4}} />;
                link = 'https://www.paperdigest.org/2025/03/most-influential-arxiv-human-computer-interaction-papers-2025-03-version/';
              } else if (honor.includes('Rank')) {
                icon = <StarFilled style={{color: '#faad14', marginRight: 4}} />;
                link = 'https://scholar.google.com/citations?hl=en&vq=eng_computergraphics&view_op=list_hcore&venue=VQADSo1msCoJ.2025';
              } else if (honor.includes('Highlight')) {
                icon = <StarFilled style={{color: '#faad14', marginRight: 4}} />;
                link = 'https://mp.weixin.qq.com/s/_skvihtfKRv82SpBk5KqEg';
              } else if (honor.includes('Github')) {
                icon = <StarFilled style={{color: '#faad14', marginRight: 4}} />;
              }
              
              return (
                <p key={index}>
                  {icon}
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {honor}
                    </a>
                  ) : (
                    honor
                  )}
                </p>
              );
            })}
          </div>
        ) : null}
        
        <div className="materials-container">
          <div className="materials">
            {Object.entries(paper.materials).map((entry: [string, string]) => (
              <a className="material" 
                href={entry[1]}
                target="_blank"
                key={entry[0]}>
                  {getMaterialIcon(entry[0])}
                  <span style={{marginLeft: 4}}>{entry[0]}</span>
              </a>
            ))}
          </div>
          
          <div className="category-tags">
            {paper.category.filter(cat => cat !== 'selected').map((cat, index) => {
              let fullName = '';
              switch(cat) {
                case 'hai':
                  fullName = 'Human-AI Collaboration';
                  break;
                case 'story':
                  fullName = 'Data Storytelling';
                  break;
                case 'vda':
                  fullName = 'Visual Data Analysis';
                  break;
                default:
                  fullName = cat;
              }
              
              return (
                <span 
                  key={index} 
                  className="category-tag"
                  title={fullName}
                >
                  {cat.toUpperCase()}
                </span>
              );
            })}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Paper