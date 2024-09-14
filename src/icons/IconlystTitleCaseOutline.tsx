import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTitleCaseOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.256 6.574a.75.75 0 0 1 .687.45L13.7 17.909a.75.75 0 0 1-1.374.6L8.256 9.199 4.187 18.51a.75.75 0 0 1-1.374-.6L7.569 7.023a.75.75 0 0 1 .687-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.451 14.316a.75.75 0 0 1 .75-.75h6.11a.75.75 0 0 1 0 1.5h-6.11a.75.75 0 0 1-.75-.75M18.33 12.617a2.419 2.419 0 1 0 0 4.84 2.42 2.42 0 0 0 0-4.84m-3.92 2.42a3.919 3.919 0 1 1 7.84 0 3.92 3.92 0 0 1-7.84 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 11.316a.75.75 0 0 1 .75.75v5.946a.75.75 0 0 1-1.5 0v-5.946a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTitleCaseOutline;
