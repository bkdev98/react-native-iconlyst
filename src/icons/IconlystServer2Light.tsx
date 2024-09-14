import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServer2Light = ({
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
      d="M6.5 9h11a3 3 0 1 1 0 6h-11a3 3 0 1 1 0-6M7.633 12h.002M13.045 12h2.4M6.5 15h11a3 3 0 1 1 0 6h-11a3 3 0 1 1 0-6M7.633 18h.002M13.045 18h2.4M6.5 3h11a3 3 0 1 1 0 6h-11a3 3 0 0 1 0-6M7.633 6h.002M13.045 6h2.4"
    />
  </Svg>
);
export default IconlystServer2Light;
