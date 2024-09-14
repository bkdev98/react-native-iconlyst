import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarOutline = ({
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
      d="M16.037 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.767 2.25a.75.75 0 0 1 .75.75v2.962a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.938 4.951c.919-.874 2.198-1.281 3.655-1.281h7.62c1.46 0 2.74.407 3.658 1.282.923.88 1.382 2.141 1.378 3.648v3.924a.75.75 0 0 1-1.5 0V8.597c.004-1.199-.355-2.027-.913-2.56-.565-.538-1.432-.867-2.623-.867h-7.62c-1.187 0-2.055.33-2.622.868-.561.534-.922 1.363-.922 2.56v8.146c0 1.223.363 2.073.927 2.62.568.55 1.434.885 2.617.885h4.018a.75.75 0 0 1 0 1.5H8.593c-1.462 0-2.742-.419-3.66-1.308-.922-.894-1.384-2.171-1.384-3.697V8.599c0-1.508.464-2.768 1.389-3.648"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.159 16.328a1.96 1.96 0 1 0 0 3.921 1.96 1.96 0 0 0 0-3.92m-3.46 1.96a3.46 3.46 0 1 1 6.92 0 3.46 3.46 0 0 1-6.92 0M7.4 9.9a.75.75 0 0 1 .75-.75h8.497a.75.75 0 0 1 0 1.5H8.151a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarOutline;
