import React, { Component } from 'react';
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
});

class ReactKotlinPlayground extends Component {
    constructor(props, ...args) {
        super(props, ...args);
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

        playground('code', eventFunctions);
    }

    render() {
        const [code, [...events], ...props] = this.props;
        return <code { ...props }>{ code }</code>;
    }
}

ReactKotlinPlayground.propTypes = {
    code: PropTypes.string,

    ...eventsPropTypes,

    'auto-indent': PropTypes.bool,
    theme: PropTypes.bool,
    mode: PropTypes.oneOf('kotlin', 'js', 'java', 'groovy', 'xml', 'c', 'shell', 'swift', 'obj-c'),
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
