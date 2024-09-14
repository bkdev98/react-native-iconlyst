import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOutline = ({
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
      d="M12.25 9.896a5.66 5.66 0 1 0 0 11.32 5.66 5.66 0 0 0 0-11.32m-7.16 5.66a7.16 7.16 0 1 1 14.32 0 7.16 7.16 0 0 1-14.32 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 13.81a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75M15.607 8.023a3.355 3.355 0 0 0-3.4-3.306 3.35 3.35 0 0 0-3.309 3.288v2.641a.75.75 0 0 1-1.5 0v-2.66a4.855 4.855 0 0 1 9.709.022v2.638a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockOutline;
