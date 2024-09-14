import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSongLight = ({
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
      d="M3 15.531v1.577a3.89 3.89 0 0 0 3.893 3.893h1.256M3 8.47V6.893A3.89 3.89 0 0 1 6.893 3h1.289M20.998 15.531v1.577a3.89 3.89 0 0 1-3.893 3.893h-1.289"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.656 12.55a3.289 3.289 0 1 1-6.364-1.661 3.289 3.289 0 0 1 6.364 1.662"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.656 12.55 18.147 3s.266 2.366 2.372 3.4"
    />
  </Svg>
);
export default IconlystScanSongLight;
