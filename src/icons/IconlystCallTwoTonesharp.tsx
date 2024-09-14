import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallTwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.281 14.273c-1.708-1.708-2.161-3.614-2.161-3.614l1.643-2.854-3.24-4.451c-1.49.874-2.604 1.98-3.472 3.472-.503 2.686 1.18 6.869 4.24 10.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.281 14.273c1.793 1.792 3.793 2.34 3.793 2.34l2.854-1.643 4.61 3.4c-.857 1.532-1.939 2.614-3.471 3.472-4.294.196-8.073-1.984-10.777-4.876"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCallTwoTonesharp;
