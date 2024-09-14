import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelciusTemperatureLight = ({
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
      d="M6.323 6v6.022c-1.208.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.793-3.065-2-3.978V6a3 3 0 0 0-6 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.794 16a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.321 10.481v4.046M19.907 9.796a2.127 2.127 0 0 1-3.128 0 2.435 2.435 0 0 1 0-3.308 2.127 2.127 0 0 1 3.128 0M14.769 4.975v.038m.15-.03a.156.156 0 1 1-.312 0 .156.156 0 0 1 .313 0"
    />
  </Svg>
);
export default IconlystCelciusTemperatureLight;
