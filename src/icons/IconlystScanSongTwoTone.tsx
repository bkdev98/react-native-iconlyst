import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSongTwoTone = ({
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
      d="M3.5 15.531v1.577a3.89 3.89 0 0 0 3.893 3.893h1.256M3.5 8.47V6.893A3.89 3.89 0 0 1 7.393 3h1.289M21.498 15.531v1.577a3.89 3.89 0 0 1-3.893 3.893h-1.289"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.156 12.55a3.289 3.289 0 1 1-6.364-1.661 3.289 3.289 0 0 1 6.364 1.662"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.156 12.55 18.647 3s.266 2.366 2.372 3.4"
    />
  </Svg>
);
export default IconlystScanSongTwoTone;
