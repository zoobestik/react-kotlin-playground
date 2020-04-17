# React Kotlin Playground

[![npm][npm]][npm-url]
[![dependencies](https://david-dm.org/zoobestik/react-kotlin-playground/status.svg)](https://david-dm.org/zoobestik/react-kotlin-playground)
[![dependencies](https://david-dm.org/zoobestik/react-kotlin-playground/peer-status.svg)](https://david-dm.org/zoobestik/react-kotlin-playground)
[![downloads](https://img.shields.io/npm/dm/react-kotlin-playground.svg)](http://npm-stats.com/~packages/react-kotlin-playground)

React wrapper for [kotlin-playground](https://github.com/JetBrains/kotlin-playground#options) widget.

## Install

```bash
npm i --save react-kotlin-playground kotlin-playground
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import KotlinPlayground from "react-kotlin-playground";
// For modern bundle:
// import KotlinPlayground from 'react-kotlin-playground/es';

ReactDOM.render(
    <KotlinPlayground mode="kotlin">
        fun main(args: Array&lt;String&gt;){" "}
        {
            //sampleStart
            println("Hello World")
            //sampleEnd
        }
    </KotlinPlayground>,
    container
);
```

## API

| Name          | Type   | Default | Description                     |
| ------------- | ------ | ------- | ------------------------------- |
| **className** | string | null    | Add classes for codewrapper     |
| **children**  | node   |         | **Initial** source code for run |

Plus all [options](https://github.com/JetBrains/kotlin-playground#customizing-editors) and [events](https://github.com/JetBrains/kotlin-playground#options) from original library:

in react props style - without `data-` prefix and in camelCase, like

```jsx
<KotlinPlayground
    autoIndent={2}
    targetPlatform="js"
    {/* ...and any other */ }
>...</KotlinPlayground>
```

**or** in html attrs style - like in original library:

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
