import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanBold = ({
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
      d="M17.107 2.25H15.85a.75.75 0 0 0 0 1.5h1.258a3.147 3.147 0 0 1 3.143 3.142V8.47a.75.75 0 0 0 1.5 0V6.892a4.65 4.65 0 0 0-4.643-4.642M3 9.219a.75.75 0 0 0 .75-.75V6.892A3.146 3.146 0 0 1 6.893 3.75h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 6.892v1.577c0 .414.336.75.75.75M8.15 20.25H6.892a3.146 3.146 0 0 1-3.142-3.142v-1.577a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.642 4.642H8.15a.75.75 0 0 0 0-1.5M20.998 14.782a.75.75 0 0 0-.75.75v1.576a3.146 3.146 0 0 1-3.142 3.142h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.642-4.642v-1.577a.75.75 0 0 0-.75-.75M7.5 15.963a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM6.75 8.988v2.38c0 1.35 1.1 2.45 2.45 2.45h5.599a2.454 2.454 0 0 0 2.45-2.45v-2.38c0-1.35-1.1-2.45-2.45-2.45h-5.6c-1.35 0-2.45 1.1-2.45 2.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarcodeScanBold;
