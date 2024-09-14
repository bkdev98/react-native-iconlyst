import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAuthereumBroken = ({
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
      d="M18.63 15c.81-1.24 1.37-2.7 1.37-4.42V4.91l-4.5-1.42M9.47 3.5 5 4.92v5.67c0 5.67 5.97 8.5 7.48 9.92.66-.62 2.17-1.5 3.66-2.76"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.25 14.83 2.25-4.25 2.25 4.25-2.25 1.42M11 6.33l1.5-2.83L17 12M8 12l1.43-2.7"
    />
  </Svg>
);
export default IconlystAuthereumBroken;
