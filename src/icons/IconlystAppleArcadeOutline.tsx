import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleArcadeOutline = ({
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
      d="M4.105 12.102a.75.75 0 0 1 .75.75v4.301c0 .099.06.188.15.226l6.509 2.77c.31.133.662.133.972 0l6.509-2.77a.25.25 0 0 0 .15-.226v-4.301a.75.75 0 1 1 1.5 0v4.301c0 .7-.418 1.332-1.063 1.607l-6.508 2.77a2.74 2.74 0 0 1-2.148 0l-6.508-2.77a1.75 1.75 0 0 1-1.063-1.607v-4.301a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.945 8.629a2.74 2.74 0 0 1 2.11 0l6.522 2.719c1.432.597 1.432 2.626 0 3.222l-6.523 2.72a2.74 2.74 0 0 1-2.11 0l-6.521-2.72c-1.432-.596-1.432-2.625 0-3.222zm1.532 1.385a1.24 1.24 0 0 0-.955 0L5 12.732a.246.246 0 0 0 0 .454l6.522 2.719c.306.127.65.127.955 0L19 13.186a.246.246 0 0 0 0-.454zM12.002 3.75a1.242 1.242 0 1 0 0 2.483 1.242 1.242 0 0 0 0-2.483M9.26 4.992a2.742 2.742 0 1 1 5.483 0 2.742 2.742 0 0 1-5.483 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 6.234a.75.75 0 0 1 .75.75v5.976a.75.75 0 0 1-1.5 0V6.984a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppleArcadeOutline;
