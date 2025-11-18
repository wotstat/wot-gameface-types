type SubView = {
  uid: number
  path: string
  model: Object | null
}

interface SubViews {
  ids: number[];
  get: (id: number) => SubView | null;
}

interface Window {
  subViews: SubViews
}

declare const subViews: SubViews