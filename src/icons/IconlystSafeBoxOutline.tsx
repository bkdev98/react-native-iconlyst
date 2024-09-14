import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBoxOutline = ({
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
      d="M2.5 7.596a4.93 4.93 0 0 1 4.933-4.932h9.635A4.93 4.93 0 0 1 22 7.596v7.434a4.933 4.933 0 0 1-4.933 4.933H7.433A4.933 4.933 0 0 1 2.5 15.03zm4.933-3.432A3.43 3.43 0 0 0 4 7.596v7.434a3.433 3.433 0 0 0 3.433 3.433h9.634A3.433 3.433 0 0 0 20.5 15.03V7.596a3.43 3.43 0 0 0-3.432-3.432z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 9.844a1.47 1.47 0 1 0-.002 2.94 1.47 1.47 0 0 0 .002-2.94m-2.972 1.47a2.97 2.97 0 1 1 5.94 0 2.97 2.97 0 0 1-5.94 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 12.785a.75.75 0 0 1 .75.75v1.854a.75.75 0 0 1-1.5 0v-1.854a.75.75 0 0 1 .75-.75M12.25 6.484a.75.75 0 0 1 .75.75V9.1a.75.75 0 0 1-1.5 0V7.234a.75.75 0 0 1 .75-.75M7.424 11.313a.75.75 0 0 1 .75-.75h1.853a.75.75 0 1 1 0 1.5H8.174a.75.75 0 0 1-.75-.75M13.726 11.313a.75.75 0 0 1 .75-.75h1.853a.75.75 0 0 1 0 1.5h-1.853a.75.75 0 0 1-.75-.75M6.536 18.41a.75.75 0 0 1 .75.75v1.426a.75.75 0 0 1-1.5 0V19.16a.75.75 0 0 1 .75-.75M17.968 18.41a.75.75 0 0 1 .75.75v1.426a.75.75 0 0 1-1.5 0V19.16a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSafeBoxOutline;
