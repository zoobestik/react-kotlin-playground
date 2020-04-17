import React, { Component, createElement, createRef } from 'react';
import PropTypes from 'prop-types';
import playground from 'kotlin-playground';

const EVENTS = [
    'onChange',
    'onConsoleOpen',
    'onConsoleClose',
    'getInstance',
    'getJsCode',
    'onRun',
    'onError',
];

const DATA_ATTRS = [
    'version',
    'targetPlatform',
    'highlightOnly',
    'jsLibs',
    'minCompilerVersion',
    'autocomplete',
    'outputHeight',
];

function upper2dash(str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}

function normalizeAttribute(name) {
    let attr = name;
    if (DATA_ATTRS.indexOf(name) !== -1) attr = 'data-' + attr;
    return upper2dash(attr);
}

const eventsPropTypes = EVENTS.reduce((types, name) => {
    types[name] = PropTypes.func;
    return types;
}, {});

class ReactKotlinPlayground extends Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.code = createRef();

        EVENTS.forEach(event => {
            if (!this[event]) this[event] = this.createProxy(event);
        });
    }

    createProxy(name) {
        return ((...args) => {
            if (this.props[name]) this.props[name](...args);
        });
    }

    componentDidMount() {
        const eventFunctions = EVENTS.reduce((events, name) => {
            events[name] = this[name] || this.props[name];
            return events;
        }, {})

        playground(this.code.current, eventFunctions);
    }

    render() {
        const { children, ...props } = this.props;

        const elementProps = Object.keys(props).reduce((result, name) => {
            if (EVENTS.indexOf(name) === -1) result[normalizeAttribute(name)] = props[name];
            return result;
        }, {});

        return createElement('code', { ...elementProps, ref: this.code }, children);
    }
}

function cloneProps(props) {
    const clonedProps = { ...props };

    Object.keys(props).forEach(name => {
        clonedProps[normalizeAttribute(name)] = props[name];
    });

    return clonedProps;
}

ReactKotlinPlayground.propTypes = {
    children: PropTypes.node,
    ...eventsPropTypes,
    ...cloneProps({
        version: PropTypes.string,
        args: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        targetPlatform: PropTypes.oneOf(['junit', 'canvas', 'js', 'java']),
        highlightOnly: PropTypes.oneOf(['nocursor']),
        jsLibs: PropTypes.string,
        autoIndent: PropTypes.bool,
        theme: PropTypes.string,
        mode: PropTypes.oneOf(['kotlin', 'js', 'java', 'groovy', 'xml', 'c', 'shell', 'swift', 'obj-c']),
        minCompilerVersion: PropTypes.string,
        autocomplete: PropTypes.bool,
        highlightOnFly: PropTypes.bool,
        indent: PropTypes.number,
        lines: PropTypes.bool,
        from: PropTypes.number,
        to: PropTypes.number,
        outputHeight: PropTypes.number,
        matchBrackets: PropTypes.bool,
    }),
};

export default ReactKotlinPlayground;
