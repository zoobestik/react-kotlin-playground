# CSSO Webpack Plugin

[![npm][npm]][npm-url]
[![dependencies](https://img.shields.io/david/zoobestik/react-kotlin-playground.svg)](https://david-dm.org/zoobestik/react-kotlin-playground)
[![downloads](https://img.shields.io/npm/dm/react-kotlin-playground.svg)](http://npm-stats.com/~packages/react-kotlin-playground)

React wrapper for [kotlin-playground](https://github.com/JetBrains/kotlin-playground#options) widget.

## Install

```bash
npm i --save react-kotlin-playground kotlin-playground
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import KotlinPlayground from 'react-kotlin-playground';

ReactDOM.render(<KotlinPlayground mode="kotlin">
    <code>
        fun main(args: Array<String>) {
        //sampleStart
            println("Hello World")
        //sampleEnd
        }
    </code>
</KotlinPlayground>, container);
```

## API

Supported all options from [original library](https://github.com/JetBrains/kotlin-playground#options)

As in react props style - without `data-` prefix and in camelCase, like

```jsx
<KotlinPlayground
    autoIndent={2}
    targetPlatform="js"
    {/* ...and any other */ }
>...</KotlinPlayground>
```

**Or** as html attrs style - like in original library:

```jsx
<KotlinPlayground
    auto-indent={2}
    data-target-platform="js"
    {/* ...and any other */ }
>...</KotlinPlayground>
```

[More props](es/index.js#L98) options

## Acknowledgements

[![Develop By](https://img.shields.io/badge/develop%20by-zoobestik-blue.svg?style=flat)](https://ru.linkedin.com/in/kbchernenko) [![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

[npm]: https://img.shields.io/npm/v/react-kotlin-playground.svg
[npm-url]: https://npmjs.com/package/react-kotlin-playground
[node]: https://img.shields.io/node/v/react-kotlin-playground.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/zoobestik/react-kotlin-playground.svg
[deps-url]: https://david-dm.org/zoobestik/react-kotlin-playground
[tests]: http://img.shields.io/travis/zoobestik/react-kotlin-playground.svg
[tests-url]: https://travis-ci.org/zoobestik/react-kotlin-playground
[cover]: https://coveralls.io/repos/github/zoobestik/react-kotlin-playground/badge.svg
[cover-url]: https://coveralls.io/github/zoobestik/react-kotlin-playground
