interface MATERIALS {
  Paper?: string;
  [key]?: string;
}

// declare const paperCategories = ['va', 'vis+ai', 'story', 'transform', 'art', 'literacy', 'selected', 'others'] as const
declare const paperCategories = ['vda','story', 'selected', 'others'] as const
type paperCategory = typeof paperCategories[number]

interface PAPER {
  category: paperCategory[];
  thumb: string;
  title: string;
  authorsB: string;
  authorsA: string;
  type: "Journal" | "Other" | "Patent";
  year: number;
  abbr: string;
  full: string;
  honor: string;
  materials: MATERIALS;
}

interface PATENT {
  title: string;
  authorsB: string;
  authorsA: string;
  year: number;
  date: string;
  country: string;
  number: string;
  state: string;
}

export {
  MATERIALS,
  paperCategory,
  PAPER,
  PATENT
}