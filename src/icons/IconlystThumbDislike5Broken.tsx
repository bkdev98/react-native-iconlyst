import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike5Broken = ({
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
      d="M17.274 8.795V6.492c0-1.036 0-1.554.2-1.952a1.88 1.88 0 0 1 .841-.842c.397-.198.915-.198 1.951-.198M20.266 15.523c-1.036 0-1.554 0-1.95-.198a1.88 1.88 0 0 1-.843-.842c-.199-.397-.199-.915-.199-1.952M11.38 3.54l1.44.011c1.543 0 3.067.942 4.453 1.516M17.274 14.267c-1.431 0-3.602 1.51-4.447 5.31-.11.488-.234.727-.751.922-3.656 0-2.9-5.03-2.067-6.39H7.393c-3.878 0-3.657-3.013-3.657-5.988 0-2.851 1.83-4.57 4.49-4.57"
    />
  </Svg>
);
export default IconlystThumbDislike5Broken;
