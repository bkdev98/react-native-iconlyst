import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarDeleteTwoTone = ({
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
      d="M17.358 13.42a3.79 3.79 0 1 1 0 7.58 3.79 3.79 0 0 1 0-7.58"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.454 16.307 1.807 1.806m0-1.806-1.807 1.806"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.32 11.048h1.573M6.551 11.048h1.573M3.356 7.385c5.215.74 10.509.74 15.724 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.097 10.81c0-.708-.227-1.4-.646-1.971L17.43 7.47a1.6 1.6 0 0 1-.196-.374l-.918-2.55a1.96 1.96 0 0 0-1.513-1.266 23 23 0 0 0-7.147 0 1.96 1.96 0 0 0-1.505 1.267l-.918 2.55a1.5 1.5 0 0 1-.195.356L4.002 8.881a3.3 3.3 0 0 0-.63 1.946l-.013 4.554a.875.875 0 0 0 .874.878h1.734a.875.875 0 0 0 .875-.875v-.358c0-.483.391-.875.874-.875h4.308"
    />
  </Svg>
);
export default IconlystCarDeleteTwoTone;
