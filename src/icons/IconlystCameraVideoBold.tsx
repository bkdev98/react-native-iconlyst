import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.949 15.18h-2.52a.749.749 0 1 1 0-1.5h2.52a.749.749 0 1 1 0 1.5m8.89-2.84a1.62 1.62 0 0 0-1.11-.61 1.6 1.6 0 0 0-1.21.37l-2.24 1.86c-.17-2.23-1.68-3.71-3.88-3.71h-6.02c-2.34 0-3.92 1.66-3.92 4.14v2.97c0 2.48 1.58 4.14 3.92 4.14h6.02c2.2 0 3.71-1.48 3.88-3.71l2.22 1.85c.3.25.67.39 1.05.39.9 0 1.64-.74 1.64-1.66l.02-4.98c0-.38-.13-.75-.37-1.05M13.42 9.37c1.872 0 3.394-1.539 3.394-3.431 0-1.896-1.522-3.439-3.394-3.439s-3.394 1.543-3.394 3.439c0 1.892 1.522 3.431 3.394 3.431M6.482 9.37c1.304 0 2.364-1.072 2.364-2.391 0-1.317-1.06-2.39-2.364-2.39S4.118 5.663 4.118 6.98c0 1.319 1.06 2.39 2.364 2.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraVideoBold;
