import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBrokencurved = ({
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
      d="M3.123 12.41c-1.073-3.35.182-7.515 3.7-8.647 1.85-.597 4.132-.099 5.43 1.69 1.222-1.855 3.571-2.283 5.42-1.69 3.515 1.132 4.777 5.297 3.705 8.647-1.67 5.31-7.497 8.076-9.126 8.076-1.21 0-4.715-1.495-7.14-4.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.99 7.528c1.207.124 1.962 1.08 1.917 2.422"
    />
  </Svg>
);
export default IconlystHeartBrokencurved;
