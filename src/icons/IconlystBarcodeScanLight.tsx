import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanLight = ({
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
      d="M17.545 13.171h1.173v-2.347h-1.173z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.85 13.171v-2.347"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.979 13.171h1.173v-2.347H8.979z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.281 13.171v-2.347M21 7.973v-1.08A3.89 3.89 0 0 0 17.107 3H15.85M3 7.973v-1.08A3.89 3.89 0 0 1 6.893 3h1.29M3 16.027v1.08A3.89 3.89 0 0 0 6.893 21H8.15M21 16.027v1.08A3.893 3.893 0 0 1 17.108 21h-1.29"
    />
  </Svg>
);
export default IconlystBarcodeScanLight;
