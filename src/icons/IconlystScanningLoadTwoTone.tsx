import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanningLoadTwoTone = ({
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
      d="M21.5 15.815v1.576a3.893 3.893 0 0 1-3.894 3.892h-1.289M3.499 15.815v1.576a3.893 3.893 0 0 0 3.893 3.892h1.257M3.499 8.752V7.175a3.89 3.89 0 0 1 3.893-3.892h1.289M21.5 8.752V7.175a3.89 3.89 0 0 0-3.892-3.892H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.005 15.124a3.788 3.788 0 0 1-6.293-2.841M9.993 9.441a3.788 3.788 0 0 1 6.294 2.841"
    />
  </Svg>
);
export default IconlystScanningLoadTwoTone;
