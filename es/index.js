import React, { Component, createElement, createRef } from 'react';
import PropTypes from 'prop-types';
import playground from 'kotlin-playground';

const events = [
    'onChange',
    'onConsoleOpen',
    'onConsoleClose',
    'getInstance',
    'getJsCode',
    'onRun',
    'onError',
];

const eventsPropTypes = events.reduce((types, name) => {
    types[name] = PropTypes.func;
    return types;
}, {});

class ReactKotlinPlayground extends Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.code = createRef();

        events.forEach(event => {
            if (!this[event]) this[event] = this.createProxy(event);
        });
    }

    createProxy(name) {
        return ((...args) => {
            if (this.props[name]) this.props[name](...args);
        });
    }

    componentDidMount() {
        const eventFunctions = events.reduce((events, name) => {
            events[name] = this[name] || this.props[name];
            return events;
        }, {})

        playground(this.code.current, eventFunctions);
    }

    render() {
        const { children, ...props } = this.props;

        const elementProps = Object.keys(props).reduce((result, name) => {
            if (events.indexOf(name) === -1) result[name] = props[name];
            return result;
        }, {});

        return createElement('code', { ...elementProps, ref: this.code }, children);
    }
}

ReactKotlinPlayground.propTypes = {
    children: PropTypes.node,

    ...eventsPropTypes,

    'data-version': PropTypes.string,
    args: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    'data-target-platform': PropTypes.oneOf(['junit', 'canvas', 'js', 'java']),
    'data-highlight-only': PropTypes.oneOf(['nocursor']),
    'data-js-libs': PropTypes.string,
    'auto-indent': PropTypes.bool,
    theme: PropTypes.string,
    mode: PropTypes.oneOf(['kotlin', 'js', 'java', 'groovy', 'xml', 'c', 'shell', 'swift', 'obj-c']),
    'data-min-compiler-version': PropTypes.string,
    'data-autocomplete': PropTypes.bool,
    'highlight-on-fly': PropTypes.bool,
    indent: PropTypes.number,
    lines: PropTypes.bool,
    from: PropTypes.number,
    to: PropTypes.number,
    'data-output-height': PropTypes.number,
    'match-brackets': PropTypes.bool,
};

export default ReactKotlinPlayground;
