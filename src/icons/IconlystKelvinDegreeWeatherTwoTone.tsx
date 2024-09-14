import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinDegreeWeatherTwoTone = ({
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
      d="M3.477 3.148v.038m.15-.03a.156.156 0 1 1-.312 0 .156.156 0 0 1 .313 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.307 9.937a3.561 3.561 0 1 1 5.031 4.805"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.432 13.904c-1.951.018-3.528 1.328-3.528 3.56A3.56 3.56 0 0 0 7 20.707c.52.21 1.037.292 1.43.292h8.42c.393 0 .912-.077 1.438-.288a3.56 3.56 0 0 0 2.091-3.249c0-2.231-1.576-3.541-3.526-3.559 0-1.403-1.102-4.21-4.21-4.21-3.11 0-4.21 2.807-4.21 4.21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.445 4.334v4.055m2.932-4.055L5.45 6.764M8.378 8.39l-2.041-2.32"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKelvinDegreeWeatherTwoTone;
