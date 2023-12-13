import { Component, ReactNode } from 'react';

export interface ReactKotlinPlaygroundProps {
    className?: string;
    children: ReactNode,
    playground: (node: any, fn: any) => void,

    onChange: (Event) => void
    onConsoleOpen: (Event) => void
    onConsoleClose: (Event) => void
    getInstance: (Event) => void
    getJsCode: (Event) => void
    onRun: (Event) => void
    onError: (Event) => void

    version: string,
    args: string | string[],
    targetPlatform: "junit" | "canvas" | "js" | "java",
    highlightOnly: null | "nocursor",
    jsLibs: string,
    autoIndent: boolean,
    theme: string,
    mode: "kotlin" | "js" | "java" | "groovy" | "xml" | "c" | "shell" | "swift" | "obj-c",
    minCompilerVersion: string,
    autocomplete: boolean,
    highlightOnFly: boolean,
    indent: number,
    lines: boolean,
    from: number,
    to: number,
    outputHeight: number,
    matchBrackets: boolean,
    shorterHeight: number,
}

declare const ReactKotlinPlayground: Component<ReactKotlinPlaygroundProps>;

export default ReactKotlinPlayground;
