import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRocketLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.535 20.236c-.248.398-.37.863-.35 1.332M4.586 16.286a2.28 2.28 0 0 1-1.333.34M10.49 7.6l-4.251.33-1.82 1.82a30 30 0 0 1 3.289 2.236 29.4 29.4 0 0 1 5.126 5.127 31 31 0 0 1 2.237 3.278l1.809-1.81.331-4.26"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.435 12.511a22.9 22.9 0 0 1 3.511-5.427s4.757-5.067 9.815-3.034c2.043 4.94-3.025 9.814-3.025 9.814a23 23 0 0 1-5.438 3.521 8.8 8.8 0 0 1-2.004.749l-3.618-3.618q.311-1.029.759-2.005"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.497 11.705a1.342 1.342 0 1 0 0-2.685 1.342 1.342 0 0 0 0 2.685M14.965 4.604l5.253 5.252M6.405 18.426l-1.051 1.041"
    />
  </Svg>
);
export default IconlystRocketLight;
