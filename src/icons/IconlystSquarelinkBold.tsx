import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquarelinkBold = ({
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
      d="M6.89 14.661a.97.97 0 0 0 .677-.282.94.94 0 0 0 .276-.67V2.504H3a.5.5 0 0 0-.5.5v11.656z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.657 10.3c0-.657.256-1.273.72-1.734a2.44 2.44 0 0 1 1.733-.718h4.39V6.005c0-.937-.364-1.816-1.027-2.475A3.53 3.53 0 0 0 18 2.505H9.343v11.203A2.452 2.452 0 0 1 6.89 16.16H2.5v1.844c0 .937.364 1.816 1.026 2.475A3.54 3.54 0 0 0 6 21.505h8.657z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.11 9.348a.96.96 0 0 0-.677.282.94.94 0 0 0-.276.67v11.205H18c.917 0 1.818-.374 2.473-1.025a3.47 3.47 0 0 0 1.027-2.475V9.348z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquarelinkBold;
