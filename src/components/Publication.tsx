import { Divider } from "antd"
import { useState } from "react"
import { paperList } from "../assets/info.ts"
import { PAPER, paperCategory } from '../typings/types'
import Paper from "./Paper.tsx"

interface ITEM {
  label: string;
  key: paperCategory | 'all';
}

function Publication() {
  const [current, setCurrent] = useState<string>('all')

  const items: ITEM[] = [
    {
      label: 'All',
      key: 'all'
    },
    {
      label: 'Selected',
      key: 'selected'
    },
    {
      label: 'Data Storytelling',
      key: 'story'
    },
    {
      label: 'Visual Data Analysis',
      key: 'vda'
    },
    {
      label: 'Human-AI Collaboration',
      key: 'hai'
    }
  ]

  // const items: ITEM[] = [
  //   {
  //     label: 'selected',
  //     key: 'selected'
  //   },
  //   {
  //     label: 'all',
  //     key: 'all'
  //   },
  //   {
  //     label: 'storytelling',
  //     key: 'story'
  //   },
  //   {
  //     label: 'human-ai collaboration',
  //     key: 'vis+ai',
  //   },
  //   {
  //     label: 'literacy',
  //     key: 'literacy'
  //   },
  //   {
  //     label: 'data transformation',
  //     key: 'transform',
  //   },
  //   {
  //     label: 'video analysis',
  //     key: 'va',
  //   },
  //   {
  //     label: 'data art',
  //     key: 'art',
  //   },
  //   {
  //     label: 'others',
  //     key: 'others',
  //   },
  // ]

  const onClick = (e: any) => {
    console.log(e)
    setCurrent(e.key)
  }

  const getPaperList = (opt: string) => {
    if (opt === 'all')
      return paperList
    else {
      return paperList.filter((p: any) => p.category.includes(opt))
    }
  }

  return (
    <div id="publication">
      <Divider />
      <div className="sec-title"><span className="bg-hl">Research</span></div>
      <div style={{ marginTop: '1rem' }}>
        {items.map((item: ITEM) => {
          return (
            <button
              key={item.key}
              className={`tag ${item.key === current ? 'tag-active' : ''}`}
              onClick={() => onClick(item)}
            >
              {item.label}
            </button>)
        })}
      </div>

      {/* <div className="paper-list">
        {getPaperList(current).map((paper: PAPER) => 
          <Paper
            key={paper.title}
            selected={paper}
          />
        )}
      </div> */}

      <div className="paper-list">
        {[2025, 2024, 2023, 2022, 2021].map((y: number) => {
          const paperByYear = getPaperList(current).filter((p: PAPER) => p.year === y);

          if (paperByYear.length > 0) {
            return (
              <div key={y}>
                <h2>{y}</h2>
                {paperByYear.map((paper: PAPER) => (
                  <Paper
                    key={paper.title}
                    selected={paper}
                  />
                ))}
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}

export default Publication