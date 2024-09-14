import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSignBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.262 4.405a2.03 2.03 0 1 1 3.934.705l3.253 3.45a.75.75 0 0 1-1.092 1.03l-3.17-3.363a2.02 2.02 0 0 1-1.788 0L8.22 9.59a.75.75 0 1 1-1.09-1.03l3.258-3.448a2 2 0 0 1-.127-.707m1.66.379a1 1 0 0 0-.068-.082.53.53 0 1 1 .069.082"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.08 8.576c-1.16 0-2.14.414-2.827 1.152-.684.735-1.042 1.75-1.042 2.89v4.964c0 1.142.356 2.156 1.04 2.89.687.74 1.667 1.153 2.83 1.153h9.835c1.162 0 2.143-.413 2.831-1.152.684-.734 1.041-1.75 1.041-2.89v-4.964c0-1.141-.357-2.156-1.04-2.89-.688-.739-1.669-1.153-2.831-1.153zm2.35 3.717a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75m5.14 0a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M9.818 17.73a.75.75 0 0 0 1.056-.102A1.45 1.45 0 0 1 12 17.097c.453 0 .857.205 1.126.531a.75.75 0 1 0 1.157-.954A2.95 2.95 0 0 0 12 15.597c-.92 0-1.742.42-2.284 1.077a.75.75 0 0 0 .102 1.056"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseSignBulk;
