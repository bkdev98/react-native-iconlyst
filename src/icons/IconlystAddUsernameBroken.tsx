import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUsernameBroken = ({
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
      d="M3 12.001C3 7.031 7.03 3 11.999 3a9.05 9.05 0 0 1 4.481 1.173M15.6 8.642V12.9a2.7 2.7 0 0 0 2.7 2.7c1.659 0 2.7-1.362 2.7-3.599a9 9 0 0 0-1.662-5.251M17.074 19.434a9 9 0 0 1-7.222 1.308"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.398a3.6 3.6 0 1 1-2.9 1.467M8.02 17.553H3m2.51 2.51v-5.02"
    />
  </Svg>
);
export default IconlystAddUsernameBroken;
