import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeLight = ({
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
      d="M4.85 3.242H7.9a1.85 1.85 0 0 1 1.85 1.85v3.049a1.85 1.85 0 0 1-1.85 1.85H4.85A1.85 1.85 0 0 1 3 8.142V5.093a1.85 1.85 0 0 1 1.85-1.85"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.375 6.613v.012M6.375 17.864v.011"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.85 14.492H7.9a1.85 1.85 0 0 1 1.85 1.85v3.049a1.85 1.85 0 0 1-1.85 1.85H4.85A1.85 1.85 0 0 1 3 19.392v-3.048a1.85 1.85 0 0 1 1.85-1.85M16.1 21.242h3.049a1.85 1.85 0 0 0 1.85-1.851v-3.048a1.85 1.85 0 0 0-1.85-1.85H16.1a1.85 1.85 0 0 0-1.851 1.85v3.048a1.85 1.85 0 0 0 1.85 1.85"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.625 17.867v-.011M14.25 3.238v.012M21 6.617V4.713c0-.812-.659-1.47-1.47-1.47h-1.905M21 9.99h-3.375M17.625 6.617h-1.904c-.812 0-1.471.659-1.471 1.47v1.905"
    />
  </Svg>
);
export default IconlystQRCodeLight;
