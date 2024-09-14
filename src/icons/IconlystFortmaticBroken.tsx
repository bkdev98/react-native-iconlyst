import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFortmaticBroken = ({
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
      d="M3.5 14.22V20c0 .55.45 1 1 1H7c.55 0 1-.45 1-1V7.5h12.5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1v4.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.73 12H13.5c-.55 0-1 .45-1 1v2.5c0 .55.45 1 1 1H17V21c1.19 0 2.34-.47 3.18-1.32.84-.84 1.32-1.99 1.32-3.18V13c0-.55-.45-1-1-1h-2.16"
    />
  </Svg>
);
export default IconlystFortmaticBroken;
