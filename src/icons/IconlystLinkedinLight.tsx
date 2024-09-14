import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkedinLight = ({
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
      d="M15.818 9.381c1.705-.221 3.298.448 4.102 2.04.562 1.113.572 2.316.58 3.53v5.074a.475.475 0 0 1-.474.474c-.862.002-1.669 0-2.531 0a.476.476 0 0 1-.477-.474c-.002-1.85 0-3.293 0-5.142.001-.157-.025-.312-.036-.469-.334-2.269-3.507-2.277-3.751-.093-.036.245-.023.492-.025.739 0 1.79.002 3.175 0 4.965a.475.475 0 0 1-.476.475h-2.57a.475.475 0 0 1-.476-.477c.01-3.32.05-6.63.006-9.95a.477.477 0 0 1 .477-.483h2.564c.262 0 .475.214.475.476v.883c.6-.943 1.49-1.41 2.612-1.568M3.634 10.066c0-.263.213-.476.475-.476h2.585c.262 0 .475.213.475.476q.002 4.98-.001 9.959a.475.475 0 0 1-.476.475h-2.58a.475.475 0 0 1-.476-.475c-.004-3.32 0-6.64-.002-9.96"
    />
    <Circle
      cx={5.402}
      cy={5.402}
      r={1.902}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystLinkedinLight;
