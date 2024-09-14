import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification2Outlinesharp = ({
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
      d="M11.5 4.086V2.638H13v1.448a7.06 7.06 0 0 1 6.308 7.02v2.793c0 1.734.527 3.427 1.512 4.855l.81 1.176H2.87l.81-1.176a8.55 8.55 0 0 0 1.512-4.855v-2.793a7.06 7.06 0 0 1 6.309-7.02m.75 1.461a5.56 5.56 0 0 0-5.559 5.559v2.793c0 1.58-.372 3.131-1.079 4.53h13.275a10.05 10.05 0 0 1-1.079-4.53v-2.793a5.56 5.56 0 0 0-5.558-5.559"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.272 19.41v-.23h1.5v.23a2.479 2.479 0 0 0 4.957 0v-.23h1.5v.23a3.979 3.979 0 0 1-7.957 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotification2Outlinesharp;
