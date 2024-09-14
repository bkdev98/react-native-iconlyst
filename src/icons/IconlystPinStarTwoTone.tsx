import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.974 10.527C4.974 15.882 11.295 21 12.5 21c1.204 0 7.526-5.118 7.526-10.473a7.526 7.526 0 1 0-15.052 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.917 7.09.696 1.39c.07.137.2.232.352.253l1.556.224a.46.46 0 0 1 .26.788l-1.126 1.081a.46.46 0 0 0-.134.41l.266 1.526a.467.467 0 0 1-.68.487l-1.39-.72a.47.47 0 0 0-.436 0l-1.391.72a.467.467 0 0 1-.68-.487l.266-1.526a.46.46 0 0 0-.134-.409l-1.127-1.08a.461.461 0 0 1 .26-.79l1.556-.224a.47.47 0 0 0 .352-.252l.697-1.39a.471.471 0 0 1 .837 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinStarTwoTone;
