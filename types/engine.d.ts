type EngineEvent =
  'viewEnv.onDataChanged' |
  'clientResized' |
  'self.onScaleUpdated' |
  'Ready' |
  'subView:destroy' |
  (string & {});


interface Engine {
  whenReady: Promise<void>;
  call: (method: string, ...args) => Promise<any>;
  on: (event: EngineEvent, callback: (...args) => void) => void;
  off: (event: EngineEvent, callback: (...args) => void) => void;
}

interface Window {
  engine: Engine
  model: unknown
}

declare const engine: Engine
declare const model: unknown