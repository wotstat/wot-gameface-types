# wot-gameface-types

Types definitions for World of Tanks Gameface

## Installation

```bash
npm install -D wot-gameface-types
```

## Usage

In your TypeScript project, you can import the types as needed:

```typescript
/// <reference types="wot-gameface-types" />
```

or import specific types:

```typescript
/// <reference types="wot-gameface-types/types/engine.d.ts" />
/// <reference types="wot-gameface-types/types/viewEnv.d.ts" />
/// <reference types="wot-gameface-types/types/subViews.d.ts" />
```

## Gameface Libs

You can also include types for [OpenWG Gameface libraries](https://gitlab.com/openwg/wot.gameface) by virtual path import:

```typescript
/// <reference types="wot-gameface-types/types/gameface-libs.d.ts" />

import { pxToRem } from 'gameface:common'
import { debugElement } from 'gameface:debug'
import { MediaContext } from 'gameface:media'
import { ModelObserver } from 'gameface:model'
import { playSound } from 'gameface:sound'
import { showTooltip } from 'gameface:views'
```
