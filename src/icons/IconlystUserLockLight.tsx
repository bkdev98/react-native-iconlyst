import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLockLight = ({
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
      d="M18.103 19.999h-2.365a1.173 1.173 0 0 1-1.173-1.174v-1.327c0-.648.524-1.174 1.173-1.174h2.365c.647 0 1.173.526 1.173 1.174v1.327c0 .65-.526 1.174-1.173 1.174"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.33 16.35v-.874a1.412 1.412 0 0 0-2.822-.006v.88M11.176 14.695c-3.32 0-6.15.503-6.15 2.511 0 2.01 2.815 2.529 6.15 2.529"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.106 7.93a3.93 3.93 0 1 1-7.858-.001 3.93 3.93 0 0 1 7.858 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLockLight;
