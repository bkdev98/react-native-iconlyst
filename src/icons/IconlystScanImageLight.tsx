import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanImageLight = ({
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
      d="M21 8.47V6.893A3.89 3.89 0 0 0 17.107 3H15.85M3 8.47V6.893A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.106 21h-1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.62 13.515 2.884-4.682a.763.763 0 0 1 1.273-.043l1.802 2.53a.764.764 0 0 0 1.204.053l.648-.758a.764.764 0 0 1 1.233.097l1.716 2.805a.764.764 0 0 1-.652 1.162H7.27a.764.764 0 0 1-.65-1.164"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanImageLight;
