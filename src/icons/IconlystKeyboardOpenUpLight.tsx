import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardOpenUpLight = ({
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
      d="M9.678 4.52 11.995 3l2.328 1.528M16.114 20.993H7.878c-2.866 0-4.641-1.598-4.632-4.535v-4.743c0-2.938 1.775-4.545 4.64-4.545h8.228c2.858 0 4.642 1.635 4.642 4.619v4.669c0 2.938-1.784 4.535-4.642 4.535M14.745 17.383H9.254"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.01 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M13.656 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M10.334 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M16.98 11.029v-.022m0-.114a.113.113 0 1 0 0 .225.113.113 0 0 0 0-.225M11.996 13.831v-.021m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M8.672 13.831v-.021m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.318 13.831v-.021m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboardOpenUpLight;
