import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLockBroken = ({
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
      d="m17.734 9.171-.001-2.586A3.584 3.584 0 0 0 14.148 3H8.683a3.585 3.585 0 0 0-3.586 3.585v2.667M8.683 20.838a3.586 3.586 0 0 1-3.585-3.587v-5.333M17.506 21a1.897 1.897 0 0 0 1.898-1.896v-2.148c0-1.048-.85-1.897-1.898-1.897h-3.824a1.897 1.897 0 0 0-1.898 1.897v2.148c0 1.048.85 1.897 1.898 1.897h.668M15.595 17.742v.676"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.877 15.095V14.02a2.282 2.282 0 0 0-4.565-.01v1.085M10.034 6.656h2.758"
    />
  </Svg>
);
export default IconlystPhoneLockBroken;
