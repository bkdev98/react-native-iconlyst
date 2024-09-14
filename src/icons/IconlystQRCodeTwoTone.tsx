import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeTwoTone = ({
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
      d="M5.35 3.242H8.4a1.85 1.85 0 0 1 1.85 1.85v3.049a1.85 1.85 0 0 1-1.85 1.85H5.35A1.85 1.85 0 0 1 3.5 8.142V5.093a1.85 1.85 0 0 1 1.85-1.85"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.875 6.613v.012M6.875 17.864v.011"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.35 14.492H8.4a1.85 1.85 0 0 1 1.85 1.85v3.049a1.85 1.85 0 0 1-1.85 1.85H5.35a1.85 1.85 0 0 1-1.851-1.85v-3.048a1.85 1.85 0 0 1 1.85-1.85"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.6 21.242h3.049a1.85 1.85 0 0 0 1.85-1.851v-3.048a1.85 1.85 0 0 0-1.85-1.85H16.6a1.85 1.85 0 0 0-1.851 1.85v3.048a1.85 1.85 0 0 0 1.85 1.85"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.125 17.867v-.011M14.75 3.238v.012M21.5 6.617V4.713c0-.812-.659-1.47-1.47-1.47h-1.905M21.5 9.99h-3.375M18.125 6.617h-1.904c-.812 0-1.471.659-1.471 1.47v1.905"
    />
  </Svg>
);
export default IconlystQRCodeTwoTone;
