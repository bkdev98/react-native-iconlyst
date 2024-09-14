import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinPumpLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.215 10.904a7.904 7.904 0 1 0-12.323 6.554M17.84 14.529l2.137-.615.614 2.137"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.98 21 2.254-3.636 4.93 1.476 2.815-4.926M11.955 10.53h-1.892v2.709h1.95c.792 0 1.425-.68 1.348-1.488-.067-.705-.698-1.222-1.406-1.222"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.955 7.82h-1.892v2.71h1.95c.792 0 1.425-.68 1.348-1.488-.067-.705-.698-1.222-1.406-1.222M11.473 14.039v-.799M11.473 7.818V7.02"
    />
  </Svg>
);
export default IconlystBitcoinPumpLight;
