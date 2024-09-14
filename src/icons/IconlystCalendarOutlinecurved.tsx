import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarOutlinecurved = ({
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
      d="M5.309 7.06c-1.227 1.227-1.81 3.28-1.81 6.716s.583 5.488 1.81 6.715S8.588 22.3 12.024 22.3s5.489-.583 6.716-1.81c1.226-1.226 1.809-3.278 1.809-6.714s-.583-5.489-1.81-6.716c-1.226-1.226-3.279-1.808-6.715-1.808s-5.488.582-6.715 1.808M4.249 6c1.67-1.672 4.256-2.248 7.775-2.248S18.128 4.328 19.8 6c1.672 1.671 2.249 4.256 2.249 7.776s-.577 6.104-2.249 7.776c-1.672 1.67-4.257 2.248-7.776 2.248s-6.104-.577-7.776-2.248S2 17.295 2 13.776 2.577 7.67 4.248 6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.275 10.324a.75.75 0 0 1 .75-.75h18.008a.75.75 0 1 1 0 1.5H3.025a.75.75 0 0 1-.75-.75M15.679 14.261a.75.75 0 0 1 .75-.75h.009a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M11.28 14.261a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5h-.009a.75.75 0 0 1-.75-.75M6.871 14.261a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M15.679 18.113a.75.75 0 0 1 .75-.75h.009a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M11.28 18.113a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5h-.009a.75.75 0 0 1-.75-.75M6.871 18.113a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M16.033 2.3a.75.75 0 0 1 .75.75v3.262a.75.75 0 0 1-1.5 0V3.05a.75.75 0 0 1 .75-.75M8.025 2.3a.75.75 0 0 1 .75.75v3.262a.75.75 0 0 1-1.5 0V3.05a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarOutlinecurved;
