import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMoneyDollarOutline = ({
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
      d="M11.882 3.75a7.668 7.668 0 1 0 5.191 13.31l.008-.006.049-.045A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.859 7.188l2.933 2.925a.75.75 0 1 0 1.06-1.062zM12.145 7.06a.75.75 0 0 1 .75.75v.31h.863a.75.75 0 1 1 0 1.5h-1.545a1 1 0 0 1-.136 0h-.649a.504.504 0 1 0 0 1.008h1.434a2.004 2.004 0 0 1 .033 4.008v.302a.75.75 0 0 1-1.5 0v-.302h-.863a.75.75 0 0 1 0-1.5h2.33a.504.504 0 1 0 0-1.008h-1.434a2.004 2.004 0 0 1-.033-4.008v-.31a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMoneyDollarOutline;
