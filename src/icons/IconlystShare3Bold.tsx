import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare3Bold = ({
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
      d="M8.979 5.562a8.19 8.19 0 0 0-4.886 5.42.75.75 0 0 0 1.445.401A6.69 6.69 0 0 1 9.27 7.066 3.1 3.1 0 0 0 12.07 8.84a3.1 3.1 0 0 0 3.094-3.094 3.1 3.1 0 0 0-3.094-3.095 3.1 3.1 0 0 0-3.09 2.912M18.406 19.905a3.1 3.1 0 0 1-3.095-3.095 3.1 3.1 0 0 1 3.316-3.087 6.73 6.73 0 0 0-2.224-5.591.751.751 0 0 1 .994-1.124 8.24 8.24 0 0 1 2.685 7.201 3.096 3.096 0 0 1-1.676 5.696M5.595 19.905A3.1 3.1 0 0 1 2.5 16.81a3.1 3.1 0 0 1 3.095-3.095 3.1 3.1 0 0 1 3.094 3.095c0 .673-.216 1.296-.582 1.805a6.73 6.73 0 0 0 5.383 1.066.749.749 0 1 1 .339 1.461 8.243 8.243 0 0 1-6.903-1.538 3.1 3.1 0 0 1-1.331.3"
    />
  </Svg>
);
export default IconlystShare3Bold;
