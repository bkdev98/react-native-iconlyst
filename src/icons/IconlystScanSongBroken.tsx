import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSongBroken = ({
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
      d="M3.25 15.53v1.577A3.89 3.89 0 0 0 7.143 21h1.256M3.25 8.47V6.893A3.89 3.89 0 0 1 7.143 3h1.289M21.248 15.531v1.577a3.89 3.89 0 0 1-3.893 3.893h-1.289M9.543 10.89a3.288 3.288 0 1 1 .497 2.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.906 12.55 18.397 3s.266 2.366 2.372 3.4"
    />
  </Svg>
);
export default IconlystScanSongBroken;
