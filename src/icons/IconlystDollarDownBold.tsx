import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarDownBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.935 12.994v.262a.75.75 0 0 1-1.5 0v-.255h-.784a.75.75 0 0 1 0-1.5h2.216a.44.44 0 0 0 .443-.44.44.44 0 0 0-.443-.44h-1.364a1.94 1.94 0 0 1-.068-3.883v-.26a.75.75 0 0 1 1.5 0v.253h.784a.75.75 0 0 1 0 1.5h-2.216a.443.443 0 0 0-.443.441c0 .248.2.45.443.45h1.364c1.071 0 1.943.87 1.943 1.938a1.94 1.94 0 0 1-1.875 1.934m-1.238-10.76c-4.764 0-8.64 3.876-8.64 8.641 0 .4.035.79.09 1.173.015.104.085.19.178.237.312.16.587.4.785.72l1.327 2.137a.3.3 0 0 0 .34.129l3.246-.968a2.004 2.004 0 0 1 2.307.923l.955 1.67c.07.123.218.178.357.15a1.989 1.989 0 0 1 2.293 1.4c.057.197.268.327.452.24 2.923-1.387 4.951-4.365 4.951-7.81 0-4.766-3.876-8.642-8.64-8.642"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.23 18.29a.753.753 0 0 0-.93.512l-.122.425-1.933-3.379a.75.75 0 0 0-.865-.347L6 16.809l-1.952-3.143a.75.75 0 0 0-1.274.79l2.253 3.63a.75.75 0 0 0 .851.323l4.361-1.3 1.605 2.805-.368-.104a.746.746 0 0 0-.927.514.75.75 0 0 0 .515.927l2.136.61q.104.03.207.03h.003l.004-.002a.7.7 0 0 0 .321-.085c.015-.006.032-.004.047-.012.013-.008.021-.02.033-.03a.7.7 0 0 0 .13-.113c.023-.023.05-.043.07-.072a.7.7 0 0 0 .097-.197c.006-.019.017-.035.022-.055l.608-2.106a.75.75 0 0 0-.513-.928"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarDownBold;
