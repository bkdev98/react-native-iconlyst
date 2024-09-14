import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphLineBulk = ({
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
      d="M16.218 2.5H7.784C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.284 5.53h8.433c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.891 14.963a.754.754 0 0 1-1.053-.133l-2.387-3.075-2.729 2.136a.75.75 0 0 1-1.056-.133l-2.912-3.78a.75.75 0 1 1 1.188-.916l2.451 3.181 2.727-2.134a.75.75 0 0 1 .553-.153.76.76 0 0 1 .501.284l2.85 3.67a.75.75 0 0 1-.133 1.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphLineBulk;
