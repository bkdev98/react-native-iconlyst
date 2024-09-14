import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLeftBoxBulk = ({
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
      d="M20.473 8.534c0-2.864-2.012-4.788-5.007-4.788H8.338c-2.995 0-5.007 1.924-5.007 4.788V16.1c0 2.864 2.012 4.788 5.007 4.788h7.128c2.995 0 5.007-1.924 5.007-4.788z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.566 11.742H13.26a.744.744 0 0 1-.692-.462.8.8 0 0 1-.059-.288V6.687a.75.75 0 0 1 1.5 0v2.494l5.432-5.43a.75.75 0 0 1 1.06 1.06l-5.43 5.431h2.495a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownLeftBoxBulk;