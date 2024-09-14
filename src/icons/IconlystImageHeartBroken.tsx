import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageHeartBroken = ({
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
      d="m3.004 15.572 3.949-2.867a3.86 3.86 0 0 1 4.816.224l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.999 15.473c-.84-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.175 1.316M7.778 20.994C4.833 20.994 3 18.917 3 15.973V8.026C3 5.08 4.843 3.004 7.778 3.004h3.274"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.95v5.022c0 2.945-1.843 5.021-4.788 5.021h-4.547M17.668 8.664s-2.331-1.279-2.853-2.938c-.336-1.048.06-2.245 1.158-2.599a1.89 1.89 0 0 1 1.694.285 1.88 1.88 0 0 1 1.698-.285c1.1.354 1.49 1.55 1.156 2.599-.18.557-.554 1.067-.974 1.501"
    />
  </Svg>
);
export default IconlystImageHeartBroken;
