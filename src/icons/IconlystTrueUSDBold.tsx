import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrueUSDBold = ({
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
      d="M17.117 10.06a.266.266 0 0 1-.266.265h-2.86v5.703a.266.266 0 0 1-.267.266h-2.807a.266.266 0 0 1-.266-.267V10.04a3.13 3.13 0 0 1 3.124-3.125h3.076c.147 0 .266.119.266.266zm-9.649.229h-.2a.266.266 0 0 1-.266-.266V7.18c0-.147.12-.266.266-.266h3.17a.267.267 0 0 1 .266.277 3.23 3.23 0 0 1-3.236 3.098m4.591-8.185c-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5 5.24 0 9.5-4.262 9.5-9.5 0-5.24-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrueUSDBold;
