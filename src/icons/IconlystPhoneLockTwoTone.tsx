import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLockTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.984 10.13-.001-2.586a3.584 3.584 0 0 0-3.585-3.585H8.933a3.585 3.585 0 0 0-3.586 3.585v10.667a3.586 3.586 0 0 0 3.586 3.586"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.932 21.96h3.824a1.897 1.897 0 0 0 1.898-1.897v-2.148c0-1.048-.85-1.897-1.898-1.897h-3.824a1.897 1.897 0 0 0-1.898 1.897v2.148c0 1.048.85 1.897 1.898 1.897M15.845 18.701v.676"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.127 16.054v-1.075a2.282 2.282 0 0 0-4.565-.01v1.085M10.284 7.615h2.758"
    />
  </Svg>
);
export default IconlystPhoneLockTwoTone;
