import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCheckOutline = ({
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
      d="M4.027 4.85c.98-1.052 2.377-1.641 4.026-1.641h8.394c1.652 0 3.05.588 4.03 1.64.974 1.047 1.48 2.492 1.48 4.112v5.973a.75.75 0 1 1-1.5 0V8.961c0-1.31-.407-2.367-1.079-3.089-.666-.716-1.65-1.163-2.931-1.163H8.053c-1.277 0-2.26.447-2.929 1.163-.673.723-1.081 1.78-1.081 3.089v7.91c0 1.31.407 2.367 1.079 3.089.666.716 1.65 1.163 2.93 1.163h4.521a.75.75 0 0 1 0 1.5h-4.52c-1.652 0-3.05-.588-4.03-1.64-.974-1.047-1.48-2.492-1.48-4.112v-7.91c0-1.621.509-3.066 1.484-4.112"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.251 9.178a3.81 3.81 0 0 0-3.312 1.928.75.75 0 0 1-1.304-.742 5.307 5.307 0 0 1 6.662-2.277.75.75 0 1 1-.58 1.384 3.8 3.8 0 0 0-1.466-.293M15.544 9.749a.75.75 0 0 1 1.045.18c.61.864.97 1.92.97 3.057v2.802a.75.75 0 0 1-1.5 0v-2.802c0-.818-.257-1.572-.695-2.192a.75.75 0 0 1 .18-1.045M7.695 12.799a.75.75 0 0 1 .75.75v2.822a.75.75 0 1 1-1.5 0v-2.822a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.666 13.152a2.545 2.545 0 1 1 5.09 0v4.252a.75.75 0 0 1-1.5 0v-4.252a1.045 1.045 0 1 0-2.09 0v.48a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.416 15.037a.75.75 0 0 1 .75.75v1.615a.75.75 0 0 1-1.5 0v-1.615a.75.75 0 0 1 .75-.75M21.573 17.437a.75.75 0 0 1 0 1.06l-3.995 3.994a.75.75 0 0 1-1.06 0l-1.597-1.598a.75.75 0 0 1 1.06-1.06l1.067 1.067 3.464-3.463a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareTouchIdCheckOutline;
