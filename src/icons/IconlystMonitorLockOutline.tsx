import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorLockOutline = ({
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
      d="M17.221 17.831H7.278A4.784 4.784 0 0 1 2.5 13.052V7.595a4.784 4.784 0 0 1 4.778-4.779h9.943A4.785 4.785 0 0 1 22 7.596v5.456a4.785 4.785 0 0 1-4.779 4.78M7.278 4.316A3.283 3.283 0 0 0 4 7.596v5.456a3.283 3.283 0 0 0 3.278 3.28h9.943a3.283 3.283 0 0 0 3.279-3.28V7.595a3.283 3.283 0 0 0-3.279-3.279z"
    />
    <Path
      fill={props.color}
      d="M13.523 14.258h-2.546a2.016 2.016 0 0 1-2.014-2.014v-1.43A2.015 2.015 0 0 1 10.977 8.8h2.546a2.015 2.015 0 0 1 2.014 2.013v1.43a2.016 2.016 0 0 1-2.014 2.014M10.977 10.3a.514.514 0 0 0-.514.513v1.43a.514.514 0 0 0 .514.514h2.546a.514.514 0 0 0 .514-.514v-1.43a.514.514 0 0 0-.514-.513z"
    />
    <Path
      fill={props.color}
      d="M13.77 10.329a.75.75 0 0 1-.75-.75v-.941a.77.77 0 0 0-.77-.751h-.01a.774.774 0 0 0-.76.757v.935a.75.75 0 1 1-1.5 0v-.947a2.26 2.26 0 0 1 2.242-2.245h.029a2.27 2.27 0 0 1 2.27 2.242v.95a.75.75 0 0 1-.751.75M17.195 21.746H7.307a.75.75 0 1 1 0-1.5h9.888a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M9.499 21.75a.748.748 0 0 1-.741-.87l.638-3.917a.75.75 0 0 1 1.48.24l-.638 3.917a.75.75 0 0 1-.74.63M15.003 21.748a.75.75 0 0 1-.74-.63l-.636-3.917a.75.75 0 1 1 1.48-.24l.637 3.917a.75.75 0 0 1-.741.87"
    />
  </Svg>
);
export default IconlystMonitorLockOutline;
