import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeTimeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.934 6.028c.854-.893 2.075-1.34 3.532-1.34h3.343c1.474 0 2.711.445 3.578 1.335.864.887 1.269 2.124 1.269 3.531v.703a.75.75 0 0 1-1.5 0v-.703c0-1.126-.32-1.947-.844-2.485-.52-.534-1.33-.88-2.503-.88H9.466c-1.149 0-1.94.344-2.447.875-.512.536-.827 1.36-.827 2.49v7.305c0 1.136.316 1.958.827 2.492.506.529 1.295.87 2.444.867h1.09a.75.75 0 1 1 0 1.5H9.468c-1.457.004-2.679-.437-3.533-1.33-.849-.887-1.243-2.123-1.243-3.529V9.554c0-1.403.394-2.638 1.242-3.526"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.301 2.828c.546-.447 1.27-.578 2.003-.578h1.704c.743 0 1.475.13 2.026.574.587.472.82 1.172.82 1.966v.8a.75.75 0 0 1-1.5 0v-.8c0-.504-.138-.7-.26-.798-.157-.126-.473-.242-1.085-.242h-1.705c-.598 0-.902.115-1.051.238-.118.096-.255.292-.255.802v.791a.75.75 0 0 1-1.5 0v-.79c0-.79.225-1.489.803-1.963M16.18 13.51a3.37 3.37 0 1 0 .001 6.74 3.37 3.37 0 0 0 0-6.74m-4.87 3.37a4.87 4.87 0 1 1 9.74.001 4.87 4.87 0 0 1-9.74 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.03 14.562a.75.75 0 0 1 .75.75v1.45l1.088.65a.75.75 0 1 1-.77 1.288l-1.453-.869a.75.75 0 0 1-.366-.644v-1.876a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChargeTimeOutline;
