import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostBankBroken = ({
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
      d="M3 21V10.434c.008-.71.344-1.377.912-1.805l6.206-4.98a3.01 3.01 0 0 1 3.736 0l2.36 1.884M21 21V10.425a2.3 2.3 0 0 0-.912-1.8l-1.559-1.244"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.03 21C8.655 21 7.8 20.028 7.8 18.654v-3.71c0-1.374.86-2.346 2.232-2.346h3.937c1.376 0 2.233.972 2.233 2.347v3.709c0 1.374-.857 2.346-2.233 2.346h-.931M10.842 15.945h2.314"
    />
  </Svg>
);
export default IconlystPostBankBroken;
