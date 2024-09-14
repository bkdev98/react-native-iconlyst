import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailEditOutline = ({
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
      fill={props.color}
      d="M7.606 20.247a4.84 4.84 0 0 1-3.5-1.424 5.7 5.7 0 0 1-1.6-4.1V8.84A5.217 5.217 0 0 1 7.622 3.31h8.42a5.217 5.217 0 0 1 5.11 5.528v1.6a.75.75 0 1 1-1.5 0v-1.6a3.71 3.71 0 0 0-3.616-4.028H7.617a3.71 3.71 0 0 0-3.615 4.028v5.888a4.23 4.23 0 0 0 1.165 3.035 3.4 3.4 0 0 0 2.45.985h4.135a.75.75 0 0 1 0 1.5H7.606"
    />
    <Path
      fill={props.color}
      d="M16.241 20.688a1.523 1.523 0 0 1-1.509-1.686l.077-.714a2.4 2.4 0 0 1 .6-1.344l3.016-3.29a1.7 1.7 0 0 1 2.4-.1l.634.588a1.7 1.7 0 0 1 .093 2.4l-2.973 3.246a2.4 2.4 0 0 1-1.389.762l-.692.116q-.127.022-.257.022m3.431-6.083a.2.2 0 0 0-.148.065l-3 3.28a.9.9 0 0 0-.219.5l-.077.712.717-.09a.9.9 0 0 0 .526-.289l2.981-3.254a.2.2 0 0 0-.008-.282l-.634-.589a.2.2 0 0 0-.138-.056zM11.853 13.357c-.614 0-1.21-.21-1.69-.591l-3.847-3.1a.75.75 0 1 1 .941-1.168l3.843 3.1a1.215 1.215 0 0 0 1.515 0l3.8-3.093a.75.75 0 0 1 .947 1.164l-3.81 3.1a2.74 2.74 0 0 1-1.699.588"
    />
  </Svg>
);
export default IconlystEmailEditOutline;
