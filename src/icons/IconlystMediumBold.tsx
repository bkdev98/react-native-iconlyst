import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.051 15.35c-.901 0-.947-2.367-.947-2.841s.046-2.841.947-2.841c.902 0 .948 2.367.948 2.84 0 .475-.046 2.842-.948 2.842m-3.158 0c-.9 0-1.579-1.221-1.579-2.841s.679-2.841 1.579-2.841 1.579 1.22 1.579 2.84-.679 2.842-1.579 2.842m-5.05 0a2.844 2.844 0 0 1-2.841-2.841 2.844 2.844 0 0 1 2.841-2.841 2.844 2.844 0 0 1 2.841 2.84 2.844 2.844 0 0 1-2.841 2.842m7.374-12.341H7.782C4.623 3.009 2.5 5.23 2.5 8.539v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMediumBold;
