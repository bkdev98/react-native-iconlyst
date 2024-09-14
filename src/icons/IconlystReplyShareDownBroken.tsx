import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareDownBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.018 12.408c0-6.115 6.168-5.235 6.168-5.235-2.247 1.018-3.07 2.858-3.07 5.235H15.2c.447 0 .684.529.385.86l-3.552 3.93a.514.514 0 0 1-.774-.015L7.934 13.26"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.198 21.25h.776c2.945 0 5.026-1.835 5.026-4.783V8.032c0-2.94-2.081-4.782-5.026-4.782H8.026C5.081 3.25 3 5.084 3 8.032v8.434c0 2.949 2.081 4.784 5.026 4.784h3.736"
    />
  </Svg>
);
export default IconlystReplyShareDownBroken;
