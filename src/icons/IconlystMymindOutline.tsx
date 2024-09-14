import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMymindOutline = ({
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
      d="M12.148 7.712a.75.75 0 0 1 .926.27l3.6 5.4a.75.75 0 0 1-.112.965l-1.85 1.723a.75.75 0 0 1-1.24-.37l-1.75-7.123a.75.75 0 0 1 .426-.865m2.052 4.663.424 1.727.449-.418z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.031 4.947c-1.528-1.106-3.19-1.47-4.662-.988-1.47.48-2.597 1.757-3.176 3.552-.578 1.794-.585 4.053.162 6.336s2.087 4.101 3.615 5.207 3.19 1.469 4.661.987c1.471-.48 2.598-1.757 3.177-3.552.578-1.794.584-4.053-.163-6.336s-2.087-4.101-3.614-5.206m.88-1.216c1.81 1.31 3.325 3.404 4.16 5.956.835 2.551.85 5.135.164 7.262s-2.097 3.85-4.137 4.518-4.198.111-6.008-1.198c-1.81-1.31-3.325-3.404-4.16-5.955s-.85-5.136-.164-7.263S6.863 3.2 8.903 2.533s4.198-.111 6.007 1.198"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.798 10.257a.96.96 0 1 1 1.92 0 .96.96 0 0 1-1.92 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMymindOutline;
