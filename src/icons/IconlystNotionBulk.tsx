import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotionBulk = ({
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
      d="M20.25 18.68c0 .63-.51 1.14-1.14 1.14H8.29c-.63 0-1.14-.51-1.14-1.14V8.51c0-.578.58-1.15 1.14-1.15h10.82c.63 0 1.14.52 1.14 1.15zM4.403 4.323a1.6 1.6 0 0 1 .6-.116h11.178c.727 0 1.404.28 1.918.775l.881.852c-3.994 0-12.305.024-12.305.024s-.758-.066-1.248-.54zM20.74 5.48 19.11 3.9a4.34 4.34 0 0 0-3.02-1.22H5.58a3.34 3.34 0 0 0-3.33 3.33v9.69c0 1.19.47 2.3 1.33 3.13l1.61 1.57c.63.59 1.45.92 2.31.92h11.61c1.46 0 2.64-1.18 2.64-2.64V7.86c0-.9-.36-1.75-1.01-2.38"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.083 9.785c-.433-.027-.754.326-.76.74l-.043 3.87-3.655-4.4a.752.752 0 0 0-1.327.471l-.068 5.91a.75.75 0 0 0 .74.759h.01a.75.75 0 0 0 .75-.742l.045-3.87 3.654 4.4a.75.75 0 0 0 .828.228.75.75 0 0 0 .499-.698l.068-5.91a.75.75 0 0 0-.741-.758"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotionBulk;
