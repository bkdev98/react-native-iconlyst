import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServer2Broken = ({
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
      d="M10.4 3h7.125a3 3 0 0 1 0 6H6.491a3 3 0 1 1 0-6h.946M3.49 12a3 3 0 0 1 3-3h11.035a3 3 0 1 1 0 6h-7.124M13.615 21H6.491a3 3 0 0 1 0-6h11.034a3 3 0 1 1 0 6h-.946M13.072 5.988h2.385M7.635 5.988h.01M13.072 12h2.385M7.635 12h.01M13.072 18h2.385M7.635 18h.01"
    />
  </Svg>
);
export default IconlystServer2Broken;
