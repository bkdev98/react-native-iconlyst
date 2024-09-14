import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoNotTouchBroken = ({
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
      d="M8.678 8.5V4.68c0-.928.75-1.68 1.68-1.68.92 0 1.67.737 1.68 1.655l.07 4.347c.83.08 1.8.116 2.74.244M17.848 18.5c1.22-1.82 1.78-4.628.97-6.829a3.14 3.14 0 0 0-.97-1.355M4.178 4.09l15.67 16.523M8.677 14.32l-1.2-1.744a1.836 1.836 0 0 0-2.17-.673c-.9.343-1.38 1.315-1.05 2.216.61 1.68 1.58 3.555 2.82 5.1 1.6 1.998 5.92 2.247 8.6 1.09"
    />
  </Svg>
);
export default IconlystDoNotTouchBroken;
