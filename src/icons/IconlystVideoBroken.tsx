import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBroken = ({
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
      d="M9.803 18.996c1.605.003 3.126.004 3.191.002 1.905-.078 3.384-1.628 3.303-3.46 0 0 .003-7.332-.008-7.464-.147-1.834-1.81-3.206-3.716-3.064 0 0-6.83-.013-6.972-.006-1.905.081-3.382 1.634-3.298 3.468 0 0-.003 7.338.008 7.474.15 1.826 1.809 3.188 3.704 3.044 0 0-.32 0 .485.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.3 13.868 3.28 2.695c.814.668 2.039.09 2.04-.962l.012-7.35c0-1.052-1.223-1.634-2.04-.966l-1.074.88"
    />
  </Svg>
);
export default IconlystVideoBroken;
