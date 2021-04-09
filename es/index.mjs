import { createElement as h } from "react";
import playground from "kotlin-playground";
import KotlinPlayground from "./component.mjs";

const ReactKotlinPlayground = (props) =>
    h(KotlinPlayground, { playground, ...props });

ReactKotlinPlayground.propTypes = KotlinPlayground.propTypes;

export default ReactKotlinPlayground;
