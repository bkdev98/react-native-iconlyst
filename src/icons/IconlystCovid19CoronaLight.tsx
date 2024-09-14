import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCovid19CoronaLight = ({
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
      d="M11.856 6.028c.57-.11 1.106-1.464.086-2.266M11.856 18.223c.748.105.957 1.555-.11 2.017M16.644 8.184c2.583 0 3.18-1.854 2.464-3.407M7.55 16.469c0 1.249-.953 3.266-3.514 2.257M21 12.12c-.908-.84-2.515-.606-3.049 0-.352.408-1.332 1.144-2.428.827M8.675 12.191c.793.159 1.798 1.433 1.525 2.64M5.758 12.12c-.91-.605-1.232.707-2.758.17M16.166 16.438c1.349.103 2.786 1.317 2.204 3.581M7.542 7.812c-2.728 0-.732-2.532-2.915-2.703"
    />
    <Circle
      cx={11.855}
      cy={12.124}
      r={6.097}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.31 10.007h.027m.481-.096a.481.481 0 1 0-.963 0 .481.481 0 0 0 .963 0M13.252 14.777h.004m.071-.014a.071.071 0 1 0-.142 0 .071.071 0 0 0 .142 0"
    />
  </Svg>
);
export default IconlystCovid19CoronaLight;
