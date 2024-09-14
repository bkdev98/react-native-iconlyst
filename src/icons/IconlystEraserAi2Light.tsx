import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserAi2Light = ({
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
      d="M13.66 3.656c1.003-.432 2.103-.244 2.988.641l3.487 3.487c1.219 1.22 1.117 2.838-.1 4.055l-8.627 8.628-3.2.079a2 2 0 0 1-1.462-.585l-2.882-2.88c-1.218-1.22-1.116-2.838.102-4.056l3.03-3.031M8.838 20.567H19.98M5.987 11.02l7.446 7.447"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.83 4.131.109.294a4.04 4.04 0 0 0 2.387 2.39l.293.109-.293.108a4.04 4.04 0 0 0-2.387 2.39l-.109.294-.108-.293a4.04 4.04 0 0 0-2.387-2.39l-.293-.11.293-.108a4.04 4.04 0 0 0 2.387-2.39zM4.31 3.433l.05.138c.192.52.601.93 1.12 1.122l.138.051-.137.051c-.52.193-.929.603-1.12 1.122l-.052.138-.05-.138a1.9 1.9 0 0 0-1.121-1.122L3 4.745l.138-.052c.519-.192.928-.602 1.12-1.122z"
    />
  </Svg>
);
export default IconlystEraserAi2Light;
